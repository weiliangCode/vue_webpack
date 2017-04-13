<template>
	<ul>
        <li v-for="item of data">
            <div class="tree-title" :style="[stylePadding]">
                <span><strong>{{item.title}}</strong> <i class="ico"></i></span>
            </div>
            <!--如果循环的item有children属性，那么生成下一级-->
            <Tree-node 
                :increment="count"
                v-if='item.chidren' 
                :data="item.chidren"
            ></Tree-node>
        </li>
    </ul>
</template>

<script>
	export default {
		name: 'TreeNode',
       	computed:{
            count(){
               var c = this.increment;
               return ++c; 
            },
            stylePadding(){
                return {
                    'padding-left':this.count * 16 + 'px'
                }
            }
        },
        props:{
            data:{
                type:Array,
                default:[]
            },
            increment:{
                type:Number,
                default:0
            }
        }
//      components: { "Treelist": Treelist }
    };
</script>

<style>
</style>