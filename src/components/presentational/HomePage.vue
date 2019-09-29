<template>
    <div class="appContainer">
        <NavComponent active-index="1"></NavComponent>
        <AboutComponent></AboutComponent>
        <homepage></homepage>
    </div>
</template>
<script>
    import NavComponent from "@/components/shared/navbar";
    import homepage from "@/components/container/homepage";
    import AboutComponent  from "@/components/shared/about";

    export default {
        name: 'ProjectsPageComponent',
        components: {
            AboutComponent, homepage, NavComponent
        }
    }
</script>
<style scoped>
    .appContainer {
        min-height: 100vh;
    }
</style>
