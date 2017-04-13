<template>
	<div class="hello">

		<Modal modal-title="提醒" @on-ok="ok"></Modal>
		
	</div>
	
</template>

<script>
	import Modal from '../components/modal';

	var list = [...'妙味课堂'];
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				list: list
			}
		},
		components: { "Modal": Modal },
		methods:{
        ok:function (){
            alert("改变一个div的样式")    
        },
        cancel:function (){
            alert("取消了，干别的事情")    
        }
    }

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>