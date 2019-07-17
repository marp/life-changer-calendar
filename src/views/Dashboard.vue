<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>
<!-- md-permanent="full" -->
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
          <router-link to="/dashboard/account">Acc</router-link>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-avatar> <img :src="user.photoURL? user.photoURL: '/img/avatar.png'" class="md-avatar-icon md-icon"></md-avatar>
            <span class="md-list-item-text">{{ user.email }}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to="/about">PULPIT</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text"><router-link to="/about">KONTO</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item @click="logout">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view class="view two" name="dashboardView"/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Dashboard",
  data(){
    return{
      title: "Tytul",
      menuVisible: false,
      user: firebase.auth().currentUser,
    }
  },
  methods: {
    toggleMenu (){
      this.menuVisible = !this.menuVisible;
    },
    logout: function (){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('welcome')
      })
    }
  }
}
</script>


<style lang="scss" scoped>


  .md-app {
    // max-height: 400px;
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
