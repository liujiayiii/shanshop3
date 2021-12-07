<template>
  <body id="poster">
  <article class="header">
    <header>
      <span class="login">
        <em class="bold" style="color: white">已有帐号？</em>
        <el-button @click="gotoLogin()" style="width: 10%;background: rgba(255,255,255,0.72);border: none;align-items: center">登陆</el-button>
      </span>
    </header>
  </article>

    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h2 class="title">用 户 注 册</h2>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
      </el-steps>
      <section>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
          autocomplete="off"
        >
          <div v-if="active==0">
            <el-form-item prop="textarea">
            <el-input
              :value="ruleForm.textarea"
              type="textarea"
              :rows="10"
              :readonly="true">
            </el-input>
            </el-form-item>
            <el-form-item prop="agreed">
              <el-checkbox v-model="ruleForm.agreed">同意注册协议</el-checkbox>
            </el-form-item></div>
          <div v-if="active==1">
     <el-form-item label="用户名">
      <el-input type="text"
              placeholder="请输入用户名"
              v-model="ruleForm.username"
              style="width: 100%"
              class="user"
              maxlenngth="10"
              show-word-limit></el-input>
     </el-form-item>
            <el-form-item label="邮箱">
              <el-input placeholder="请输入邮箱" v-model="ruleForm.email" style="width: 100%">

              </el-input>
            </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="ruleForm.password"
                  autocomplete="off"
                  style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password"
                  placeholder="确认密码"
                  v-model="ruleForm.checkpassword"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister()"
                   style="width: 40%;background: rgba(48,166,226,0.72);border: none">用户注册</el-button>
      </el-form-item>
          </div>
        </el-form>
      </section>
    <div class="footer">
      <el-button v-if="active>0" type="primary" icon="">

      </el-button>
    </div>
    </el-form>

  </body>
</template>

<script>
    export default {
        name: "register",
      data(){
          return{
            step: 2,
            active: 0,
            statusMsg: '',
            error: '',
            ruleForm: {
              textarea: '请仔细阅读以下协议' ,
              agreed: false,
              name: '',
              code: '',
              pwd: '',
              cpwd: '',
              email: ''
            },
            rules: {
              agreed: [{
                validator: (rule, value, callback) => {
                  console.log('value:' + value)
                  if (value !== true) {
                    callback(new Error('请确认同意注册协议'))
                  } else {
                    callback()
                  }
                },
                trigger: 'blur'
              }]
            },

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
  body{
 margin: 0px;
}
  #poster{
    background:url("../../assets/5cd154cef1b12.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .login-container{
    border-radius: 10px;
    margin: 0px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: transparent;

  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    /*对齐方式*/
    color: #ffffff;
  }
</style>
