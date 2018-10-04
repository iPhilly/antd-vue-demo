<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed">
            <div class="logo"></div>
            <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                <a-menu-item key="1">
                    <a-icon type="home" />
                    <span>首页</span>
                    <router-link to="/home"></router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="user" />
                    <span>个人中心</span>
                    <router-link to="/login"></router-link>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="lock" />
                        <span>权限管理</span>
                    </span>
                    <a-menu-item key="3">系统管理员</a-menu-item>
                    <a-menu-item key="4">管理员</a-menu-item>
                    <a-menu-item key="5">用户</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="message" />
                        <span>配置管理</span>
                    </span>
                    <a-menu-item key="6">数据字典</a-menu-item>
                    <a-menu-item key="8">其它配置</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="setting" />
                    <span>系统设置</span>
                    <router-link to="/settings"></router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="header">
                <a-input-search style="width: 300px; margin-right: 20px"
                                enterButton/>
                <a-dropdown style="margin-right: 20px">
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a-icon type="file" />
                            <span>个人资料</span>
                        </a-menu-item>
                        <a-menu-item>
                            <a-icon type="lock" />
                            <span>安全设置</span>
                        </a-menu-item>
                        <a-menu-item>
                            <a-icon type="logout" />
                            <span>退出登录</span>
                        </a-menu-item>
                    </a-menu>
                    <a-button>
                        个人设置
                        <a-icon type="down" />
                    </a-button>
                </a-dropdown>
                <a-avatar shape="circle" icon="user"/>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Copyright ©2018 All Rights Resevered By Giantfind
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>

    import LeoBreadCrumb from './LeoBreadCrumb'
    import Home from '../pages/Home'

    export default {
        name: "layout",
        components: {
            LeoBreadCrumb,
            Home
        },
        data() {
            return {
                collapsed: false
            }
        },
    }
</script>

<style scoped>
    #components-layout-demo-fixed-sider .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
    }

    .header {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .breadcrumb-container {
        margin: 20px;
    }

    #a-breadcrumb {

    }
</style>