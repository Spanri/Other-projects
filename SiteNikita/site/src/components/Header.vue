<template>
    <div id="header">
      <div id="nav">
          <div id="article">{{ msg }}</div>
          <router-link class="navig" :key='todo.id' v-for='todo of todos' :to='todo.href'> 
            {{ todo.text }} 
          </router-link>
      </div>
      <div id="mob">
          меню
          <div id="mobn">
              <router-link class="mobnav" :key='todo.id' v-for='todo of todos' :to='todo.href'>
                {{ todo.text }}
              </router-link>
          </div>
      </div>
      <div id="head-sec"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            todos: [
                { text: 'Главная', href: './' },
                { text: 'Задача', href: './t' },
                { text: 'О сайте', href: './a' },
            ],
            msg: 'Сайт с олимпиадными задачами.'
        };
    },
    methods: {
        mobnav: function(){
            if (document.getElementById('mobn').style.display == 'none') {
                console.log('close');
                document.getElementById('mobn').style.display = 'block';
                // document.getElementById('mob').style.borderBottom = '#647783 solid 2px';
                // document.getElementById('menu').style.boxShadow = 'none';
            }
            else {
                console.log('open');
                document.getElementById('mobn').style.display = 'none';
                // document.getElementById('mob').style.borderBottom = '0';
                // document.getElementById('menu').style.boxShadow = '2px 2px 0 #647783';
            }
        }
    },
    created() {
        var mediaQueryList = window.matchMedia("(max-width: 768px)");
        function handleOrientationChange(mql) {
            if (mql.matches) {
                let mob = document.getElementsByClassName('mobnav');
                for(let i=0;i<mob.length;i++){
                    // mob[i].innerHTML = '';
                }
            }
        }
        mediaQueryList.addListener(handleOrientationChange);
        handleOrientationChange(mediaQueryList);
    }
};
</script>

<style scoped>
#header {
    padding: 0;
    /*background: #098C58;*/
    background: #58B38F;
}
#article{
  padding: 20px;
  color: white;
  text-align: left;
  display: inline-block;
}
#logo {
    display: block;
    width: 100px;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 1%;
}
#nav{
    /*float: right;*/
    margin-left: 5%;
    margin-right: 5%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    z-index: 2;
}
#mob {
    display: none;
    border-bottom: #647783 solid 2px;
}
.mobn {
    display: none;
}
.navig {
    /*color: #58B38F;*/
    color: white;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    /*background: white;*/
    text-decoration: none;
    padding: 20px;
    max-height: 50px;
    overflow: hidden;
}
.navig:hover {
    /*color: #1B0042;
    background: #B8D7AE;*/
    background: white;
    color: #1B0042;
    transition: all 0.3s ease-out;
}
#head-sec{
    position: absolute;
    background:  #b1ddff;
    width: 100%;
    height: 300px;
    top: -80px;
    transform: skewY(-2deg);
    overflow: hidden;
    z-index: -1;
}
#menu {
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    background: #ffa4d2;
    text-decoration: none;
    padding: 7px;
    margin: 0;
    border: none;
    /* box-shadow: 2px 2px 0 #647783; */
    height: 30px;
    width: 97%;
    vertical-align: top;
}
@media all and (max-width: 768px) {
    #nav, #logo {
        display: none;
    }
    #mob, .menu {
        display: block;
    }
    #mobn {
        display: none;
    }
    .mobnav {
        color:white;
        font-size: 20px;
        /* border: #647783 solid 1px; */
        text-decoration: none;
        display: block;
        background: #ffa4d2;
        padding: 5px;
    }
}
</style>