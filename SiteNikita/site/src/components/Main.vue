<template>
  <div class="hello">
    <div style="padding: 30px;">{{ msg }}</div>
    <div>
      <router-link class="task" :key='todo.id' v-for='todo of todos' :to='todo.href'> 
        <div> {{ todo.text }} </div>
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Добро пожаловать на сайт с задачками! Ниже можно увидеть список задач.',
      todos: [
                { text: 'Задача 1. Какие-то умные слова...', href: './' },
                { text: 'Задача 2, не забыть написать условие задачи!!!', href: './' },
                { text: 'Задача 3, да, это заглушки, и че ты мне сделаешь', href: './' },
                { text: 'Задача 4, еще одна заглушка', href: './' },
                { text: 'Задача 5, заглушка? Дурацкое слово', href: './' },
            ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: white;
  margin: 20px;
}
.task{
  background: #58B38F;
  display: inline-block;
  text-align: center;
  margin: 20px;
  padding: 20px;
  max-width: 600px;
  color: white;
  text-decoration: none;
}
</style>
