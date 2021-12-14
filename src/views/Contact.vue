<template>
  <div class="mt-5">
    <p style="font-size:2em;"> فرم ارسال پیام  :</p>
    <v-row>
      <v-col cols="12" md="6" sm="6" lg="6" xl="6">
        <v-text-field auto-grow color="blue" filled dark rounded label="اسم کامل"></v-text-field>
      </v-col>
      <v-col cols="12" md="6" sm="6" lg="6" xl="6">
        <v-text-field auto-grow color="blue" filled dark rounded label="ایمیل"></v-text-field>
      </v-col>
      <v-col cols="12"> 
        <v-textarea filled rounded dark color="blue" auto-grow label="پیام شما" rows="4" row-height="30" ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-left">
        <v-btn style="width:10em;" rounded dark large outlined color="blue">ارسال</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'Contact',


  }
</script>