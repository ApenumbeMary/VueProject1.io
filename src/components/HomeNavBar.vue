<script>
import { useRouter } from 'vue-router'
 
 export default {
    setup() {
        const router = useRouter()
        const click = () => {
            router.push({
                path: '/reg'
            })
        }
        return {
            click
        }
    }
}

</script>

<template>
<nav class="navbar navbar-light bg-light justify-content-between mb-5">
<div class="container">
<a class="navbar-brand">Air Contact </a>
<p class="grow"></p>


<button class="btn btn-primary mr-sm-2" @click="click">Sign up</button>
</div>
</nav>

</template>

<style>
.grow{
    flex-grow: 1;
}
</style>