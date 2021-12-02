<template>
  <div class="login-wrap">
    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h2 class="title">用 户 注 册</h2>
    <el-form-item>
    <el-input type="text"
              placeholder="请输入用户名"
              v-model="loginForm.username"
              autocomplete="off"
              style="width: 100%"
              class="user"
              maxlenngth="10"
              show-word-limit></el-input>
    </el-form-item>
      <el-form-item>
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="loginForm.password"
                  autocomplete="off"
                  style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="password"
                  placeholder="确认密码"
                  v-model="loginForm.password1"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister()" style="width: 48%">用户注册</el-button>
        <el-button @click="gotoLogin()" style="width: 48%">返回登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "register",
      data(){
          return{
            loginForm:{
              username:null,
              password:null,
              password1:null
            }
          }
      },
      methods:{
          gotoLogin(){
            this.$router.push('/login');
          },

      }
    }
</script>

<style >
  .el-input__inner{
    background: transparent;
  }
.login-wrap{
  box-sizing: border-box;
  width: 100%;
  height:100%;
  background-image: url("../../assets/s.jpg");
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 100%;
}
  .login-container{
    border-radius: 10px;
    margin: 0px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background-image: url("../../assets/k.jpg");

  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    /*对齐方式*/
    color: #000000;
  }
</style>
