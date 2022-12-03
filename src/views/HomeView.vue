 <script setup>
import TheWelcome from '../components/TheWelcome.vue'
import GuestIllustration from '../components/GuestIllustration.vue'
import LoginForm from '../components/LoginForm.vue'
import HomeNavBar from '../components/HomeNavBar.vue'

</script>

<template>
  <main>
  <HomeNavBar />
    <div class="container">
    <div class="row">

    <div class="col-md-6">
    <GuestIllustration />
    </div>
    

    <div class="col-md-6">
    <LoginForm/>
    </div>

    </div>
    </div>
  </main>
</template>

<style>


</style>

 