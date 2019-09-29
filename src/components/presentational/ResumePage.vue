<template>
    <div class="appContainer">
        <NavComponent active-index="3"></NavComponent>
        <AboutComponent></AboutComponent>
        <ResumeComponent></ResumeComponent>
    </div>
</template>
<script>
    import NavComponent from "@/components/shared/navbar";
    import ResumeComponent from "@/components/container/Resume";
    import AboutComponent  from "@/components/shared/about";

    export default {
        name: 'ResumePageComponent',
        components: {
            AboutComponent, ResumeComponent, NavComponent
        }
    }
</script>
<style scoped>
    .appContainer {
        min-height: 100vh;
    }
</style>
