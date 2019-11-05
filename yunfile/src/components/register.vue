<template>
<div>
  <head>
    <title>注册</title>
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
				<form method="post" name="register">
					<fieldset>
						<div id="message" class="hidden">
							<img class="float-spinner" alt="" src="../../static/core/img/loading-dark.gif">
							<span id="messageText"></span>
							<!-- the following div ensures that the spinner is always inside the #message div -->
							<div style="clear: both;"></div>
						</div>
              <p class="groupbottom" v-show="true">
							<input type="text"  placeholder="邮箱" aria-label="邮箱" 
								autocomplete="on" autocapitalize="none" autocorrect="off" required="" v-model="email">
							<label for="email" class="infield">邮箱</label>
						</p>
						<p class="grouptop" v-show="true">
							<input type="text"  placeholder="用户名" aria-label="用户名" value="" autofocus=""
								autocomplete="on" autocapitalize="none" autocorrect="off" required="" v-model="username">
							<label for="user" class="infield">用户名</label>
						</p>
						<p class="groupbottom" v-show="true">
							<input type="password"  placeholder="密码" aria-label="密码"
								autocomplete="on" autocapitalize="none" autocorrect="off" required="" v-model="password">
							<label for="password" class="infield">密码</label>
						</p>

						<div id="submit-wrapper">
							<input type="button"  class="login primary"  value="注册" @click="register">
							<div class="submit-icon icon-confirm-white"></div>
						</div>


						<div id="reset-password-wrapper" style="display: none;">
							<input type="submit" id="reset-password-submit" class="login primary" title="" value="重置密码">
							<div class="submit-icon icon-confirm-white"></div>
						</div>

						<div class="login-additional">
							<div class="lost-password-container">
								<router-link :to="{name:'login'}">返回登录 </router-link>
							</div>
						</div>
						<input type="hidden" name="timezone_offset" id="timezone_offset" value="8">
						<input type="hidden" name="timezone" id="timezone" value="Asia/Shanghai">
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
    name:'register',
    data:function(){
        return{
            username:'',
            password:'',
            email:''
        }
    },
    methods: {
        register:function(){
            this.axios({
                url:'/api/user/register/',
                method:'post',
                data:{
                    'username':this.username,
                    'password':this.password,
                    'email':this.email
                }
            }).then((res)=>{
                if (res.data.code == 200){
                    alert('注册成功')
                    
                }
                else{
                    alert('注册失败')
                }
            })
        }
    },
}
</script>

