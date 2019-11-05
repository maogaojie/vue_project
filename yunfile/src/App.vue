<template>
  <div id="app">

  <link rel="stylesheet" type="text/css" href="/static/css/cloud-admin.css" >
	<link rel="stylesheet" type="text/css"  href="/static/css/themes/default.css" id="skin-switcher" >
	<link rel="stylesheet" type="text/css"  href="/static/css/responsive.css" >
	<link href="/static/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/static/css/animatecss/animate.min.css" />
	<link rel="stylesheet" type="text/css" href="/static/js/bootstrap-daterangepicker/daterangepicker-bs3.css" />
	<link rel="stylesheet" type="text/css" href="/static/js/jquery-todo/css/styles.css" />
	<link rel="stylesheet" type="text/css" href="/static/js/fullcalendar/fullcalendar.min.css" />
	<link rel="stylesheet" type="text/css" href="/static/js/gritter/css/jquery.gritter.css" />
    <router-view/>


  </div>
</template>
  
  <script src="/static/js/jquery/jquery-2.0.3.min.js"></script>
  <script src="/static/js/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"></script>
  <script src="/static/bootstrap-dist/js/bootstrap.min.js"></script>

        
  <script src="/static/js/bootstrap-daterangepicker/moment.min.js"></s
  <script src="/static/js/bootstrap-daterangepicker/daterangepicker.min.js"></script>
  <script type="text/javascript" src="/static/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"></script>
  <script type="text/javascript" src="/static/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"></script><script type="text/javascript" src="js/jQuery-slimScroll-1.3.0/slimScrollHorizontal.min.js"></script>
  <script type="text/javascript" src="/static/js/jQuery-BlockUI/jquery.blockUI.min.js"></script>

  <script type="text/javascript" src="/static/js/sparklines/jquery.sparkline.min.js"></script>
  <script src="/static/js/jquery-easing/jquery.easing.min.js"></script>
  <script type="text/javascript" src="/static/js/easypiechart/jquery.easypiechart.min.js"></script>
  <script src="/static/js/flot/jquery.flot.min.js"></script>
  <script src="/static/js/flot/jquery.flot.time.min.js"></script>
  <script src="/static/js/flot/jquery.flot.selection.min.js"></script>
  <script src="/static/js/flot/jquery.flot.resize.min.js"></script>
  <script src="/static/js/flot/jquery.flot.pie.min.js"></script>
  <script src="/static/js/flot/jquery.flot.stack.min.js"></script>
  <script src="/static/js/flot/jquery.flot.crosshair.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-todo/js/paddystodolist.js"></script>
  <script type="text/javascript" src="/static/js/timeago/jquery.timeago.min.js"></script>
  <script type="text/javascript" src="/static/js/fullcalendar/fullcalendar.min.js"></script>
  <script type="text/javascript" src="/static/js/jQuery-Cookie/jquery.cookie.min.js"></script>
  <script type="text/javascript" src="/static/js/gritter/js/jquery.gritter.min.js"></script>
  <script src="/static/js/script.js"></script>
  <script>
        jQuery(document).ready(function() {		
              App.setPage("index");  //Set current page
              App.init(); //Initialise plugins and elements
        });
  </script>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>