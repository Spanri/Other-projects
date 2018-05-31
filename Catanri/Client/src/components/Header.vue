<template lang="pug">
    #header
        link(href="https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display" rel="stylesheet")
        div(width='100vw')
            img#logo(src="../assets/logo.png")
        #nav
            router-link.navig(v-for='todo of todos' :to='todo.href') {{ todo.text }}
        #mob
            img#menu(v-on:click="mobnav" src="../assets/menu.svg")
            #mobn
                router-link.mobnav(v-for='todo of todos' :to='todo.href') {{ todo.text }}
        #head-sec
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            todos: [
                { text: 'Main', href: './Main' },
                { text: 'My sites', href: './MySites' },
                { text: 'Comments', href: './Comments' },
                { text: 'To order art', href: './NotFound' },
                { text: 'Popular', href: './NotFound' },
                { text: 'Contacts', href: './NotFound' },
            ],
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
}
#logo {
    display: block;
    width: 100px;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 1%;
}
#nav{
    display: grid;
    grid-template-columns: repeat(6,auto);
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
    color: white;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    background: #ffa4d2;
    text-decoration: none;
    padding: 7px;
    margin: 5px;
    border: #ffa4d2 solid 4px;
    border-radius: 7px;
    box-shadow: 2px 2px 0 #647783;
    max-height: 50px;
    overflow: hidden;
}
.navig:hover {
    transform: scale(1.03);
    background: #ff6cbd;
    border-color: #ff6cbd;
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