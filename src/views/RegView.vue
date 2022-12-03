<script setup>

import TheWelcome from '../components/TheWelcome.vue'

import RegistrationForm from '../components/RegistrationForm.vue'

import RegImg from '../components/RegImg.vue'
import RegNavBar from '../components/RegNavBar.vue'


</script>

<template>
 <main>
 <RegNavBar />
 <div class="container">
 <div class="row">

    

    <div class="col-md-6">
       <RegImg />
    </div>

    <div class="col-md-6">
    <RegistrationForm />
    </div>
    
    
    </div>
    </div>
     </main>


</template>