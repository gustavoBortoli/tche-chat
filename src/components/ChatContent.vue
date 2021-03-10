<template>
    <div class="message-content-wrapper">
            <div class="message-content">
                <div class="message-container">
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
import ChatMessage from'@/components/ChatMessage.vue'

export default {
    computed: {
        messages: {
            get() {
                return this.$store.getters.contactMessages
            }
        }
    },
    components: {
        ChatMessage
    }
}
</script>

<style>
.message-content-wrapper {
    flex: 1;
    position: relative;
}

.message-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
}

.message-container {
    padding: 20px 15px;
}
</style>