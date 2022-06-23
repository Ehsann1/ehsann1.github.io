<template>
    <div class="container">
        <div class="text-center ma-5">
            <h1>مهارت ها</h1>
        </div>
        <v-card :loading="skills?false:true" class="resume-skill-box" dir="ltr">
            <div class="skill" v-for="skill in skills" :key="skill.name">
                <div v-if="screen_width<600">
                    <div v-if="skill.name.length<7" class="skill-progress-background">{{skill.name}}</div>
                    <div v-else class="skill-progress-background">{{skill.name.slice(0,7)}}...</div>
                </div>
                <div v-else class="skill-progress-background">{{skill.name}}</div>
    
                <div class="skill-progress text-right" :style="`width:${skill.level}%;`"></div>
            </div>
    
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Resume',
    data: () => ({
       screen_width:screen.width,
        skills: [
            {id: 1, name: 'Python', level: '70'},
            {id: 1, name: 'Django', level: '60'},
            {id: 1, name: 'DRF', level: '50'},
            {id: 1, name: 'Vue Cli', level: '40'},
            {id: 1, name: 'Vuetify', level: '40'},
            {id: 1, name: 'Git', level: '40'},
            {id: 1, name: 'Linux', level: '30'},
            {id: 1, name: 'Docker', level: '30'},
        ],
    }),
    created() {
        // this.GetSkills()
    },
    methods: {
        GetSkills: function() {
            // ...
            const thisis = this;
            axios.get(this.BACKEND_DOMAIN + '/resume/skill/')
                .then(r => {
                    thisis.skills = r.data;
                }).catch(e => {
                    console.log(e.response.data);
                })
        },
        // ...
    }

}
</script>
