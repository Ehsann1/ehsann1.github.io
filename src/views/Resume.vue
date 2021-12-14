<template>
  <div class="container">
    <div class="text-center ma-5">
      <h1>مهارت ها</h1>
    </div>
      <div class="resume-skill-box" dir="ltr">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <div class="skill-progress-background">{{skill.name}}</div>
          <div class="skill-progress text-right" :style="`width:${skill.ratio}%;`">{{skill.ratio}}%</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Resume',
    data:()=>({
      skills:[
        {name:'Python',ratio:60},
        {name:'Django',ratio:70},
        {name:'C',ratio:40},
        {name:'JavaScript',ratio:50},
        {name:'VueJs',ratio:60},
        {name:'Html',ratio:80},
        {name:'css',ratio:60},
      ],

    }),
    methods:{
    }
    
  }
</script>
