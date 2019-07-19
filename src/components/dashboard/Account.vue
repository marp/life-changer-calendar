<template>
  <div>
    <md-field>
      <label>Display name</label>
      <md-input v-model="displayName"></md-input>
    </md-field>
    <md-button @click="update" class="md-raised md-primary">Primary</md-button>

    <md-snackbar md-position="left" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{ snackbarMsg }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "account",
  data: function() {
    return {
      showSnackbar: false,
      snackbarMsg: "",
      duration: 4000,
      displayName: "(loading...)",
    };
  },
  created: function(){
    this.displayName = firebase.auth().currentUser.displayName;
  },
  methods: {
    update: function() {
      if (firebase.auth().currentUser != null) {
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: this.displayName.trimLeft()
          })
          .then(
            ()=> {
              this.showSnackbar=true;
              this.snackbarMsg = "Your data has been updated!";
            },
            (error)=>{
              this.showSnackbar=true;
              this.snackbarMsg = "ERROR! Your data has NOT been updated!";
            }
          );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
