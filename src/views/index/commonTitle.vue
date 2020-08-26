<template>
    <div class="title-container">
        <i class="el-icon-s-fold icon" @click="changeMenu"></i>
        <div class="text">首页</div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        data() {
            return {

            };
        },
        methods: {
            ...mapMutations(['changeCollapse']),
            changeMenu () {
                this.changeCollapse();
            }
        }
    };
</script>

<style lang="less" scoped>
    .title-container {
        background-color: #fff;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        .icon {
            font-size: 20px;
            cursor: pointer;
        }
        .text {
            margin-left: 20px;
        }
    }
</style>
