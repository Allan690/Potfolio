<template>
    <el-container>
        <div class="aboutSite">
            <span id="title">ABOUT THIS SITE </span>
            <span id="techUsed">BEAUTIFUL STUFF, BUILT WITH VUE AND MODERN JAVASCRIPT</span>
            <el-divider></el-divider>
            <span id="description"
            >Welcome to my site. Feel free to read more <a href="#"
            >about me</a>, check out <a href="#">my resume</a>, <a href="#">projects</a>, or <a href="#"
            >contact me</a>.</span>
        </div>
    </el-container>
</template>

<script>
    export default {
        name: 'HomeComponent'
    }
</script>

<style scoped>
    .el-container {
        margin-left: 430px;
        margin-top: -670px;
    }
    .aboutSite {
        height: 200px;
        width: 700px;
        padding: 20px;
        background-color: white;
        border-radius: 25px;
    }
    span {
        display: block;
    }
    #title {
        font-weight: bold;
        margin-bottom: 20px;
    }
    #techUsed {
        font-weight: lighter;
        font-size: 12px;
    }
    #description {
        line-height: 1.5;
    }
    @media only screen and (max-width: 768px) {
        .aboutSite {
            height: 600px;
            width: 700px;
            padding: 20px;
            background-color: white;
            border-radius: 25px;
        }
    }
</style>
