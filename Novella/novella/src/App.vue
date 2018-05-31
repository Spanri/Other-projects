<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  background-image: url('./assets/bg_hello.jpg');
  /* background-size: 100vw 100vh; */
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* margin: 0; */
}
</style>
