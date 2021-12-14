<template>
    <div>

        <div class="container row">
            <div v-for="p in projects" v-bind:key="p.id" class="col-12 col-sm-6 col-md-4 col-xl-4">
                <v-card elevation="15" dark class="mx-auto my-12" max-width="340">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" v-bind:src="require('../assets/images/' + p.imgurl)"></v-img>

                    <v-card-title>{{p.name}}</v-card-title>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                        <div v-text="p.des"></div>
                    </v-card-text>




                    <div class="text-center">
                        <v-rating v-model="p.rating" length="5" dark color="#FFD700" background-color="white lighten-2"
                            large></v-rating>
                    </div>

                    <v-card-actions style="text-align:left;display:revert;">
                        <v-btn color="blue lighten-2" text :href="p.link" target="_blank">
                            بازدید از سایت
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .image,
    .image-des {
        border-radius: 10%;
        padding: 1rem;
    }

    .image-des {
        margin-top: -2em;
    }

    .zoom {
        transition: transform 1s;
        /* Animation */
    }

    .zoom:hover {
        transform: scale(1.5);
    }
</style>
<script>
    export default {
        name: 'Portfolio',
        data: () => ({
            projects: [{
                name: 'هگمتان قطعه',
                link: 'https://hmachinery.ir',
                des: 'همکاری با شرکت هگمتان قطعه در خصوص طراحی وب سایت این شرکت.',
                imgurl: 'HmachineryLogo.jpg',
                rating: 5,
            }]
        }),
    }
</script>