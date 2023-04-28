<template>
    <dvi class="welcome container">
        <SignUp></SignUp>
        <SignIn></SignIn>
    </dvi>
</template>

<script>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

    export default {
    components: { SignUp, SignIn }
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
    .welcome button {
        margin: 20px auto;
    }
</style>