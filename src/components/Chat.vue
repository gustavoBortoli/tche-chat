<template>
    <div class="wrapper">
        <ChatHeader :contactName="contact.name"/>
        <v-divider/>
        <ChatContent :messages="messages"/>
        <ChatFooter :messages="messages"/>
    </div>
</template>

<script>
import ChatHeader from'@/components/ChatHeader.vue'
import ChatContent from'@/components/ChatContent.vue'
import ChatFooter from'@/components/ChatFooter.vue'

export default {
    data() {
        return {
            contact: {
                name: "Contato teste"
            },
        }
    },
    components: {
        ChatHeader, ChatContent, ChatFooter        
    }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 80vh;
}

.header {
    font-size: 1.5em;
    font-weight: 700;
    padding: 10px;
    background: #F0F0F0 !important;
}

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