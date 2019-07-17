<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <router-link to="/"><img src="https://vuematerial.io/assets/logo-color.png"></router-link>
        <div class="md-title">Vue Material</div>
        <div class="md-body-1">Build beautiful apps with Material Design and Vue.js</div>
      </div>

      <div class="form">
        <md-field md-clearable>
          <label>E-mail</label>
          <md-input v-model="email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password" md-toggle-password></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Repeat password</label>
          <md-input v-model="password_repeat" type="password"></md-input>
        </md-field>

        <md-checkbox v-model="rules" class="md-layout md-alignment-middle-left">I accept the rules</md-checkbox>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <!-- <a href="/resetpassword">Reset password</a> -->
        <md-button class="md-raised md-primary md-layout md-gutter md-alignment-top-center" @click="auth">Join!</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />

    <md-snackbar md-position="left" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{ snackBarMsg }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "SignUp",
  data(){
    return{
      email: '',
      password: '',
      password_repeat: '',
      rules: false,
      loading: false,
      showSnackbar: false,
      duration: 4000,
      snackBarMsg: "",
    }
  },
  components: {

  },
  methods:{
    auth(){
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user)=>{
          this.email = "";
          this.password = "";
          this.password_repeat = "";
          this.rules = false;

           this.snackBarMsg = "The account has been created! You will be redirected to dashboard now...";
           this.showSnackbar = true;
           this.loading = false;

           setTimeout(()=>{
             this.$router.replace('dashboard');
            }, 3000);
        },
        (err)=>{
          var errorCode = err.code;
          var errorMessage = err.message;
          if (errorCode == 'auth/weak-password') {
            this.snackBarMsg = "The password is too weak, use 6 or more chars.";
            this.showSnackbar = true;
            this.loading = false;
          } else {
            this.snackBarMsg = "Oops. "+err.message;
            this.showSnackbar = true;
            this.loading = false;
          }
          console.log(err);
        }
      )
    }
  }
};
</script>

<style lang="scss" scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    background: url("/bg.svg");
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
