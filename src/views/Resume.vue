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
    
                <div class="skill-progress text-right" :style="`width:${skill.ratio}%;`">{{skill.ratio}}%</div>
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
        skills: null,
    }),
    created() {
        this.GetSkills()
    },
    methods: {
        GetSkills: function() {
            // ...
            const thisis = this;
            axios.get(this.BACKEND_DOMAIN + '/api/skill/list/')
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
