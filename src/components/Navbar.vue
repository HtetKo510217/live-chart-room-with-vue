<template >
    <nav>
        <div>
            <p>Hi display Name</p>
            <p class="email">logged in as email</p>
        </div>
        <button @click="signOut">Logout</button>
    </nav>
</template>
<script>
import useLogOut from '../composables/useLogOut';

export default {
    setup() {
        let {error,logout} = useLogOut();
        let signOut = async() => {
            await logout();
            console.log('logout');
        }
        return {signOut,error}
    }
}
</script>
<style >
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 14px;
        color: #999;
    }
</style>