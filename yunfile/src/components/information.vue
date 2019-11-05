<template>
    <div id="mynes">

		<Header></Header>
	<!--/HEADER -->
	<div class="copyrights">Collect from <a href="http://www.aspku.com/" >源码之家</a></div>
		<Bannerbar></Bannerbar>
		<section id="page1">
			<br><br><br><br>
			<form>
                    <div class="form-group">
                        <label for="exampleInputEmail1" >请输入您的手机号码：</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" style="text-align:center;" placeholder="phone" v-model="phone">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">请输入您的年龄：</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" style="text-align:center;" placeholder="age" v-model="age">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">性别：
                            <input type="radio" v-model="gender" value=1>男
                            <input type="radio" v-model="gender" value=2>女

                        </label>
                    </div>
                    <div class="form-group">
			            <p>
                            <a class="btn btn-primary btn-lg">
                                <label for="exampleInputFile" >选择头像</label>
                            </a>
			            </p>
                        <input type="file" id="exampleInputFile" >
                    </div>
                    
            </form>
            <button @click="sub">提交</button>
            
			
		</section>

    </div>

</template>
<script>
import Header from '@/components/module/Header'
import Bannerbar from '@/components/module/Bannerbar'
import { send, sendToken } from '../../static/js/comm'
export default {
	name:'mynes',
	data:function(){
		return{
            phone:'',
            gender:'',
            age:'',
		}
	},
	mounted(){
//         sendToken('/api/index/','post',{'user_id':localStorage.getItem('user_id')}).then((res)=>{
//             console.log(res)
//             if (res.data.code==200){
//                 alert('欢迎来到网盘页面')
//             }
//         })
    },
	components:{
		Header:Header, 
		Bannerbar:Bannerbar,
    },
    methods: {
        sub:function() {
            let datas = new FormData()
            datas.append('user_id',localStorage.getItem('user_id'))
            datas.append('phone',this.phone)
            datas.append('gender',this.gender)
            datas.append('age',this.age)
            datas.append('image',document.getElementById('exampleInputFile').files[0])
            console.log(datas)
            sendToken('/api/user/information/','post',datas).then((res)=>{
                if (res.data.code ==200){
                    alert('添加成功')
                }
                else{
                    alert('失败')
                }
            })
        }
    },
}
</script>