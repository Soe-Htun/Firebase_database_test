import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase'
Vue.config.productionTip = false
Vue.use(ElementUI);

var firebaseConfig = {
  apiKey: "AIzaSyBduRRjmkErpa628o4ZkBkCSSSkc0YDTiw",
  authDomain: "testdatabse-a2136.firebaseapp.com",
  databaseURL: "https://testdatabse-a2136.firebaseio.com",
  projectId: "testdatabse-a2136",
  storageBucket: "testdatabse-a2136.appspot.com",
  messagingSenderId: "180356959582",
  appId: "1:180356959582:web:c07ea2df93e0fe0d6d53cf",
  measurementId: "G-SWRFK08LRB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
