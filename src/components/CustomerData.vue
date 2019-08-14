<template>
  <div class="container">
    <IndexNavbar/>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="useremail"
            v-validate="'required|email'"
            v-model="form.user.email"
            placeholder="請輸入 Email"
          />
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name"
            placeholder="輸入姓名"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('name')">姓名欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input
            type="tel"
            class="form-control"
            name="tel"
            id="usertel"
            v-model="form.user.tel"
            placeholder="請輸入電話"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('tel')">電話欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input
            type="text"
            class="form-control"
            name="address"
            id="useraddress"
            v-model="form.user.address"
            placeholder="請輸入地址"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="comment">留言</label>
          <textarea
            name
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
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
  },
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    createOrder() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`
      const order = this.form
      // this.isLoading = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(url, {data: order}).then(response => {
            console.log('已建立訂單')
            if (response.data.success) {
              this.$router.push(`/customer_checkOut/${response.data.orderId}`)
            }
            this.isLoading = false
          })
        } else {
          console.log('請填妥欄位')
        }
      })
    }
  }
}
</script>