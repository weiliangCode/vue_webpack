<template>
	<div class="hello">
		<Page :current="current" :total="total"></Page>
		
		<Modal modal-title="提醒" @on-ok="ok"></Modal>
		<Modal @on-cancel="cancel"></Modal>
		<Modal>
			<ul slot="modal-content">
				<li v-for="item of list">{{item}}</li>
			</ul>
			<div slot="modal-footer">
				<span>确定</span>
				<span>重置</span>
				<span>返回</span>
			</div>
		</Modal>
		
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

		<Tree :data="treeList"></Tree>
			
	</div>
	
</template>

<script>
	import Modal from '../components/modal';
	import Alert from '../components/alert';
	import Tree from '../components/tree';
	import Page from '../components/page';
	

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
		components: {Modal,Alert,Tree,Page},
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