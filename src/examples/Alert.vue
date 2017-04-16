<template>
	<div class="hello">

		<Alert></Alert>

		<Alert 
			type="warning"  
			:closeable="false" 
			:showicon="true" 
			style="background-color: pink;"
			@close-click="closeHandle"
		>	
		</Alert>

		<Alert>
			<template slot="titleTmp">
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
			</template>	
		</Alert>

	</div>
	
</template>

<script>
	import Alert from '../components/alert';

	

	var list = [...'组件封装'];
	var data = [{
        title: "目录",
        chidren: [{
            title: "我的音乐",
            chidren: [{
                title: "周杰伦",
                chidren: [{
                    title: "发如雪"
                }]
            }, {
                title: "王杰",
                chidren: [{
                    title: "一场游戏一场梦"
                }]
            }]
        }, {
            title: "我的照片"
        }]
    }];
    
    
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				list: list,
				treeList:data,
				current:1,
				total:86
			}
		},
		components: {Alert},
		methods:{
	        ok:function (){
	            alert("改变一个div的样式")    
	        },
	        cancel:function (){
	            alert("取消了，干别的事情")    
	        },
	        closeHandle:function(){
				alert('关闭后做一些事情');
			}
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>