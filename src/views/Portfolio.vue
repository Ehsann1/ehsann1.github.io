<template>
    <div>
        <h1>Portfolio Page</h1>
        

        <div class="container">
            <div class="row text-center">
                <div class="col-12 col-sm-6 col-md-4 col-xl-4" v-for="i in [0,1,2,3,4,5]">
                    <div class="image-box">
                        <img class="image zoom" src="https://hmachinery.ir/media/images/Product/20200920_162305_gaEabEu.jpg" width="100%">
                        <div class="image-des text-right">
                            name
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.image, .image-des{
    border-radius: 10%;
    padding: 1rem;
}
.image-des{
    margin-top: -2em;
}
.zoom {
  transition: transform 1s; /* Animation */
}

.zoom:hover{
  transform: scale(1.5); 
}

</style>
<script>
  export default {
    name: 'Portfolio',
    data: () => ({
        i:0,
    }),
  }
</script>