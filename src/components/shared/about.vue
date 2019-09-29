<template>
   <div class="el-container">
<!--       <div class="aboutSection">-->
<!--       avatar section-->
       <div class="imageSection">
           <img src="../../assets/my-avatar.png" alt="avatar">
       </div>
<!--       about me-->
       <div class="aboutMe">
           <span id="name">ALLAN MOGUSU</span>
           <span id="mail"><a href="mailto:allannelly690@gmail.com">ALLANNELLY690@GMAIL.COM</a></span>
           <el-divider></el-divider>
       </div>
<!--       content of about me-->
       <div class="contentAboutMe">
           <span id="about">ABOUT</span>
           <span id="aboutDescription"
           >
    Hi, I'm Allan and I like building stuff. I love God. JavaScript is my second love, Python comes a distant third. I'm a developer at Andela
            </span>
           <el-button>Learn More</el-button>
           <el-divider id="divider2"></el-divider>
       </div>
<!--       social media section-->
       <div class="socialMedia">
           <p id="socialIcons">
               <i class="fa fa-github"></i>
               <i class="fa fa-twitter"></i>
               <i class="fa fa-facebook"></i>
               <i class="fa fa-linkedin"></i>
               <i class="fa fa-google"></i>
           </p>
       </div>
<!--       </div>-->
   </div>
</template>

<script>
   export default {
       name: 'AboutComponent'
   }
</script>

<style scoped>
    .imageSection {
        width: 200px;
        margin-top: 70px;
        height: 200px;
    }
    .aboutMe {
        margin-top: 300px;
        margin-left: -200px;
        height: 300px;
        max-width: 350px;
    }
    .contentAboutMe {
        margin-top: 450px;
        margin-left: -210px;
        height: 300px;
        max-width: 350px;
        line-height: 120%;
    }
    img {
        height: 200px;
        border-radius: 50%;
    }
    span {
        display: block;
    }
    #name {
        margin-bottom: 10px;
        margin-left: 20px;
        font-weight: bold;
        text-align: left;
    }
    #mail {
        margin-left: 20px;
        border-bottom: dotted 1px rgba(160,160,160,0.65);
        font-size: 13px;
        opacity: 0.5;
    }
    .el-divider {
        margin-top: 60px;
        margin-left: 20px;
    }
    #aboutDescription {
        font-size: 11px;
        text-align: justify;
        margin-bottom: 40px;
    }
    #about {
        text-align: left;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 12px;
    }
    #divider2 {
        margin-left: -5px;
    }
    .el-button {
       margin-left: -160px;
       border-radius: 20px;
        font-family: inherit;
        font-weight: bold;
        opacity: 0.8;
    }
    .socialMedia {
        max-width: 350px;
        margin-top: 700px;
        margin-left: -350px;
    }
    #socialIcons {
        letter-spacing: 30px;
        opacity: 0.5;
    }
    #socialIcons:hover {
        cursor: pointer;
        opacity: 1;
        color: rgb(87, 158, 248);
    }
    @media only screen and (max-width: 768px) {
        .el-container {
            width: 100%;
        }
    }
</style>
