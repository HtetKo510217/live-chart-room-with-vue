<template>
    <dvi class="welcome container">
        <div v-if="showLoginForm">
            <SignIn @enterChatroom="enterChatroom"></SignIn>
            <p>Not A Member ?<span @click="showLoginForm=!showLoginForm"> Create Account ?</span></p>
        </div>
        <div v-else>
            <SignUp @enterChatroom="enterChatroom"></SignUp>
            <p>Already member ?<span @click="showLoginForm=!showLoginForm"> Login Account ?</span></p>
        </div>
    </dvi>
</template>

<script>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import {ref} from 'vue'
import {useRouter} from "vue-router"
export default {
    components: { SignUp, SignIn },
    setup() {
        let showLoginForm = ref(true);
        let router = useRouter();
        let enterChatroom = ()=> {
            router.push({name:"Chartroom"})
        }
        return {showLoginForm,enterChatroom}
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    /* form style */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;

    }
    .welcome span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button {
        margin: 20px auto;
    }
</style>