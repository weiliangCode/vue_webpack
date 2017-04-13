<template>
	<div >
		<table>
            <thead>
                <tr>
                    <th v-for="column in columns">{{column.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td v-for="coData in item">{{coData}}</td>
                    <td><button>删除</button></td>
                </tr>
            </tbody>
        </table>
	</div>
</template>

<script>
	export default {
        name:'Table',
        props:{
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        computed:{
         
       }
    };	
</script>

<style lang="less" scoped>
	@import "./style.less";
</style>