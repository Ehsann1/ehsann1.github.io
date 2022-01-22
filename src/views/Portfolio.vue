<template>
    <div>
        <div class="container row">
            <div v-for="p in projects" v-bind:key="p.id" @click="showProject(p.name)"
                class="col-12 col-sm-6 col-md-6 col-xl-6">
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
        <!--  -->
        <template>
            <v-row>
                <v-col cols="auto">
                    <v-dialog transition="dialog-top-transition" v-model="projectDetailCard" dark v-if="projectCard">
                        <v-card max-width="700" class="rounded-xl">
                            <v-toolbar color="#0d86ff" dark>
                                            <h3 class="sahel-font">{{projectCard.name}}</h3>
                                       <v-spacer></v-spacer>
 <v-btn icon>
                                            <v-icon @click="projectDetailCard=false;">mdi-close</v-icon>
                                        </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                    <!--  -->
                                    <v-carousel hide-delimiter-background show-arrows-on-hover height="400" dark>
                                        <v-carousel-item v-for="(image, i) in projectCard.images" :key="i">
                                            <v-img class="rounded-xl ma-5" :lazy-src="require('../assets/images/'+image)"
                                                max-height="100%" max-width="100%"
                                                :src="require('../assets/images/'+image)"></v-img>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <!--  -->
                            </v-card-text>
                            <v-card-actions class="justify-start">
                                <div>
                                {{projectCard.des}}
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </template>
        <!--  -->
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
</style>
<script>
    export default {
        name: 'Portfolio',
        data: () => ({
            // Card:
            projectDetailCard: false,
            projectCard: null,

            projects: [{
                name: 'هگمتان قطعه',
                link: 'https://hmachinery.ir',
                des: 'همکاری با شرکت هگمتان قطعه در خصوص طراحی وب سایت این شرکت.',
                imgurl: 'HmachineryLogo.jpg',
                images: ['HmachineryAccount.png','Hmachinery.png'],
                rating: 5,
            }],
        }),
        methods: {
            showProject: function (project_name) {
                // ...
                const obj = this.projects.find(function (x) {
                    return x.name == project_name
                });
                this.projectCard = obj;
                this.projectDetailCard = true;
            },
            // ...
        },
    }
</script>