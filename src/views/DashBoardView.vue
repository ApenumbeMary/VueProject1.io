<script setup>
import NavBar from '../components/NavBar.vue'
import DashboardIllustration from '../components/DashboardIllustration.vue'
import UpcomingEvent from '../components/UpcomingEvent.vue'
import Opportunities from '../components/Opportunities.vue'
</script>

<template>
<main>

 <NavBar />

<div class="container">
<div class="row">

<div class="col-md-6">
<DashboardIllustration />
</div>

<div class="col-md-6">
<UpcomingEvent/>

<Opportunities/>
</div>

 </div>
</div>
</main>
</template>

