<template>
	<div class="hello">
        <Tabs>
            <Tab-pane label="标签一" >标签一的内容</Tab-pane>
            <Tab-pane label="标签二" >标签二的内容</Tab-pane>
            <Tab-pane label="标签三" >标签三的内容</Tab-pane>
        </Tabs>
	</div>
	
</template>

<script>
    import Tabs from '../components/tabs';
	export default {
		// data() {
		// 	return {
				
				
		// 	}
		// },
		components: { Tabs ,TabPane : Tabs.Pane },
		methods:{
       
        }

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>