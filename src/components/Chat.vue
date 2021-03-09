<template>
    <div class="wrapper">
        <ChatHeader :contactName="contact.name"/>
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
        <ChatFooter :messages="messages"/>
    </div>
</template>

<script>
const ChatHeader = () => import(
    '@/components/ChatHeader.vue'
)
    
const ChatMessage = () => import(
    '@/components/ChatMessage.vue'
)

const ChatFooter = () => import(
    '@/components/ChatFooter.vue'
)

export default {
    data() {
        return {
            contact: {
                name: "Contato teste"
            },
            messages: [
                {
                   content: 'Teste',
                   messageOwner: 'Third',
                   time: '10:30'
                },
                {
                   content: 'Teste2',
                   messageOwner: 'User',
                   time: '10:31'
                },
                {
                   content: 'Teste3',
                   messageOwner: 'Third',
                   time: '10:32'
                }
            ]
        }
    },
    components: {
        ChatHeader, ChatMessage, ChatFooter
    }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 15px;
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
    border: 1px solid #F0F0F0;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
}

.message-container {
    padding: 20px 15px;
}
</style>