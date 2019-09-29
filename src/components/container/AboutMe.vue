<template>
    <div class="container">
        <div class="intro">
            <span id="about">ABOUT ME</span>
            <span class="estimate">(IN ABOUT 400 WORDS)</span>
        </div>
        <div class="occupation">
            <span class="introTitle"></span>
            <p
            > I am a fullstack developer at Andela where I work with a distributed team on a trips and travel product.
            </p>
            <p>
            Currently, I am available to freelance or work fulltime in the roles of fullstack engineer, backend engineer or frontend engineer. I however have a particular bias for the backend.
            </p>
            <p>I primarily use node.js to build my REST and GraphQL APIs, with either MongoDB or Postgres for the backend, and redis for caching. On the frontend, I am comfortable using React/Redux, Angular or Vue, depending on my needs. </p>
        </div>
        <div class="occupation">
            <span class="introTitle">CURRENTLY</span>
            <p>At Andela, I have learned to work as a productive member of a distributed team, to give and receive actionable, specific and kind feedback, to manage people(as a product coordinator), build relationships with stakeholders, to build and maintain large web applications, to write clean, and maintainable code, and to tinker with APIs. 😎</p>
        </div>
        <div class="history">
            <span class="introTitle">MY HISTORY</span>
            <span class="estimate">(IN NO PARTICULAR ORDER)</span>
            <ul>
                <li>
                    <p>I first used a computer when I was in grade 6. I don't exactly remember the make. 🤔</p>
                </li>
                <li>
                    <p>I was rewarded my first laptop after working in a quarry for about 4 months. 😅</p>
                </li>
                <li>
                    <p>The first programming language I learned was Python.</p>
                </li>
                <li>
                    <p>I did CS. The first 2 years of campus were hell.😰</p>
                </li>
                <li>
                    <p>My real break in programming came in my final year, when I built a native windows app using C# and Winforms to capture and monitor class attendance. My supervising lecturer loved it, and offered me a job among other things. It never materialized.</p>
                </li>
                <li>
                    <p>I built my first API during Andela's bootcamp. Since then, I've built more than 20 APIs with increasing complexity.</p>
                </li>
                <li>
                    <p>I was never, ever remotely interested in JavaScript until Andela happened.</p>
                </li>
                <li>
                    <p>I always dreamed of joining Microsoft, Recently, Apple or Google. 😅</p>
                </li>
                <li>
                    <p>I had a naughty, problematic childhood. 😂</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   export default {
       name: 'AboutMeComponent'
   }
</script>

<style scoped>
    * {
        line-height: 1.5;
    }
    .container {
        margin-top: -670px;
        margin-left: 450px;
        background-color: white;
        height: 900px;
        width: 65%;
        border-radius: 40px;
    }
    .intro {
        text-align: left;
        padding: 30px;
        line-height: 1.5;
        width: 90%;
        height: 60px;
        border-bottom: solid 1px rgba(160,160,160,0.65);
    }
    span {
        display: block;
    }
    #about {
        font-weight: bold;
        margin-bottom: 20px;
    }
    .estimate {
        opacity: 0.5;
        font-size: 10px;
    }
    .occupation {
        height: 140px;
        max-width: 850px;
        margin-top: 20px;
        text-align: left;
        margin-left: 30px;
        font-size: 14px;
    }
    .history {
        height: 200px;
        max-width: 850px;
        margin-top: 20px;
        text-align: left;
        margin-left: 30px;
        font-size: 14px;
    }
    .introTitle {
        font-weight: bold;
    }
</style>
