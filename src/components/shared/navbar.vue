<template>
<el-container>
    <div class="menu-hover">
            <el-menu mode="horizontal">
                <el-submenu index="1">
                    <template slot="title">MENU</template>
                    <el-menu-item index="1-1" @click="loadAbout">ABOUT</el-menu-item>
                    <el-menu-item index="1-2" @click="loadResume">RESUME</el-menu-item>
                    <el-menu-item index="1-3" @click="loadProjects">PROJECTS</el-menu-item>
                    <el-menu-item index="1-4" @click="loadContacts">CONTACT</el-menu-item>
                </el-submenu>
            </el-menu>
            <span>ALLAN MOGUSU</span>
    </div>
    <div class="menu-items">
        <ul>
            <li>ABOUT</li>
            <li>RESUME</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
        </ul>
    </div>
    <div class="container">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="1" class="myName">ALLAN MOGUSU
                <el-divider direction="vertical"></el-divider>
            </el-menu-item>
            <el-menu-item index="2">ABOUT
                <el-divider direction="vertical"></el-divider>
            </el-menu-item>
            <el-menu-item index="3">RESUME
                <el-divider direction="vertical"></el-divider>
            </el-menu-item>
            <el-menu-item index="4">PROJECTS
                <el-divider direction="vertical"></el-divider>
            </el-menu-item>
            <el-menu-item index="5">CONTACT
                <el-divider direction="vertical"></el-divider>
            </el-menu-item>
        </el-menu>
    </div>
</el-container>
</template>

<script>
export default {
    name: 'NavComponent',
    props: {
        activeIndex: String
    },
    methods: {
        handleSelect(key) {
            switch (key) {
                case "1":
                    this.loadHome();
                    break;
                case "2":
                    this.loadAbout();
                    break;
                case "3":
                    this.loadResume();
                    break;
                case "4":
                    this.loadProjects();
                    break;
                case "5":
                    this.loadContacts();
                    break;
            }
        },
        loadHome() {
            this.$router.push('/');
        },
        loadAbout() {
            this.$router.push('/about');
        },
        loadResume() {
            this.$router.push('/resume');
        },
        loadProjects() {
            this.$router.push('/projects');
        },
        loadContacts() {
            this.$router.push('/contacts');
        },
    }
}
</script>

<style lang="scss" scoped>
    * {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-divider {
        margin-left: 50px;
    }
    .myName {
        font-weight: bold;
    }
    .el-container {
        position: fixed;
        top: 0;
        z-index: 1;
        overflow: hidden;
        width: 100%;
    }
    .container {
        width: 1440px;
    }
    .menu-hover {
        display: none;
    }
    .menu-items {
        display: none;
    }
    @media only screen and (max-width: 900px) {
        .container {
            display: none;
        }
        .navbarsm {
            display: block;
            overflow: auto;
        }
        .menu-hover {
            display: block;
            width: 100%;
            margin: 0 10px 10px 0;
            background-color: white;
        }
        .el-menu {
            float: right;
            display: block;
            font-size: 13px;
        }
        span {
            display: block;
            margin-top: 10px;
            float: left;
            font-weight: bold;
            font-size: 14px;
            background-color: white;
            text-align: center;
            padding: 10px 15px;
        }
        span:hover {
            border-bottom: 2px solid #409EFF;
            color: #303133;
            cursor: pointer;
        }
        .el-menu-item {
            font-size: 14px;
            line-height: 1.5;
            font-family: 'Raleway', sans-serif;
        }
    }
</style>
