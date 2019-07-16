import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAixS2iMaChQ70gQeFDecllrQ_30yvAqbk",
  authDomain: "demonewabse.firebaseapp.com",
  databaseURL: "https://demonewabse.firebaseio.com",
  projectId: "demonewabse",
  storageBucket: "",
  messagingSenderId: "407124353038",
  appId: "1:407124353038:web:315469cd9769b573"
};

firebase.initializeApp(firebaseConfig);

Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.material = {
  ripple: true,
  theming : {},
  locale: {
    dateFormat: 'dd/MM/yyyy',
    startYear: 1939,
    endYear: 2099,
    firstDayOfAWeek: 1,
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
  },
}
