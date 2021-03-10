<template>
    <div class="input-container">
        <ChatInput/>
    </div>
</template>

<script>
const ChatInput = () => import(
    '@/components/ChatInput.vue'
)

export default {
    components: {
        ChatInput
    }
}
</script>

<style scoped>
    .input-container {
        box-sizing: border-box;
        flex-direction: row;
        align-items: flex-end;
        width: 100%;
        min-height: 62px;
        padding: 1rem 0.8rem;
        background: #F0F0F0 !important;
    }
</style>