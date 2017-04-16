<template>
    <div class="tabs">
    <!--<div :class="classes">-->
        <!--<div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">
            <Icon v-if="item.icon !== ''" :type="item.icon"></Icon>
            {{ item.label }}
            <Icon v-if="showClose(item)" type="ios-close-empty" @click.native.stop="handleRemove(index)"></Icon>
        </div>-->

            <!--<div :class="tabCls(item)" v-for='(item,index) in navList'   @click="handleChange(index)">
                    {{item.label}}
                    <i></i>
                </div>-->




        <div class="tabsHead">
            <div class="tabsHeadSub">
               <div class="tabsNav" v-for='(item,index) in navList'   @click="handleChange(index)">
                    {{item.label}}
                    <i></i>
                </div> 
            </div>
        </div>


        <!--<div :class="contentClasses" :style="contentStyle"><slot></slot></div>-->
        <div class="tabsContent">
            <!--<div class="tabsC">1</div>
            <div class="tabsC">2</div>
            <div class="tabsC">3</div>-->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon/icon.vue';
    // import { oneOf, getStyle } from '../../utils/assist';
    // import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-tabs';

    export default {
        name: 'Tabs',
        components: { Icon },
        methods: {
             getTabs () {
                return this.$children.filter(item => item.$options.name === 'TabPane');
            },
            updateNav () {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    this.navList.push({
                        label: pane.label,
                        icon: pane.icon || '',
                        name: pane.currentName || index,
                        disabled: pane.disabled,
                        closable: pane.closable
                    });
                    if (!pane.currentName) pane.currentName = index;
                    if (index === 0) {
                        if (!this.activeKey) this.activeKey = pane.currentName || index;
                    }
                });
                this.updateStatus();
                this.updateBar();
            },
            updateBar () {
                // this.$nextTick(() => {
                //     const index = this.navList.findIndex((nav) => nav.name === this.activeKey);
                //     const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                //     const tab = prevTabs[index];
                //     this.barWidth = parseFloat(getStyle(tab, 'width'));

                //     if (index > 0) {
                //         let offset = 0;
                //         const gutter = this.size === 'small' ? 0 : 16;
                //         for (let i = 0; i < index; i++) {
                //             offset += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                //         }

                //         this.barOffset = offset;
                //     } else {
                //         this.barOffset = 0;
                //     }
                // });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey) || this.animated);
            },
            handleRemove (index) {
                const tabs = this.getTabs();
                const tab = tabs[index];
                tab.$destroy();

                if (tab.currentName === this.activeKey) {
                    const newTabs = this.getTabs();
                    let activeKey = -1;

                    if (newTabs.length) {
                        const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index);
                        const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index);

                        if (rightNoDisabledTabs.length) {
                            activeKey = rightNoDisabledTabs[0].currentName;
                        } else if (leftNoDisabledTabs.length) {
                            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].currentName;
                        } else {
                            activeKey = newTabs[0].currentName;
                        }
                    }
                    this.activeKey = activeKey;
                    this.$emit('input', activeKey);
                }
                this.$emit('on-tab-remove', tab.currentName);
                this.updateNav();
            },
            showClose (item) {
                if (this.type === 'card') {
                    if (item.closable !== null) {
                        return item.closable;
                    } else {
                        return this.closable;
                    }
                } else {
                    return false;
                }
            },
            tabCls (item) {
                return [
                    tabsContent,
                    {
                        active:item.name === this.activeKey
                    },
                    // {
                    //     [`${prefixCls}-tab-disabled`]: item.disabled,
                    //     [`${prefixCls}-tab-active`]: item.name === this.activeKey
                    // }
                ];
            },
            handleChange (index) {
                console.log("1111");
                // const nav = this.navList[index];
                // if (nav.disabled) return;
                this.activeKey = nav.name;
                // this.$emit('input', nav.name);
                // this.$emit('on-click', nav.name);
            }
           
        },
        data() {
            return{
                navList:[
                    {
                        label: '首页',
                        // icon: pane.icon || '',
                        // name: pane.currentName || index,
                        // disabled: pane.disabled,
                        // closable: pane.closable
                    },
                    {
                        label:'角色管理',
                        // icon: pane.icon || '',
                        // name: pane.currentName || index,
                        // disabled: pane.disabled,
                        // closable: pane.closable
                    },
                          
                    {
                        label: '用户管理',
                        // icon: pane.icon || '',
                        // name: pane.currentName || index,
                        // disabled: pane.disabled,
                        // closable: pane.closable
                    },
                    {
                        label: '供应商库存',
                        // icon: pane.icon || '',
                        // name: pane.currentName || index,
                        // disabled: pane.disabled,
                        // closable: pane.closable
                    },
                    {
                        label: '供应商往来账',
                        // icon: pane.icon || '',
                        // name: pane.currentName || index,
                        // disabled: pane.disabled,
                        // closable: pane.closable
                    }
                ]
            }
        },
        computed:{
        //    tabCls (item) {
        //         return [
        //             `${prefixCls}-tab`,
        //             {
        //                 [`${prefixCls}-tab-disabled`]: item.disabled,
        //                 [`${prefixCls}-tab-active`]: item.name === this.activeKey
        //             }
        //         ];
        //     }
        
        }
    };
</script>


<style lang="less" scoped>
	@import "./style.less";
</style>
