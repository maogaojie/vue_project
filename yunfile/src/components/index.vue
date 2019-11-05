<template>
    <div>

		<Header></Header>
		
		<!-- <div class="main-content" >Collect from <a href="http://www.aspku.com/" >源码之家</a></div> -->


		<Bannerbar></Bannerbar>
		<component :is="componentId" :transport_data="transport_data"></component>
    </div>
</template>
<script>

import allfile from '@/components/module/allfile'
import Header from '@/components/module/Header'
import Bannerbar from '@/components/module/Bannerbar'
import collect from '@/components/module/collect'
import tags from '@/components/module/tags'
import share from '@/components/module/share'
import filestable from '@/components/module/filestable'
import {sendToken } from '../../static/js/comm'
export default {
	name:'index',
	data:function(){
		return{
			username:'',
			componentId:"allfile",
      		transport_data:"",
		}
	},
	mounted(){
        sendToken('/api/user/index/','post',{'user_id':localStorage.getItem('user_id')}).then((res)=>{
            if (res.data.code==200){
               alert('Welcome to new world')				
            }
			else{
				// alert('请登录')
				// this.$router.push({name:'login'})
			}
        })
    },
	components:{
		Header:Header, 
		Bannerbar:Bannerbar,
		allfile:allfile,
		collect:collect,
		share:share,
		tags:tags,
		filestable:filestable
	},
	watch: {
		$route(){
			var path_ = this.$route.params.pathMatch; // 获取到了通配符匹配到的路径 /share
			if (path_ == '/share'){
				this.transport_data = '这是共享页面'
				this.componentId = "share";
			}
			if (path_ == '/filestable'){
				this.transport_data = '这是最近页面'
				this.componentId = 'filestable';
			}
			if (path_ == '/allfile'){
				this.transport_data = '这是全部文件页面'
				this.componentId = 'allfile';
			}
			if (path_ == '/tags'){
				this.transport_data = '这是标签页面'
				this.componentId = 'tags';
			}
			if (path_ == '/collect'){
				this.transport_data = '这是收藏页面'
				this.componentId = 'collect';
			}
			// this.axios({
			// 	url:'/api/' + path_,
			// }).then((res)=>{
			// 	this.transport_data = res.data.data
			// })	
	},
	}
}
</script>