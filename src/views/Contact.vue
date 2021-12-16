<template>
  <div class="mt-5">



    <v-container>
      <v-alert shaped text :type="alert.type" class="text-center" style="font-size:1.3em;" v-model="alert.show"
        v-text="alert.type=='success'?'پیام شما با موفقیت ارسال شد':'مشکلی پیش آمد لطفا دوباره امتحان کنید'"></v-alert>
    </v-container>

    <v-card dark elevation="0" shaped outlined :disabled="card.disabled" :loading="card.loading">
      <v-card-title> فرم ارسال پیام </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-text-field auto-grow color="blue" v-model="form.name" filled dark rounded label="اسم کامل">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-text-field auto-grow color="blue" v-model="form.email" filled dark rounded label="ایمیل"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea filled rounded dark v-model="form.msg" color="blue" auto-grow label="پیام شما" rows="4"
              row-height="30"></v-textarea>
          </v-col>
          <v-col cols="12" class="text-left">
            <v-btn @click="sendMessage()" style="width:10em;" rounded dark large outlined color="blue">ارسال</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Contact',
    data: () => ({
      alert: {
        show: false,
        type: "success"
      },

      card: {
        loading: false,
        disabled: false
      },
      form: {
        name: '',
        email: '',
        msg: ''
      }
    }),
    methods: {
      sendMessage: function () {
        this.card.loading = true;
        this.card.disabled = true;

        let form = new FormData();
        form.append('name', this.form.name);
        form.append('email', this.form.email);
        form.append('message', this.form.msg);

        axios.post('https://ehsan.hmachinery.ir/api/', form)
          .then(response => {
            this.card.loading = false;
            this.card.disabled = false;

            if (response.data.Response == "Ok") {
              this.alert = {
                show: true,
                type: "success"
              };
            } else {
              this.alert = {
                show: true,
                type: "error"
              };
            }
            var t = this;
            setTimeout(function () {
              t.alert.show = false;
            }, 3000);
          })





      }
    }

  }
</script>