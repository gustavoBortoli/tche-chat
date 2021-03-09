<template>
  <div class="body-container">
      <div class="body-container-content">
          <div class="messages-container" tabindex="-1" data-tab="7" role="region" style="flex: 0 0 auto; padding-bottom: 8px;">
                <ChatMessage
                    v-for="(message, idx) in messages"
                    :message="message"
                    :key="idx"
                />
          </div>
      </div>
  </div>
</template>

<script>
const ChatMessage = () => import(
    '@/components/ChatMessage.vue'
)
export default {
    components: {   
        ChatMessage
    },
    props: {
        messages: {
            Type: Object
        }
    }
}
</script>

<style scoped>
    .body-container {
        position: relative;
        z-index: 1;
        flex: 1 1 0;
        order: 2;
        visibility: visible;
    }
    .body-container-content {
        position: absolute;
        top: 0;
        z-index: 100;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .messages-container {
        padding-bottom: 8px;
        flex: 0 0 auto;
    }
</style>