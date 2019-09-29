<template>
    <div class="appContainer">
        <NavComponent active-index="4"></NavComponent>
        <AboutComponent></AboutComponent>
        <ProjectsComponent></ProjectsComponent>
    </div>
</template>
<script>
    import NavComponent from "@/components/shared/navbar";
    import ProjectsComponent from "@/components/container/Projects";
    import AboutComponent  from "@/components/shared/about";

    export default {
        name: 'ProjectsPageComponent',
        components: {
            AboutComponent, ProjectsComponent, NavComponent
        }
    }
</script>
<style scoped>
    .appContainer {
        min-height: 100vh;
    }
</style>
