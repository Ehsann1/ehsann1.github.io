<template>
  <div>
    <div class="container">
      <p dir="ltr" class="container">
        I love programming and I do it with interest. I mostly work as a
        freelancer. My specialty is web development and I use technologies
        like Django, Vue Js and so on.
      </p>

      <div class="row about-boxs">
        <v-col cols="12" md="6" xl="6" lg="6" >
          <div class="about-box pa-2 row">
          <v-icon large color="#0D86FF" style="font-size:5em;">mdi-pencil-ruler</v-icon>
          <div class="about-box-title mr-5 ">
            طراحی وب سایت
          </div>
          </div>
          <!-- <div class="about-box-body">1</div> -->
        </v-col>
        <v-col cols="12" md="6" xl="6" lg="6" >
          <div class="about-box pa-2 row">
          <v-icon large color="#0D86FF" style="font-size:5em;">mdi-web</v-icon>

          <div class="about-box-title mr-5 ">
            توسعه وب سایت
          </div>
          </div>
          <!-- <div class="about-box-body">1</div> -->
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
  }
</script>
