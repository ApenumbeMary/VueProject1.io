<script>
import { useRouter } from 'vue-router'
 
 export default {
    setup() {
        const router = useRouter()
        const click = () => {
            router.push({
                path: '/'
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
<button class="btn btn-primary mt-3" type="button" @click="click">Logout</button>
</div>
</nav>

</template>