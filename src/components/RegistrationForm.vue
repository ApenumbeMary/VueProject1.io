<script setup>
import { useRouter } from 'vue-router'
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    console.log("hello")
 createUserWithEmailAndPassword(getAuth(), email.value, password.value)
 .then ((data) => {
   console.log("successfully register");

 
            router.push({
                path: 'success'
            })
        
 })
 .catch((error) => {
   console.log(error.code);
   alert(error.message);
 })
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
   .then((result) => {
    console.log(result.user);
    router.push({
      path: 'success'
    });

   })
   .catch((error) => {

   });
};
</script>

<template>
 
 <div class="container">
 <form action="" method="post">

    <label for="email">Email address</label>
    <input class="form-control" type="text" placeholder="@email.com" v-model="email" />
    <p>We'll never share your email with anyone else.</P>

    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />

    <label for="password">Repeat Password</label>
    <input class="form-control" type="password" placeholder="password" />

    <button class="btn btn-primary mt-3" type="button" @click="register">Register</button>
    <button class="btn btn text-primary mt-3" type="button" @click="signInWithGoogle">Sign In With Google</button>

    <p>Already have an account? <router-link to="/"  class="text-primary">Login</router-link> instead</p>

</form>
 </div>
</template>



<style>
body{
    margin-top: 0px;
    padding-top: 0px;
}
img{
    width:;
}
.reg{
    background-color:;
    color: white;
    border-radius: 3px;
    margin-botton: 20px;
    padding: 0px 5px 5px 5px;
}
label{
font-weight: bold;
color: ;
}
</style>