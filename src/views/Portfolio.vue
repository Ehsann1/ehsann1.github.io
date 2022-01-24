<template>
    <v-card style="background:#302c40;" :loading="projects?false:true">
        <v-row style="background:#302c40;" dark class="container row">
            <v-col v-for="p in projects" v-bind:key="p.id" cols="12" xs="12" sm="12" md="6" lg="6" xl="4">
                <!-- col-12 col-sm-6 col-md-6 col-xl-6 -->
                <v-card elevation="15" dark class="mx-auto my-12" max-width="340" height="500">
                    <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
</template>

                    <v-img @click="showProject(p.name)" lazy-src="../assets/images/Lazy.jpg" height="250"
                        v-bind:src="p.imgurl"></v-img>

                    <v-card-title @click="showProject(p.name)">{{p.name}}</v-card-title>

                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <div v-text="p.des.length>100?p.des.slice(0,50)+'...':p.des"></div>
                    </v-card-text>

                    <div class="text-center">
                        <v-rating readonly v-model="p.rating" length="5" dark color="#FFD700"
                            background-color="white lighten-2"></v-rating>
                    </div>

                    <v-card-actions style="text-align:left;display:revert;">
                        <v-btn color="blue lighten-2" text :href="p.link" target="_blank">
                            بازدید از سایت
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <!--  -->
<template>
    <v-row>
        <v-col cols="auto">
            <v-dialog class="rounded-xl" max-width="70%" v-model="projectDetailCard" dark v-if="projectCard">
                <v-card class="rounded-xl">
                    <v-toolbar color="#302c40" style="" dark>
                        <h3 class="sahel-font">{{projectCard.name}}</h3>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="projectDetailCard=false;">
                            <v-icon color="red">mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <!--  -->
                        <v-carousel v-if="projectCard.images.length>0" color="red" hide-delimiter-background show-arrows-on-hover height="suto" dark>
                            <v-carousel-item v-for="(image, i) in projectCard.images" :key="i">
                                <v-img class="rounded ma-5" lazy-src="../assets/images/Lazy.jpg" max-height="100%" max-width="100%" :src="BACKEND_DOMAIN+image"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                        <h1 v-else class="mt-5">
                            تصویری های بیشتری برای این پروژه موجود نیست.
                        </h1>
                        <!--  -->
                        <p class="justify-start" style="text-align: justify;">
                            {{projectCard.des}}
                        </p>
                        <v-divider v-if="projectCard.employer_opinion.full_name" class="mx-4"></v-divider>
                        <div v-if="projectCard.employer_opinion.full_name" class="container pa-5 mr-5">
                            <h3>نظر کارفرما</h3>
                            <v-icon large>mdi-account-circle</v-icon>
                            <i style="font-style: italic;margin-right:10px;">{{projectCard.employer_opinion.full_name}} : </i>
                            <h4>توضیح : </h4>
                            <p class="mr-5 pr-5">
                                {{projectCard.employer_opinion.text}}
                            </p>
                            
                            <div v-if="projectCard.employer_opinion.img" class="text-center ml-5 pl-5">
                                <v-img class="rounded ma-5" lazy-src="../assets/images/Lazy.jpg" max-height="100%" max-width="100%" :src="BACKEND_DOMAIN+projectCard.employer_opinion.img"></v-img>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>
        <!--  -->
    </v-card>
</template>

<style >
.v-dialog{
    border-radius: 24px !important;
}
.image,
.image-des {
    border-radius: 10%;
    padding: 1rem;
}

.v-btn--icon.v-size--small .v-icon,
.v-btn--fab.v-size--small .v-icon {
    color: #f7972a !important;
}

.image-des {
    margin-top: -2em;
}
</style>

<script>
import axios from 'axios'

export default {
    name: 'Portfolio',
    data: () => ({
        // Card:
        projectDetailCard: false,
        projectCard: null,

        projects: null,
    }),
    created() {
        this.GetProjects();
    },
    methods: {
        showProject: function(project_name) {
            const obj = this.projects.find(function(x) {
                return x.name == project_name
            });
            this.projectCard = obj;
            this.projectDetailCard = true;
        },

        GetProjects: function() {
            const thisis = this;
            axios.get(this.BACKEND_DOMAIN + '/api/project/list/')
                .then(r => {
                    thisis.projects = r.data;
                }).catch(e => {
                    console.log(e.response.data);
                })
        },
        // ...
    },
}
</script>