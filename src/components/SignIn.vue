<template>
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <div v-if="error" class="error">{{error}}</div>
        <button>Sign in</button>
    </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from "../composables/useLogin";

export default {
    setup(props,context) {
        let email = ref("");
        let password = ref("");
        let {error,login} = useLogin();
        let signIn = async()=> {
           let res = await login(email.value,password.value);
           if(res) {
                context.emit("enterChatroom")
           }
        }
        return {email,password,signIn,error}
    }

    
}
</script>
<style >
    
</style>