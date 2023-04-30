<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="Display Name" v-model="displayName" />
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button>Sign up</button>
    </form>
</template>

<script>
import {ref} from 'vue'
import { auth } from '../firebase/config';
export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let signUp = async()=> {
            try {
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value);
                console.log(res);
            } catch (error) {
               console.log(error.message); 
            }
        }
        return {displayName,email,password,signUp}
    }

    
}
</script>
<style >
    
</style>