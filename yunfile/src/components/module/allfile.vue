<template>
    <div class="container" style="float:right">
		
        <section id="page">
			<div id="filter-items" class="row">
				<div class="col-md-3 category_1 item" v-for="i in file_list" style="float:right" >
				<div class="filter-content" >
					<img :src="'http://120.27.247.213:8000/user/'+'image/'+i.file_md5+'/'" class="img-responsive img-circle" width="100px"  />
				
				</div>
				</div>
			</div>
			<br><br><br><br>
			<br><br><br><br>
			<br><br><br><br> 
			<br><br><br><br>
		
			
			<input  type="file" class="dropify" id="input-file-events" data-default-file="{$info.img|default=''}" value="上传文件"  required>
		
			<!-- <input name="img" type="file" class="dropify" id="input-file-events" data-default-file="{$info.img|default=''}"  value="上传文件夹" webkitdirectory> -->
			<button @click="sub">确定上传</button>
			<br>
			<div class="progress">
  				<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
    				60%
  			</div>
			</div>
			
		</section>
    </div>
</template>
<script>
import '../../../static/css/dropify.css'
import '../../../static/js/dropify.js'
import {sendToken} from '../../../static/js/comm'
import BMF from 'browser-md5-file'

export default {
	name:'allfile',
	data:function() {
		return{
			md5:'',
			file_list:''
		}
	},
	mounted() {
		sendToken('/api/user/myfile/','post',{'user_id':localStorage.getItem('user_id')}).then((res)=>{
			if (res.data.code == 200){
				this.file_list = res.data.file_list
			}
		})
		// Used events
        var drEvent = $('#input-file-events').dropify();

        drEvent.on('dropify.beforeClear', function(event, element) {
            return confirm("确定删除 \"" + element.file.name + "\" ?");
        });
 
        drEvent.on('dropify.afterClear', function(event, element) {
            // layer.msg('删除成功');
		});
		

	},
	methods: {
		sub:function(){
			console.log(document.getElementById('input-file-events').files[0])
			this.filemd5 = document.getElementById('input-file-events').files[0]
	        let bmf = new BMF();
	        bmf.md5(this.filemd5, (err, md5) => {
	        if (err) return alert('md5转化错误');
				this.md5 = md5
				console.log(this.md5)
		        sendToken('/api/user/md5/','post',{'md5':this.md5,'user_id':localStorage.getItem('user_id')}).then((res)=>{
					if (res.data.code==200){
						let datas = new FormData()
						datas.append('file',document.getElementById('input-file-events').files[0])
						datas.append('user_id',localStorage.getItem('user_id'))
						datas.append('file_md5',this.md5)
						// sendToken('/api/user/subfile/','post',datas).then((res)=>{
						// 	if (res.data.code==200){
						// 		alert('上传成功')
								
						// 	}
						// })
						this.axios({
							url:'/api/user/subfile/',
							method:'post',
							data:datas,
							headers:{
					            'Authorization':'JWT '+ localStorage.getItem('token')
					        },
						})
					}
					else{
						alert('妙传')
					}
				})
	        })
			
			
		}
	},
}
</script>