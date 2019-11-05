import router from "./router";

const whiteList = ['/', '/register','/lost_password'];

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem('token')
  if (token || whiteList.indexOf(to.path) != -1) {
    next()
  } else {
    next({'path': '/'})
  }
});