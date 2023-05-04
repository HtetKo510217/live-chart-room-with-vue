<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>
<script>
import ChatWindow from '../components/chatWindow.vue'
import NewChatForm from '../components/NewChatForm.vue'
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser';
import Navbar from '../components/Navbar.vue'
import { watch } from 'vue';
export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },
    setup() {
      let {user} = getUser();
      let router = useRouter();
      watch(user,()=>{
        if(!user.value) {
          router.push('/');
        }
      })
    }
}
</script>