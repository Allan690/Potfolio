<template>
    <div class="appContainer">
        <NavComponent active-index="5"></NavComponent>
        <AboutComponent></AboutComponent>
        <ContactsComponent></ContactsComponent>
    </div>
</template>
<script>
    import NavComponent from "@/components/shared/navbar";
    import ContactsComponent from "@/components/container/Contacts";
    import AboutComponent  from "@/components/shared/about";

    export default {
        name: 'ContactsPageComponent',
        components: {
            AboutComponent, ContactsComponent, NavComponent
        }
    }
</script>
<style scoped>
    .appContainer {
        min-height: 100vh;
    }
</style>
