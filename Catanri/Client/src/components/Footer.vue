<template lang="pug">
    #header
        p {{ message }}
        #foot-sec
        #foot-sec2
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      message: `Spanri, 2017`,
    };
  },
};
</script>

<style scoped>
#footer {
    padding: 0;
}
p {
    color:white;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    background:  #ffa4d2;
    text-decoration: none;
    padding: 1%;
    border-top: #647783 solid 2px;
    margin: 0;
}
#foot-sec{
    position: absolute;
    background:  #b1ddff;
    width: 100%;
    height: 70px;
    bottom: 50px;
    transform: skewY(-1deg);
    overflow: hidden;
    z-index: -1;
}
#foot-sec2{
    position: absolute;
    background:  #b1ddff;
    width: 100%;
    height: 80px;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
}
</style>