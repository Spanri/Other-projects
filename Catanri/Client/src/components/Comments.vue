<template lang="pug">
  #Welcome
    #message {{ message }}
    button(v-on:click="com") Write comment
    div(v-if="coms && coms.length")
        .comment(v-for="com of coms")
            p 
                strong {{ com.username }}
            p {{ com.comment }}
</template>

<script>
import axios from 'axios';

export default {
    name: 'Welcome',
    data: () => ({
        message: `There are u can to write the letter for me! Also u can see other letter.`,
        coms: [],
    }),
    methods: {
        com: function() {
            let sa = {
                "username": "km",
                "comment": "km"
            };
            console.log(sa);
            axios({
                method: 'post',
                url: 'https://servcat.herokuapp.com/comment',
                data: {
                    username: 'km',
                    comment: 'km'
                }
            });
            // this.axios.post('https://servcat.herokuapp.com/comment', sa)
            // .then(response => {
            //     console.log(response);
            //     // this.coms = response.data.comments;
            // })
            // .catch(e => {
            //     console.log(e);
            // });
            this.coms.push({username:"km",comment:"km"});
        }
    },
    created() {
        this.axios.get('https://servcat.herokuapp.com/comment')
        .then(response => {
            console.log(response.data.comments);
            this.coms = response.data.comments;
        })
        .catch(e => {
            console.log(e);
        });
    }
}
</script>

<style scoped>
#Welcome{
  display: grid;
  /* width: 100vw; */
  font-family: 'Playfair Display', serif;
  grid-template-rows: auto auto 1fr;
}
#message {
    color:#324b5a;
    font-size: 20px;
    z-index: 2;
    margin-top: 2%;
    margin-bottom: 2%;
}
.comment {
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
p {
    text-align: center;
    color: #2d3f4b;
    font-weight: normal;
    margin: auto;
    font-size: 20px;
}
li * {
    text-align: left;
    color: #2d3f4b;
    margin: auto;
    font-size: 20px;
}
button {
    color: white;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    background: #ffa4d2;
    text-decoration: none;
    padding: 7px;
    margin: 0 auto;
    border: #ffa4d2 solid 4px;
    border-radius: 7px;
    box-shadow: 2px 2px 0 #647783;
    max-height: 50px;
    max-width: 200px;
    overflow: hidden;
}
button:hover {
    transform: scale(1.03);
    background: #ff6cbd;
    border-color: #ff6cbd;
    transition: all 0.3s ease-out;
    cursor: pointer;
}
</style>