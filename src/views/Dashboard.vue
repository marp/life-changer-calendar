<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ capitalize(component) }}</span>
      </md-app-toolbar>
<!-- md-permanent="full" -->
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item @click="menuClick('account')">
            <md-avatar> <img :src="user.photoURL? user.photoURL: '/img/avatar.png'" class="md-avatar-icon md-icon"></md-avatar>
            <span class="md-list-item-text">
              <span v-if="user.displayName==''||user.displayName==null">{{ user.email }}</span>
              <span v-else>{{ user.displayName }}</span>
            </span>
          </md-list-item>

          <md-list-item @click="menuClick('calendar')">
            <md-icon>calendar_today</md-icon>
            <span class="md-list-item-text">Calendar</span>
          </md-list-item>

          <md-list-item @click="menuClick('notepad')">
            <md-icon>notes</md-icon>
            <span class="md-list-item-text">Notepad</span>
          </md-list-item>

          <md-list-item @click="menuClick('trash')">
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
        <Account v-if="component=='account'"/>
        <Notepad v-if="component=='notepad'"/>
        <Calendar v-if="component=='calendar'"/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import firebase from 'firebase';
import Account from '.././components/dashboard/Account.vue';
import Notepad from '.././components/dashboard/Notepad.vue';
import Calendar from '.././components/dashboard/Calendar.vue';

export default {
  name: "Dashboard",
  props: ['component'],
  components:{
    Account,
    Notepad,
    Calendar
  },
  data(){
    return{
      menuVisible: false,
      user: firebase.auth().currentUser,
    }
  },
  created: function(){



  },
  methods: {
    toggleMenu: function (){
      this.menuVisible = !this.menuVisible;
    },
    logout: function (){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('welcome')
      })
    },
    capitalize: function (s){
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    menuClick: function(path){
      this.$router.replace(path);
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
