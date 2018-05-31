<template>
  <div class="novella">
      <div class="novella2">
        <h1>{{ msg }}</h1>
        <div class="words">
            <p>Приветик, что тебе надо? Тут должна быть дальше история, 
                но я не умею рисовать и еще хз как сделать переход на другие 
                слайды... Может когда-то и сделаю...
            </p>
            <ul>
            <li><router-link to='./'>Back</router-link></li>
        </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Empty пока что сорри'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.novella {
    height: 100%;
    background-image: url('../assets/bg_lake.jpg');
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.novella2 {
    padding-top: 200px;
    margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin-bottom: 35px;
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
.words {
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.432);
    min-height: 180px;
    width: 100%;    
}
p {
    padding: 30px;
    font-size: 18px;
}
</style>
