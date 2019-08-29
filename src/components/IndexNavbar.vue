<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/index" class="navbar nav-title title">
          <strong>成飲</strong>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-3 ml-3">
            <li class="nav-item item-content mr-3 active">
              <router-link class="nav-link btn btn-light" to="/productslist"><strong>產品列表</strong></router-link>
            </li>
            <!-- <span class="span-content mr-3 mt-2">|</span> -->
            <li class="nav-item item-content mr-3 active">
              <router-link class="nav-link btn btn-light" to="#"><strong>品牌介紹</strong></router-link>
            </li>
            <!-- <span class="span-content mr-3 mt-2">|</span> -->
            <li class="nav-item item-content mr-3 active">
              <router-link class="nav-link btn btn-light" to="#"><strong>聯絡我們</strong></router-link>
            </li>
            <li class="nav-item item-content mr-3 active">
              <router-link to="/cart" class="nav-link btn btn-light"><strong>購物車</strong></router-link>
            </li>
            <li class="nav-item item-content active">
              <router-link to="/login" class="nav-link btn btn-light"><strong>管理員登入</strong></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.title {
  font-family: "微軟正黑體";
  font-size: 38px;
  margin-left: -10px;
  color: black;
}
.item-content {
  font-size: 16px;
}
.title:hover {
  color: gray;
  text-decoration: none;
}
</style>
