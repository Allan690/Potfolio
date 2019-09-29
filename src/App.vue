<template>
  <router-view id="app">
      <HomePage></HomePage>
  </router-view>
</template>

<script>
    import HomePage from "@/components/presentational/HomePage";
  export default {
  name: 'app',
  components: {
      HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: rgb(244, 244, 244);
  text-align: center;
  letter-spacing: 1px;
  color: #2c3e50;
}
a {
  color: inherit;
  text-decoration: none;
  border-bottom: dotted 1px rgba(160,160,160,0.65);;
}
</style>
