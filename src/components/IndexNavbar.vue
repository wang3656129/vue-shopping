<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/index" class="navbar nav-title title"><strong>成飲</strong></router-link>
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
      <ul class="navbar-nav mr-auto mt-3 ml-3">
        <li class="nav-item item-content mr-3">
          <router-link class="nav-link" to="/productslist">產品列表</router-link>
        </li><span class="span-content mr-3 mt-2">|</span>
        <li class="nav-item item-content mr-3">
          <router-link class="nav-link" to="#">品牌介紹</router-link>
        </li><span class="span-content mr-3 mt-2">|</span>
        <li class="nav-item item-content mr-3">
          <router-link class="nav-link" to="#">聯絡我們</router-link>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <router-link to="/cart" class="btn btn-light">購物車</router-link>
      <router-link to="/login" class="btn btn-light">管理員登入</router-link>
    </div>
  </nav>
</template>

<style scoped>
.title{
  font-family: '微軟正黑體';
  font-size: 38px;
  margin-left: -10px;
  color: black;
}
.item-content{
  font-size: 16px;
}
.title:hover {
  color: gray;
  text-decoration: none;
}
</style>
