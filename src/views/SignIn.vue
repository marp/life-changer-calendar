<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <router-link to="/"><img src="https://vuematerial.io/assets/logo-color.png"></router-link>
        <div class="md-title">Vue Material</div>
        <div class="md-body-1">Build beautiful apps with Material Design and Vue.js</div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="/resetpassword">Reset password</a>
        <md-button :disabled="password == ''||email == ''" class="md-raised md-primary" @click="auth">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />

    <md-snackbar md-position="left" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
      <span>Oops. {{ errMsg }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "SignIn",
  data(){
    return{
      email: '',
      password: '',
      loading: false,
      showSnackbar: false,
      duration: 4000,
      errMsg: "",
    }
  },
  methods:{
    auth(){
      this.loading = true;
      // setTimeout(() => {
      //   this.loading = false;
      // }, 5000);
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user)=>{
          this.$router.replace('dashboard');
          this.loading=false;
        },
        (err)=>{
          this.showSnackbar=true;
          this.errMsg=err.message;
          this.loading=false;
        }
      );
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
