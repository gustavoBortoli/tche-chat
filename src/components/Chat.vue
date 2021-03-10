<template>
    <div class="wrapper">
        <ChatHeader/>
        <v-divider/>
        <ChatContent/>
        <ChatFooter/>
    </div>
</template>

<script>
import ChatHeader from'@/components/ChatHeader.vue'
import ChatContent from'@/components/ChatContent.vue'
import ChatFooter from'@/components/ChatFooter.vue'

export default {
    components: {
        ChatHeader, ChatContent, ChatFooter        
    }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 95vh;
}
</style>