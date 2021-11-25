<template>
  <el-card>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </el-card>
</template>

<script>
  import qs from "qs"
  import axios from "axios"
  export default {
    name: "index",
    data(){
      return{
        loginForm:{
          username:'admin',
          password:'admin123'
        },

      }
    },
    methods:{
      login () {
        axios
          .post('http://118.31.250.71:8428/login',qs.stringify(this.loginForm) )
          .then(successResponse => {
            console.log(successResponse)
            if (successResponse.status ===200){
              this.$router.replace({path:'/index'})
            }
          })
          // eslint-disable-next-line no-unused-vars
          .catch(failResponse =>{
          })
      }
    }
  }
</script>

<style scoped>

</style>
