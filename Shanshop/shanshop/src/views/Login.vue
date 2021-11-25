<template>
    <el-form class="login-container"
             label-posistion="left"
             label-width="0px">
      <h3 class="login-title">用户登录</h3>
      <el-form-item>
        用户名：<el-input type="test"
                      v-model="loginForm.username"
                      placeholder="请输入账号"
                      aria-autocomplete="off">
      </el-input>
      </el-form-item>
    <el-form-item>
      密码：<el-input type="password"
                   v-model="loginForm.password"
                   placeholder="请输入密码"
                   aria-autocomplete="off">
    </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button v-on:click="login">登录</el-button>
      </el-form-item>

    </el-form>
</template>

<script>
  import qs from 'qs'
  import axios from 'axios'
    export default {
        name: "Login",
      data(){
          return{
            loginForm:{
              username: '',
              password: ''
            }
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
