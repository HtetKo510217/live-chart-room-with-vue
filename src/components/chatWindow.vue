<template>
    <div class="chat-window">
        <div class="messages" v-for="chartData in formattedMessages" :key="chartData.id">
            <div class="single">
                <span class="created-at">{{ chartData.created_at }}</span>
                <span class="name">{{chartData.name}}</span>
                <span class="message">{{ chartData.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { db } from '../firebase/config'
import {formatDistanceToNow} from "date-fns"
export default {
    setup(){
      let messages=ref([]);
      let formattedMessages=computed(()=>{
        return messages.value.map((msg)=>{
            let formatTime=formatDistanceToNow(msg.created_at.toDate())
            return {...msg,created_at:formatTime}
        })// [{}]
      })
      db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let results=[];//this onsnapshot run again and array empty again
        snap.docs.forEach((doc)=>{
          let document={...doc.data(),id:doc.id}
          doc.data().created_at && results.push(document);
        })
          messages.value=results;
      })
      return {messages,formattedMessages};
    }
}

</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 20px;
        position: relative;
      }
      .name::after {
        content:'\25BA';
        position: absolute;
        top: 1px;
        color: gray;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>
