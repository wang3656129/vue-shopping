<template>
  <div class="container">
    <IndexNavbar />
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-3 col-12">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-md-10 col-12 d-flex align-items-center flex-column">
            <button
              type="button"
              class="btn btn-secondary mb-3 w-100"
              @click.prevent="keyText = ''"
              :class="{'active': keyText === ''}"
            >全部商品</button>
            <button
              type="button"
              class="btn btn-secondary mb-3 w-100"
              v-for="(item,i) in categoryList"
              :key="i"
              @click.prevent="keyText = item, currentPage = 1"
              :class="{'active': item === keyText}"
            >{{item}}</button>
          </div>
        </div>
      </div>

      <div class="col-md-9">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-4 card-shadow" v-for="item in filterData[currentPage - 1]" :key="item.id">
            <div class="card border-0 shadow-sm">
              <div
                class="img-fluid img-width"
                :style="{backgroundImage: `url(${item.imageUrl})`}"
              ></div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{ item.title }}</a>
                </h5>
                <p class="card-text">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                  <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="getProduct(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click.prevent="addtoCart(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <CustomerPagination
              class="mt-5 text-center"
              :products="filterData"
              @emitPages="getProducts"
            ></CustomerPagination>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-position img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <IndexFooter />
  </div>
</template>

<script>
import IndexNavbar from "./IndexNavbar";
import IndexFooter from "./IndexFooter";
import CustomerPagination from "./CustomerPagination";
import $ from "jquery";

export default {
  components: {
    IndexNavbar,
    IndexFooter,
    CustomerPagination
  },
  data() {
    return {
      categoryList: ['純喫茶', '立頓', '麥香'],
      products: [],
      keyText: "",
      product: {},
      currentPage: 1,
      pagination: {},
      status: {
        loadingItem: ""
      },
      isLoading: false
    };
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then(response => {
        this.products = response.data.products;
        this.currentPage = page;
        console.log(this.filterData);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      this.status.loadingItem = id;
      this.$http.get(url).then(response => {
        this.product = response.data.product;
        $("#productModal").modal("show");
        this.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        this.status.loadingItem = "";
        $("#productModal").modal("hide");
      });
    }
  },
  computed: {
    filterData() {
      const vm = this;
      let newData = [];
      if (vm.keyText !== "") {
        newData = vm.products.filter(item => {
          return item.category === vm.keyText;
        });
      } else {
        newData = vm.products;
      }
      let pageAry = [];
      newData.filter((item, i) => {
        if (i % 6 === 0) {
          pageAry.push([]);
        }
        let page = parseInt(i / 6);
        pageAry[page].push(item);
      });
      return pageAry;
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
.img-width{
  height: 250px; 
  background-size: cover; 
  background-position: center;
}
.img-position{
  margin-left: 55px;
}
.card-shadow{
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
}
  @media (max-width: 768px) {
    .img-width{
      height: 500px;
      width: 500px;
      background-position: center;
    }
  }
</style>