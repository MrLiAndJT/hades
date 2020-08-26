<template>
    <div class="main-container">
        <el-scrollbar style="height: 100%;">
            <common-title></common-title>
            <router-view></router-view>
        </el-scrollbar>
    </div>
</template>

<script>
    import commonTitle from './commonTitle';
    export default {
        data() {
            return {

            };
        },
        methods: {

        },
        components: {
            commonTitle
        }
    };
</script>

<style lang="less" scoped>
    .main-container {
        height: 100vh;
    }
</style>
