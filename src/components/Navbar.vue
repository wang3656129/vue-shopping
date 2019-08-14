<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/index">成飲</router-link>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut() {
      const url = `${process.env.APIPATH}/logout`
      this.$http.post(url).then(response => {
        if (response.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>