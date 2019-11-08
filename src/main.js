import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

Vue.component('fa', FontAwesomeIcon)

import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyD2jB3g9UbKpFNFiHtZukiKQVYJk9aTuc0",
  authDomain: "whisper-7f6e4.firebaseapp.com",
  databaseURL: "https://whisper-7f6e4.firebaseio.com",
  projectId: "whisper-7f6e4",
  storageBucket: "whisper-7f6e4.appspot.com",
  messagingSenderId: "213518959180",
  appId: "1:213518959180:web:8cc888eca9be0cd3af6ae9",
  measurementId: "G-NJZFFHEP00"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
