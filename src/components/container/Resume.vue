<template>
<div class="container">
    <div class="title">
        <span id="resume">RESUME</span>
    </div>
    <div class="content">
        <span class="subtitles">EDUCATION</span>
        <span class="course">B.Sc. Computer Science</span>
        <span class="school"><a href="https://www.mmu.ac.ke">Multimedia University of Kenya</a>, 2018</span>
    </div>
    <div class="experience">
        <span class="subtitles">EXPERIENCE</span>
        <div class="sub-experiences">
            <p class="sub1">ANDELA - SOFTWARE DEVELOPER</p>
            <p class="timespan">DECEMBER 2018 - PRESENT</p>
            <ul>
                <li>
                    <p>Worked with a team in simulated software development projects and sprints. These were frozen codebases from open source projects that we would contribute to.</p>
                </li>
                <li>
                    <p>Aided in development of an internal tool called Tembea to automate all processes regarding trips and routes(a special feature for engineers working late on client work)</p>
                </li>
                <li>
                    <p>Implemented unit and integration tests on both the backend system(node.js, PostgreSQL, redis) and frontend(Typescript, Angular) to consistently deliver high-quality features</p>
                </li>
                <li>
                    <p>Worked on the Tembea bot, a slack bot built on Slack's node.js API with the Google Maps API which was used by our end-users in Andela to hail rides</p>
                </li>
                <li>
                    <p>Collaborated with stakeholders through the Product Manager and Product Coordinator to address technical issues and develop effective resolutions. One of the technical issues I had to deal with and resolved successfully was to make the app multi-tenant so that we could scale to other Andela locations through the Homebases feature</p>
                </li>
                <li>
                    <p>Reviewed pull requests on Github using the acceptance criteria provided by JIRA to ensure high-quality code only got merged to production</p>
                </li>
                <li>
                    <p>As a product coordinator in Tembea(a position I've held in the last 3 months), I developed a tool called PRMonitor(https://github.com/Allan690/PRMonitor) which I was using to fetch data from JIRA and Github APIs. I was using the data to monitor stale issues, issues that have overstayed on the board, and monitor the velocity of the team. I built the backend using node.js, ES6 Javascript, GraphQL, ApolloServer, and MongoDB. I also leveraged on Google's OAuth 2 for authentication</p>
                </li>
                <li>
                    <p>Built a frontend for the PRMonitor application using Vue js and Apollo client</p>
                </li>
            </ul>
        </div>
        <div class="sub-experiences two">
            <p class="sub1">ANDELA - PRODUCT COORDINATOR</p>
            <p class="timespan">JULY 2019 - PRESENT</p>
            <ul>
                <li>
                    <p>I Organized and ran the scrum ceremonies for the team i.e Daily Standups, Sprint planning, pre-demos and demos</p>
                </li>
                <li>
                    <p>I served as the interface between the product's stakeholders and the development team, gathering requirements from stakeholders, organizing and prioritizing them for sprints. </p>
                </li>
                <li>
                     <p>Ensured that the product backlog was managed effectively on Jira</p>
                </li>
                <li>
                    <p>I ensured the product was stable on both staging and production environments by conducting and scheduling daily test sessions, reporting found bugs to the team for action, and following up on ensuring that patches were done.</p>
                </li>
                <li>
                    <p> I strived to ensure that user expectations were met in both the design and development of the product. </p>
                </li>
            </ul>
        </div>
    </div>
    <div class="skills">
        <span class="subtitles">SKILLS</span>
        <p>NODE.JS</p>
        <div class="skillsContainer">
            <div class="mySkills node">85%</div>
        </div>
        <p>ANGULAR 4</p>
        <div class="skillsContainer">
            <div class="mySkills angular">80%</div>
        </div>
        <p>REACT JS</p>
        <div class="skillsContainer">
            <div class="mySkills react">80%</div>
        </div>
        <p>VUE JS</p>
        <div class="skillsContainer">
            <div class="mySkills vue">90%</div>
        </div>
        <p>JAVASCRIPT</p>
        <div class="skillsContainer">
            <div class="mySkills js">90%</div>
        </div>
        <p>TYPESCRIPT</p>
        <div class="skillsContainer">
            <div class="mySkills ts">75%</div>
        </div>
        <p>EXPRESS</p>
        <div class="skillsContainer">
            <div class="mySkills express">90%</div>
        </div>
        <p>HTML</p>
        <div class="skillsContainer">
            <div class="mySkills html">95%</div>
        </div>
        <p>CSS</p>
        <div class="skillsContainer">
            <div class="mySkills css">85%</div>
        </div>
        <p>SASS/SCSS</p>
        <div class="skillsContainer">
            <div class="mySkills scss">60%</div>
        </div>
        <p>GRAPHQL</p>
        <div class="skillsContainer">
            <div class="mySkills graphQL">90%</div>
        </div>
        <p>REST</p>
        <div class="skillsContainer">
            <div class="mySkills rest">95%</div>
        </div>
        <p>FLASK</p>
        <div class="skillsContainer">
            <div class="mySkills flask">75%</div>
        </div>
        <p>DJANGO</p>
        <div class="skillsContainer">
            <div class="mySkills django">80%</div>
        </div>
        <p>POSTGRES</p>
        <div class="skillsContainer">
            <div class="mySkills postgres">90%</div>
        </div>
        <p>MONGODB</p>
        <div class="skillsContainer">
            <div class="mySkills mongo">75%</div>
        </div>
        <p>CI/CD</p>
        <div class="skillsContainer">
            <div class="mySkills cicd">90%</div>
        </div>
        <p>HEROKU</p>
        <div class="skillsContainer">
            <div class="mySkills heroku">90%</div>
        </div>
        <p>REDIS</p>
        <div class="skillsContainer">
            <div class="mySkills redis">95%</div>
        </div>
        <p>GIT</p>
        <div class="skillsContainer">
            <div class="mySkills git">95%</div>
        </div>
        <p>DOCKER</p>
        <div class="skillsContainer">
            <div class="mySkills docker">85%</div>
        </div>
        <p>DIGITAL OCEAN</p>
        <div class="skillsContainer">
            <div class="mySkills digital">80%</div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'ResumeComponent'
    }
