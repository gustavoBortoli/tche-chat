<template>
  <v-app>
    <v-container class="container-main">
      <v-row>
        <v-col cols="4" class="p0 border-right">
          <ChatMenuLeft />
        </v-col>
        <v-col cols="8" class="p0">
          <Chat />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Chat from '@/components/Chat';
import ChatMenuLeft from '@/components/ChatMenuLeft';
export default {
  name: 'App',
  components: {
    Chat, 
    ChatMenuLeft
  }
};
</script>

<style scoped>
.container-main {
  margin: auto auto;
  width: 70%;
  border: 1px solid #E0E0E0;
}
.border-right {
  border-right: 1px solid #E0E0E0;
}
.p0 {
  padding: 0;
}
</style>
