<template>
  <body id="poster">
  <el-form class="login-container"
           label-position="left" label-width="0px">
    <h2 class="login-title">用  户  登  录</h2>
    <br>
    <el-form-item>
    用户名：<el-input type="text"
                  v-model="loginForm.username"
                  placeholder="请输入用户名"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-user"></i>
    </el-input>
    </el-form-item>
    <el-form-item>
    密码： <el-input type="password"
               v-model="loginForm.password"
               placeholder="请输入密码"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-unlock"></i>
    </el-input>
    </el-form-item>
    <br>
    <el-form-item style="width: 100%" >
    <el-button type="primary"
               style="width: 40%;background: rgba(48,166,226,0.72);border: none"
               v-on:click="login">登 录</el-button>
    </el-form-item>
    <el-form-item style="text-align: right; width: 100%">
      <el-link @click="gotoRegister()">没有注册？</el-link>
      <!--      增加跳转注册页面的功能-->
    </el-form-item>
  </el-form>
  </body>
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
      gotoRegister(){
        this.$router.push({
          name: 'register'
        })
      },
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
.login-container{
  border-radius: 15px;
  /*给元素边角设置圆角弧度*/
  background: padding-box;
  /*确定背景定位*/
  margin: 220px auto;
  /*所有外边距*/
  width: 350px;
  padding: 35px 35px 15px 35px;
  background:#ffffff;
  border: 1px solid #173c82;
  box-shadow: 0 0 25px #173c82;
  text-align: center;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  /*对齐方式*/
  color: #505458;
}
#poster {
  background:url("../../assets/k.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
</style>
