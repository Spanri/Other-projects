<template lang="pug">
  #app
    Header
    //- <div v-for='post in posts'>
    //-     <h3>{{ post.title }}</h3>
    //-     <p>{{ post.body }}</p>
    //- </div>
    router-view
    Footer
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Catanri',
      posts: [],
    }
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
}
p {
  display: inline-block;
  font-size: 30px;
  text-align: left;
  margin: 1%;
  color: #2c3e50;
  vertical-align: text-bottom;
}
</style>
