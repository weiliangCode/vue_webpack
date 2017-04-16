<template>
	<div class="examples">
        <ul class="ex-list">
            <li><router-link to="/alert">Alert消息提示</router-link></li>
            <li> <router-link to="/modal">Modal对话框</router-link></li>
            <li><router-link to="/page">Page分页器</router-link></li>
            <li><router-link to="/table">Table表格</router-link></li>
            <li><router-link to="/tabs">Tabs切换</router-link></li>
        </ul>
        <div class="ex-content">
            <router-view></router-view>
        </div>

	</div>
</template>


<script>
	export default {

	}
</script>

<style >
    html,body,#app{
        width:100%;
        height:100%;
    }

    .examples{
        height:100%;
    }

   li{
       list-style:none;
   };

   .ex-list{
       width:100px;
       height:100%;
       background:#ddd;
       float:left;
   }

   .ex-content{
       width:75%;
       height:100%;
       float:right;
   }
</style>