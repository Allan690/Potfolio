<template>
    <div class="appContainer">
        <NavComponent active-index="2"></NavComponent>
        <AboutComponent></AboutComponent>
        <AboutMeComponent></AboutMeComponent>
    </div>
</template>
<script>
    import NavComponent from "@/components/shared/navbar";
    import AboutMeComponent from "@/components/container/AboutMe";
    import AboutComponent  from "@/components/shared/about";

    export default {
        name: 'AboutPageComponent',
        components: {
            AboutComponent, AboutMeComponent, NavComponent
        }
    }
</script>
<style scoped lang="scss">
    .appContainer {
        min-height: 100vh;
    }
</style>
