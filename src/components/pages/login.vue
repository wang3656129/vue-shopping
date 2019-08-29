<template>
  <div class="container">
    <IndexNavbar />
    <div class="row">
      <div class="col-12 col-md-6 text-center img-margin">
        <img src="../../assets/helpers/login.jpg">
      </div>
      <div class="col-12 col-md-6">
        <form class="form-signin form-shadow" @submit.prevent="signin">
          <h1 class="h3 mb-3 font-weight-normal text-center">管理員登入</h1>
          <label for="inputEmail" class="sr-only">帳號</label>
          <input
            v-model="user.username"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="帳號"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">密碼</label>
          <input
            v-model="user.password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="密碼"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" />記住帳號
            </label>
          </div>
          <button class="btn btn-lg btn-dark btn-block" type="submit">登入</button>
          <p class="mt-2 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
      </div>
    </div>

    <IndexFooter />
  </div>
</template>

<script>
import IndexNavbar from "../IndexNavbar";
import IndexFooter from "../IndexFooter";

export default {
  name: "HelloWorld",
  components: {
    IndexNavbar,
    IndexFooter
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      this.$http.post(api, this.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.$router.push("/admin/products");
        }
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
  font-family: "微軟正黑體";
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.img-margin{
  margin-top: 50px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-shadow {
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
}
</style>

