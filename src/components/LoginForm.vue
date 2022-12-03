 <script setup>

 import { useRouter } from 'vue-router'
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter() //get a reference to our vue router

const register = () => {
    console.log("hello")
 signInWithEmailAndPassword(getAuth(), email.value, password.value)
 .then ((data) => {
   console.log("successfully sign in!");

 
            router.push({
                path: 'DashBoard'
            })
        
 })
 .catch((error) => {
   console.log(error.code);
   //alert(error.message);
   switch (error.code) {
    case "auth/invalid-email":
    errMsg.value = "Invalid email";
    alert("Invalid email");
    break;
    case "auth/user-not-found":
    errMsg.value = "No account with that email was found";
    alert("No account with that email was found");
    break;
    case "auth/wrong-password":
    errMsg.value = "Incorrect password";
    alert("Incorrect password");
    break;
    default:
    errMsg.value = "Email or password was Incorrect";
    break;
   }



 });
};

const signInWithGoogle = () => {
}
 

 </script>
 
 
 <template>
<div>
<form action="" method="post">

<h1 class="text-success">Kindly Login your imformations</h1>

<label>Email address</label><br> 
<input class="form-control" type="text"  placeholder="@email.com" v-model="email" Required/>
<p class="">we'll not share your info with anyone.</P>

 
<label>password</label><br>
<input class="form-control" type="password" placeholder="password" v-model="password" Required/>
<p v-if="errMsg">{{ errMsg }}</p>


 <button class="btn btn-primary m-2" type="button" id="gettingstarted" @click="register">Login</button>

 <router-link to="/find-account" class="text-primary">ForgotPassword</router-link><br>
 
 

<span>New here?</span>
 <router-Link to="/reg" class="text-success" >Signup</router-Link>

</form>

</div>
</template>

<style>
.login{
    background-color: blue;
    color: white;
    border-radius: 5px;
    margin-right: 15px;
    padding: 0px 10px 3px 10px;
}
</style>