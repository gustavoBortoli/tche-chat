<template>
  <v-app class="bg-color">
    <v-container class="container-main">
      <v-row>
        <v-col cols="4" class="col border-right">
          <ChatMenuLeft />
        </v-col>
        <v-col cols="8" class="col">
          <Chat />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Chat from "@/components/Chat";
import ChatMenuLeft from "@/components/ChatMenuLeft";
export default {
  name: "App",
  components: {
    Chat,
    ChatMenuLeft,
  },
};
</script>

<style scoped>
.bg-color {
    background: #6c7b8873 !important;
}
.container-main {
    margin: auto auto;
    padding-bottom: 0 !important;
    width: 70%;
    height: 90vh;
    border: 1px solid #e0e0e0;
    background-color: white;
    box-shadow: 4px 4px 10px 3px #777;
}
.border-right {
    border-right: 1px solid #e0e0e0;
}
.col {
    padding: 0;
}
</style>
