<template>
  <div class="container">
    <IndexNavbar />
    <div class="my-5 row justify-content-center">
      <table class="table text-center">
        <thead>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="align-middle text-center">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group input-group-sm">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-center mb-3">
        <router-link to="/productslist" class="btn btn-secondary mr-3">繼續選購</router-link>
        <router-link to="/customerdata" class="btn btn-danger ml-3" :class="{'disabled' : cart.total === 0}">結帳</router-link>
      </div>
    </div>
    <IndexFooter />
  </div>
</template>

<script>
import IndexNavbar from "./IndexNavbar";
import IndexFooter from "./IndexFooter";

export default {
  components: {
    IndexNavbar,
    IndexFooter
  },
  data() {
    return {
      cart: {},
      isLoading: false,
      coupon_code: ""
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then(response => {
        this.cart = response.data.data
        this.isLoading = false;
      });
    },
    removeCartItem(id) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then(response => {
        this.isLoading = false;
        this.getCart();
      });
    },
    addCouponCode() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: this.coupon_code
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        this.getCart();
        this.isLoading = false;
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>