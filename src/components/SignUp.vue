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
import useSignUp from "../composables/useSignUp"
export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let {error,createAccount}=useSignUp();
        let signUp = async()=> {
            let res = await createAccount(email.value,password.value,displayName.value);
            console.log(res.user);
        }
        return {displayName,email,password,signUp}
    }

    
}
</script>
<style >
    
</style>