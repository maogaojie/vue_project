<template>
<div>
  <head>
    <title>登录页面</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	<meta name="apple-itunes-app" content="app-id=1125420102">
	<meta name="theme-color" content="#0082c9">

	<link rel="stylesheet" href="../../static/bootstrap-3.3.7/dist/css/bootstrap.css">
	<link rel="icon" href="../../static/core/img/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="../../static/core/img/favicon-touch.png">
	<link rel="mask-icon" sizes="any" href="../../static/core/img/favicon-mask.svg" color="#0082c9">
	<link rel="stylesheet" href="../../static/apps/files_pdfviewer/css/style.css">
	<link rel="stylesheet" href="../../static/core/css/guest.css">

	<!--<script src="../../static/bootstrap-3.3.7/dist/js/jquery-1.11.0.min.js"></script>-->
	<!--<script src="../../static/bootstrap-3.3.7/dist/js/bootstrap.js"></script>-->
  </head>
  <body id="body-login">
    <noscript>
      <div id="nojavascript"></div>
    </noscript>
    <div class="wrapper">
      <div class="v-align">
        <header role="banner">
          <div id="header">
            <div class="logo">
              <h1 class="hidden-visually">Fature</h1>
            </div>
          </div>
        </header>
        <main>
          <!--[if IE 8]><style>input[type="checkbox"]{padding:0;}</style><![endif]-->
		  <form method="post" name="login">
            <fieldset>
              <div id="message" class="hidden">
                <img class="float-spinner" alt src="../../static/core/img/loading-dark.gif" />
                <span id="messageText"></span>
                <!-- the following div ensures that the spinner is always inside the #message div -->
                <div style="clear: both;"></div>
              </div>
              <p class="grouptop">
                <input type="text" v-model="username" placeholder="用户名"/>
                <label for="user" class="infield">用户名</label>
              </p>

              <p class="groupbottom">
                <input type="password" v-model="password" placeholder="密码"/>
                <label for="password" class="infield">密码</label>
              </p>

              <div id="submit-wrapper">
                <input type="button"  class="login primary" @click="login"  value="登录" />
                <div class="submit-icon icon-confirm-white"></div>
              </div>

              <div id="reset-password-wrapper" style="display: none;">
                <input type="submit" id="reset-password-submit" class="login primary" value="重置密码"/>
                <div class="submit-icon icon-confirm-white"></div>
              </div>

              <div class="login-additional">
                <div class="lost-password-container">
                  <router-link :to="{ name: 'lost_password' }">忘记密码？</router-link>
                  <router-link :to="{ name: 'register' }">注册</router-link>
                </div>
              </div>

              <input type="hidden" name="timezone_offset" id="timezone_offset" value="8" />
              <input type="hidden" name="timezone" id="timezone" value="Asia/Shanghai" />
            </fieldset>
          </form>
        </main>
      </div>
    </div>
    <footer role="contentinfo">
		<p class="info">
			<a href="https://baidu.com/" target="_blank" rel="noreferrer noopener" class="entity-name">The Fature</a> –
			个人私有云平台 </p>
    </footer>

    <div id="rightClickMenus"></div>
    <div id="rightClickDetector"></div>
  </body>
</div>
</template>
<script>
export default {
    name:'login',
    data:function(){
        return{
            username:'',
            password:''
        }
    },
    methods: {
        login:function(){
            this.axios({
                url:'/api/user/login/',
                method:'post',
                data:{
                    'username':this.username,
                    'password':this.password
                }
            }).then((res)=>{
                if (res.data.code == 200){
                  localStorage.setItem('token',res.data.token)
                  localStorage.setItem('username',res.data.username)
                  localStorage.setItem('user_id',res.data.user_id)
                  alert('登陆成功')
                  this.$router.push({name:'index'})
                }
                else{
                    alert('账号或密码有误')
                }
            })
        },
        
    },
}
</script>