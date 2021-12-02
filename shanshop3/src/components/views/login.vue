<template>

  <body id="poster">
  <el-page-header @back="goBack" content="登录页面" style="color: white">
  </el-page-header>
  <div class="login-wrap">
  <el-form class="login-container"
           label-position="left" label-width="0px">
    <h2 class="login-title">用  户  登  录</h2>
    <br>
    <el-form-item style="color: white">
    用户名：<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <el-input type="text"
                  v-model="loginForm.username"
                  placeholder="请输入用户名"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-user" style="color: white"></i>
    </el-input>
    </el-tooltip>
    </el-form-item>
    <el-form-item style="color: white">
      密码：
      <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
     <el-input type="password"
               v-model="loginForm.password"
               placeholder="请输入密码"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-unlock" style="color: white"></i>
    </el-input>
      </el-tooltip>
    </el-form-item>
    <br>
    <el-form-item style="width: 100%" >
    <el-button type="primary"
               style="width: 40%;background: rgba(48,166,226,0.72);border: none"
               v-on:click="login">登 录</el-button>
    </el-form-item>
    <el-form-item style="text-align: right; width: 100%">
      <el-link @click="gotoRegister()" type="primary" style="color: white">没有注册？</el-link>
      <!--      增加跳转注册页面的功能-->
    </el-form-item>
  </el-form>
  </div>
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
        }
      }
    },
    methods:{
      goBack() {
        this.$router.push({
          name: 'sindex'
        })
      },
      gotoRegister(){
        this.$router.push({
          name: 'register'
        })
      },
      login () {
        axios.post('http://118.31.250.71:8428/login',qs.stringify(this.loginForm) )
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

<style >
  .el-input__inner{
    background: transparent;
  }
.login-container{
  border-radius: 15px;
  /*给元素边角设置圆角弧度*/
  background: padding-box;
  /*确定背景定位*/
  margin: 100px auto;
  /*所有外边距*/
  width: 350px;
  padding: 35px 35px 15px 35px;
  background:transparent;
  border: 1px solid #ffffff;
  box-shadow: 0 0 25px #ffffff;
  text-align: center;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  /*对齐方式*/
  color: #ffffff;
}
#poster {
  background:url("../../assets/5cd154cef1b12.jpg") no-repeat;
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
