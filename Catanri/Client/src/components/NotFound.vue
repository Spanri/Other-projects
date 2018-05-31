<template lang="pug">
    #notFound
        p Opppps, not found! (404)
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      message: `We load this page in: ${new Date().toLocaleString()}`,
    };
  },
};
</script>

<style scoped>
#notFound {
    /* width: 100%; */
    font-family: 'Playfair Display', serif;
    padding: 0;
    display: grid;
}
p{
    text-align: center;
    color: #2d3f4b;
    font-weight: normal;
    margin: auto;
    font-size: 40px;
}
</style>