</script>

<style scoped>
    .container {
        margin-top: -670px;
        margin-left: 450px;
        background-color: white;
        min-height: 100vh;
        width: 63%;
        border-radius: 40px;
    }
    .title {
        text-align: left;
        padding: 30px;
        line-height: 1.5;
        width: 90%;
        height: 30px;
        border-bottom: solid 1px rgba(160,160,160,0.65);
    }
    span {
        display: block;
    }
    #resume {
        font-weight: bold;
    }
    .content {
        margin-right: 350px;
        margin-top: 30px;
        height: 50px;
        width: 100%;
    }
    .subtitles {
        font-weight: bold;
        font-size: 14px;
    }
    .course {
        margin-top: 40px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .school {
        font-size: 12px;
    }
    .course, .school {
        text-align: left;
        margin-left: 50px;
    }
    .experience {
        height: 600px;
        width: 100%;
        margin-top: 80px;
    }
    .sub-experiences {
        text-align: left;
        margin-left: 30px;
    }
    .sub1 {
        font-size: 12px;
        font-weight: bold;
    }
    .timespan {
        font-size: 12px;
    }
    .sub1, .timespan {
        margin-left: 20px;
    }
    .sub-experiences.two {
        margin-top: 50px;
    }
    li > p {
        max-width: 800px;
    }
    .skills {
        margin-top: 400px;
        width: 100%;
    }
    .skillsContainer {
        margin-left: 50px;
        width: 90%;
        background-color: #ddd;
    }
    .mySkills {
        text-align: right;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
    }
    .node, .css, .docker {
        width: 85%;
        background-color: #4CAF50;
    }
    .angular, .react, .django, .digital {
        width: 80%;
        background-color: rgb(105, 104, 179);
    }
    .vue, .js, .express, .graphQL, .postgres, .cicd, .heroku {
        width: 90%;
        background-color: #4CAF50;
    }
    .ts, .flask, .mongo {
        width: 75%;
        background-color: #2c3e50;
    }
    .html, .rest, .redis, .git {
        width: 95%;
        background-color: #4CAF50;
    }
    .scss {
        width: 60%;
        background-color: rgb(215, 88, 88);
    }
    .skills > p {
        margin-top: 20px;
        text-align: left;
        margin-left: 50px;
        font-size: 12px;
    }
</style>
