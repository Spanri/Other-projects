<template lang="pug">
  #Welcome
    #message {{ message }}
    #about
        img(src="../assets/cat.jpg")
        p {{ msg }}
        div
</template>

<script>

export default {
  name: 'Welcome',
  data () {
    return {
      message: `Site about Spanri as the painter. Animals and color.`,
      msg: `Hello, it's Spanri. I'm 20 and I like to draw and to code. I 
        graduated from art school, draw computer graphics for over 6 
        years. Favorite style of drawing is painting (почему "живопись" 
        так убого переводится), animalism. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Aliquam a volutpat velit, id dignissim velit. 
        Ut eu elit a diam pretium volutpat vitae sit amet nisi. Integer scelerisque 
        pharetra eros, at imperdiet velit. Nam quis pharetra nulla. Aenean 
        lacus dui, congue consequat congue id, maximus a elit. Duis nec 
        laoreet erat. Sed venenatis leo et risus viverra, et congue leo 
        posuere. In ut velit posuere, auctor enim a, dapibus mi. Vivamus 
        condimentum hendrerit arcu vitae volutpat.
        In nec libero est. Donec euismod nisl non commodo tincidunt. Nunc 
        vitae felis gravida nulla sodales molestie eget eu ante. Suspendisse 
        potenti. Aenean sit amet scelerisque nibh, a finibus odio. Mauris 
        tristique neque eu mattis porttitor. Proin et dui elementum enim pretium pretium.
        Sed eget fermentum dolor. Donec porta molestie arcu quis ornare. 
        Mauris mauris nisl, fermentum blandit tellus nec, blandit ornare 
        ipsum. Nulla facilisi. Quisque non leo scelerisque, convallis augue 
        sed, elementum tortor. Duis orci massa, dapibus et hendrerit eget, 
        condimentum nec nisi. Vivamus lobortis nisi sit amet lorem facilisis, 
        non congue risus pharetra. Etiam lorem nisl, ullamcorper id lobortis at, 
        tincidunt eget felis. Maecenas pretium fermentum massa sit amet faucibus. 
        Duis sit amet imperdiet purus, eu auctor lectus. Nullam auctor, est id 
        laoreet semper, ligula mauris mattis est, nec vehicula turpis eros vitae 
        leo. Morbi maximus nunc ac placerat vestibulum. Mauris at tortor sed 
        nunc feugiat malesuada. Pellentesque at vulputate ipsum. Donec et posuere nibh.`
    }
  }
}
</script>

<style scoped>
#Welcome{
    display: grid;
    font-family: 'Playfair Display', serif;
    grid-template-rows: auto auto 1fr;
}
#message {
    color:#324b5a;
    font-size: 20px;
    z-index: 2;
    margin-top: 2%;
    margin-bottom: 20px;
}
#about {
    background: white;
    border: #488cb6 2px solid;
    border-radius: 7px;
    margin: 5px;
    height: auto;
}
p {
    text-align: left;
    color: #2d3f4b;
    font-weight: normal;
    margin: auto;
    padding: 10px;
    font-size: 20px;
}
img {
    width: 100%;
    max-width: 300px;
    margin: 2%;
    margin-bottom: 0;
    float: left;
    border: #488cb6 2px solid;
    border-radius: 7px;
    box-shadow: 3px 3px 0 #ffa4d2;
}
@media all and (max-width: 480px) {
    img {
        display: block;
        float: none;
        margin: 10px auto;
    }
}
</style>