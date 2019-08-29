<template>
  <div class="container font">
    <loading :active.sync="isLoading"></loading>
    <IndexNavbar/>
    <div class="container mb-2">
      <div class="row">
        <div class="col-12">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner text-center">
              <div class="carousel-item active">
                <img src="../assets/helpers/lipton_title.jpg" class="w-100"/>
              </div>
              <div class="carousel-item">
                <img src="../assets/helpers/eattea_title.jpg" class="w-100"/>
              </div>
              <div class="carousel-item">
                <img src="../assets/helpers/maixiang_title.jpg" class="w-100"/>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-3">
      <h2><strong>熱門飲品</strong></h2>
    </div>

    <div class="row text-center">
      <div class="mt-3 col-md-4 col-12">
        <router-link to="/productslist"><img src="../assets/helpers/eattea_greentea_nosugar.jpg" class="img1-transition"/></router-link>
        <h3 class="mt-2">純喫茶系列</h3>
      </div>
      <div class="mt-3 col-md-4 col-12">
        <router-link to="/productslist"><img src="../assets/helpers/lipton_hot.jpg" class="img2-transition"/></router-link>
        <h3 class="mt-2">立頓系列</h3>
      </div>
      <div class="mt-3 col-md-4 col-12">
        <router-link to="/productslist"><img src="../assets/helpers/maixiang_hot.jpg" class="img3-transition"/></router-link>
        <h3 class="mt-2">麥香系列</h3>
      </div>
    </div>

    <IndexFooter/>

  </div>
</template>

<script>
import IndexNavbar from "./IndexNavbar";
import IndexFooter from "./IndexFooter";

export default {
  components: {
    IndexNavbar,
    IndexFooter
  }
};
</script>

<style>
.font{
  font-family: '微軟正黑體';
}
.product-content{
  font-size: 18px;
}
.img1-transition,.img2-transition,.img3-transition{
  width: 200px;
  transition:width 0.5s;
  -webkit-transition:width 0.5s;
  -moz-transition:width 0.5s;
  -o-transition:width 0.5s;
}
.img1-transition:hover,.img2-transition:hover,.img3-transition:hover {
  width: 250px;
}
</style>
