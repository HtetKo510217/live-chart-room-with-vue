<template>
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button>Sign in</button>
    </form>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        let email = ref("");
        let password = ref("");
        let signIn = ()=> {
            console.log(email.value,password.value);
        }
        return {email,password,signIn}
    }

    
}
</script>
<style >
    
</style>