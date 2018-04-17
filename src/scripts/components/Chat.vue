
<template>
  <div class="chat">
    <div class="chat__messages"></div>
    <form @submit.prevent="sendChatMessage">
      <input type="text" v-model="message" placeholder="chat..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { db } from '../api/db.js'

export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendChatMessage() {
      if (this.message !== '') {
        db.sendChatMessage(this.message);
        this.message = '';
      }
    }
  }
}
</script>

<style language="scss">
</style>
