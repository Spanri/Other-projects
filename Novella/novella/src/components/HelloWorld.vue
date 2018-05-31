<template>
  <div class="hello">
    <div class="hello2">
      <h1>{{ msg }}</h1>
      <ul>
        <li><router-link to='./Start'>Start</router-link></li>
        <li><router-link to='./About'>About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my world, master'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 200px;
}
.hello2 {
  background: rgba(48, 65, 62, 0.7);
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px;
  max-width: 500px;
  /* margin-right: 200px;
  padding-bottom: 50px; */
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
a {
  color: white;
  text-decoration: none;
  font-size: 25px;
}
li:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-out;

}
</style>
