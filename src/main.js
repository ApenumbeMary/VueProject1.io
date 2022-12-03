import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP9Z8_TCI9Yi_eZQOAJXuM5L2CBAvDD0I",
  authDomain: "fir-project-61c5d.firebaseapp.com",
  projectId: "fir-project-61c5d",
  storageBucket: "fir-project-61c5d.appspot.com",
  messagingSenderId: "119483557841",
  appId: "1:119483557841:web:cd907a9fdd15b5eee5a2f0"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
