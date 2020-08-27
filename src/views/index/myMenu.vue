<template>
    <div class="menu-container">
        <el-scrollbar style="height: 100%;">
            <!--  -->
            <el-menu background-color="#304156" 
                text-color="#d9d3d3" 
                active-text-color="#409eff" 
                router 
                default-active="home" 
                :collapse="menuCollapse"
                @select="handleSelect">
                <el-menu-item index="/home">
                    <i class="el-icon-s-home"></i>
                    <span>主页</span>
                </el-menu-item>

                <el-submenu index="">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>生死簿</span>
                    </template>
                    <el-menu-item index="/menu/userManage">
                        用户管理
                    </el-menu-item>
                    <el-menu-item index="/menu/dataManage">
                        <span>数据管理</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>

        </el-scrollbar>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {

            };
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log('key: ', key);
                console.log('keyPath: ', keyPath);
            }
        },
        computed: {
            ...mapState(['menuCollapse']),
        }
    };
</script>

<style lang="less">
    .menu-container {
        height: 100vh;
        background-color: #304156;
        .el-menu {
            border: none;
            // min-height: 100vh;
        }
    }
    
</style>
