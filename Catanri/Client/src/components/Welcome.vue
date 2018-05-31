<template lang="pug">
  #Welcome
    #message {{ message }}
    p {{ msg }}
</template>

<script>

export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Catanri',
      message: `Site about Spanri as the painter. Animals and color.`,
    }
  },
}
</script>

<style scoped>
#Welcome{
  display: grid;
  /* width: 100vw; */
  font-family: 'Playfair Display', serif;
  grid-template-rows: auto 1fr;
}
#message {
    color:#324b5a;
    font-size: 20px;
    z-index: 2;
    margin-top: 2%;
    margin-bottom: 2%;
}
p {
    text-align: center;
    color: #2d3f4b;
    font-weight: normal;
    margin: auto;
    font-size: 40px;
}
</style>