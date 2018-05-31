<template lang="pug">
    #MySites
        #message {{ message }}
        #sites
            a.site(v-for="todo in todos" v-bind:href='todo.href')
                p.title
                    a {{ todo.text }}
                p {{ todo.desc }}
                img(:src='todo.url')
</template>

<script>

export default {
  name: 'MySites',
  data () {
    return {
        message: `It's my sites. All titles is clickable.`,
        todos: [
            { 
                text: 'Catanri', 
                href: 'https://spanri.github.io/www/',
                url: './src/assets/catanri.png',
                desc: 'My first site. It`s static. I wanted to make a small website.'
            },
            { 
                text: 'Blast Furnace', 
                href: 'https://github.com/Spanri/BlastFurnace', 
                url: './src/assets/catanri.png',
                desc: 'Client-server app. The task was to create an app showing the operation of sensors in the blast furnace. Data exchange - sockets.'
            },
            { 
                text: 'PsType', 
                href: 'http://pstype.herokuapp.com/', 
                url: './src/assets/pstype.png',
                desc: 'Server, univer`s project. Task is to create an app showing the statistics of the driver along the route of his travel.'
            },
            { 
                text: 'BML', 
                href: 'https://github.com/Spanri/bml', 
                url: './src/assets/catanri.png',
                desc: 'A cellular automaton, training design, orientation - evaluation page.'
            },
        ],
    }
  }
}
</script>

<style scoped>
.site {
    display: inline-block;
    text-align: center;
    background: white;
    border: #488cb6 2px solid;
    box-shadow: 2px 2px 0 #ffa4d2;
    border-radius: 7px;
    margin: 10px;
    padding: 10px;
    max-width: 600px;
}
.site:hover {
    background:#fff0f8;
    transform: scale(1.01);
    transition: all 0.25s ease-out;
}
#message {
    color:#324b5a;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    z-index: 2;
    margin-top: 2%;
    margin-bottom: 2%;
}
img {
    width: 100%;
    max-width: 600px;
}
.title {
    color: #324b5a;
    margin: 0;
    padding: 2px;
}
a {
    text-decoration: none;
    font-size: 20px;
    vertical-align: baseline;
    font-family: 'Josefin Sans', sans-serif;
}
p {
    color: #324b5a;
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-weight: normal;
    padding: 10px;
    margin: 0;
    font-size: 20px;
}
@media all and (max-width: 768px) {
    
}
</style>