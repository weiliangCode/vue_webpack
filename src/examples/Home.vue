<template>
	<div class="examples">
        <ul class="ex-list">
            <li><router-link to="/alert">Alert</router-link></li>
            <li> <router-link to="/modal">Modal</router-link></li>
            <li><router-link to="/page">Page</router-link></li>
            <li><router-link to="/table">Table</router-link></li>
            <li><router-link to="/tabs">Tabs</router-link></li>
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
    html,body{
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
       width:80%;
       height:100%;
       float:left;
       background:#0f0;
   }
</style>