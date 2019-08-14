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
      <h2>熱門飲品</h2>
    </div>

    <div class="row">
      <div class="media mt-3">
        <img src="../assets/helpers/eattea_hot.jpeg" class="mr-3"/>
        <div class="media-body">
          <h5 class="mt-0"><strong>純喫茶 Try it!</strong></h5><br>
          <span class="product-content">純喫茶不同於市面上一般常溫茶飲，冷藏新鮮茶的保存期間只有15天！<br>為了讓茶更原味新鮮，純喫茶讓短短的15天，天天都新鮮。<br>純喫茶相信當我們把每一天都當成新鮮的一天，生命就會隨著豐富起來！<br>所以純喫茶鼓勵年輕人青春要過得精彩，想做就要趁現在！</span>
        </div>
      </div>
      <div class="media mt-3">
        <div class="media-body ml-3">
          <h5 class="mt-0"><strong>立頓奶茶Lipton</strong></h5><br>
          <span class="product-content">立頓 Lipton 為1890年由Thomas Lipton爵士於蘇格蘭所創立的茶品牌，產品遍佈全球超過120個國家，提供消費者茶包、茶粉及瓶裝茶等多樣選擇，釋放茶的能量，帶給你活力的每一天。</span>
        </div>
        <img src="../assets/helpers/lipton_hot.jpg" class="mr-3"/>
      </div>
      <div class="media mt-3 ml-3">
        <img src="../assets/helpers/maixiang_hot.jpg" class="mr-3"/>
        <div class="media-body">
          <h5 class="mt-0"><strong>麥香系列</strong></h5><br>
          <span class="product-content">擁有濃濃大麥香甜的麥香，從一開始的誕生，就源自於一段濃濃的人情味。<br>民國72年，當年任職統一企業郭經理到台中縣向友人請益，接受熱情招待之餘，更是得到毫不吝嗇的想法提供：當時大部分的人，在家中習慣煮紅茶飲用，如果在紅茶中加入焙炒大麥，不但增香去澀、更有退火效果；<br>再以統一專業飲料技術加上使用當時最先進的鋁箔包裝販售，消費者更能享受到衛生與便利。</span>
        </div>
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
</style>
