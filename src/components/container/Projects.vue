<template>
   <div class="container">
       <div class="title">
           <span id="projectHeader">PROJECTS</span>
           <span class="subText">A SELECTION OF PROJECTS I'VE WORKED ON</span>
           <el-divider></el-divider>
       </div>
       <div class="projectCard">
           <span class="projectTitle">PRMONITOR-FRONTEND</span>
           <span class="date">JULY - SEPTEMBER, 2019</span>
           <img src="https://user-images.githubusercontent.com/23090268/65246560-81256680-daf7-11e9-9eb9-16c156b5dded.png" alt="PRMonitor">
           <span class="description">A POC tool to help Product Managers and Coordinators to manage engineering teams effectively by tracking PRs and issues on Github and JIRA respectively</span>
       </div>
       <div class="projectCard">
           <span class="projectTitle">PRMONITOR-API</span>
           <span class="date">JULY - SEPTEMBER, 2019</span>
           <img src="https://user-images.githubusercontent.com/23090268/65246560-81256680-daf7-11e9-9eb9-16c156b5dded.png" alt="PRMonitor">
           <span class="description">PR-Monitor is a GraphQL API built with node.js, Apollo Server and MongoDB with Mongoose as the ODM. This API helps Product Managers(PMs) and coordinators monitor the state of PRs and issues on Github and JIRA.</span>
       </div>

       <div class="projectCard">
           <span class="projectTitle">TEMBEA</span>
           <span class="date">FEBRUARY - SEPTEMBER, 2019</span>
           <img src="https://user-images.githubusercontent.com/23090268/65697807-420d8d00-e084-11e9-83df-6a653887c821.png" alt="PRMonitor">
           <span class="description">A rides and routes scheduling application built by Andelans for Andelans. Leverages on Slack and Google maps APIs to make this possible.</span>
       </div>

       <div class="projectCard haven">
           <span class="projectTitle">BOOKS-API</span>
           <span class="date">SEPTEMBER, 2019</span>
           <span class="description">A tutorial REST API built while learning Rust-lang and the Rocket web framework</span>
       </div>

       <div class="projectCard haven">
           <span class="projectTitle">BLOG-API</span>
           <span class="date">FEBRUARY, 2019</span>
           <span class="description">A RESTful blog API built with node.js, express and MongoDB. This was my first API built using node.js</span>
       </div>

       <div class="projectCard haven">
           <span class="projectTitle">AUTHOR'S HAVEN</span>
           <span class="date">DEC - FEB, 2019</span>
           <span class="description">A frozen project built in simulated sprints during the initial phase of my apprenticeship in Andela</span>
       </div>

       <div class="projectCard">
           <span class="projectTitle">STORE-MANAGER WEB</span>
           <span class="date">OCTOBER - NOVEMBER, 2018</span>
           <img src="https://user-images.githubusercontent.com/23090268/48374121-e1c46580-e6d4-11e8-83ac-5b5d0838d388.png" alt="PRMonitor">
           <span class="description">A web frontend built with Vanilla Javascript, HTML and CSS, that consumes the store manager API.</span>
       </div>

       <div class="projectCard haven">
           <span class="projectTitle">STORE-MANAGER API</span>
           <span class="date">SEP - OCT, 2018</span>
           <span class="description">A flask RESTful API that implements token based authentication with endpoints that enable a user to manage products and sales in a store</span>
       </div>
   </div>
</template>

<script>
    export default {
        name: 'ProjectsComponent'
    }
</script>

<style scoped>
    .container {
        border-radius: 40px;
        margin-top: -680px;
        margin-left: 500px;
        min-height: 100vh;
        background-color: white;
        width: 800px;
    }
    span {
        display: block;
        text-align: left;
    }
    #projectHeader {
        font-weight: bold;
        margin-left: 20px;
        padding: 50px 30px 30px;
    }
    .subText {
        margin-left:50px;
        font-size: 12px;
    }
    .projectCard {
        height: 560px;
        width: 90%;
        margin-left: 40px;
        border: solid 1px rgba(160,160,160,0.3);
        border-radius: 25px;
        margin-bottom: 20px;
    }
    .projectCard:hover {
        cursor: pointer;
    }
    .projectTitle {
        padding-top: 20px;
        font-weight: bold;
        font-size: 13px;
    }
    .date {
        font-size: 12px;
    }
    .projectTitle, .date {
        margin-left: 20px;
        margin-top: 10px;
    }
    .description {
        font-size: 13px;
        padding: 10px;
        margin-left: 5px;
    }
    img {
        border-radius: 5px;
        transition: transform .2s;
        margin-top: 30px;
        width: 100%;
        height: 400px;
    }
    img:hover {
        -ms-transform: scale(1.01);
        -webkit-transform: scale(1.01);
        transform: scale(1.01);
    }
    .haven {
        height: 200px;
    }
</style>
