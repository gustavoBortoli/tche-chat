<template>
    <div :class="message.messageOwner">
        <!-- <ChatMessageAvatar v-if="message.avatar" :message="message" /> -->
        <v-flex class="chat-html">
            <p> {{message.content}}</p>
            <div class="container-time">
                <span class="message_time_date">{{message.time}}</span>
            </div>
        </v-flex>
    </div>
</template>

<script>
//import AppChatMessageTime from "@/components/chat/AppChatMessageTime.vue";
export default {
    props: {
        message: {
            required: true,
            type: Object
        }
    },
}
</script>

<style scoped>
.chatToolbar .v-toolbar__content {
    padding: 0px;
}
.Third {
    padding: 0;
    margin: 10px 0;
}
.User {
    overflow: hidden;
    margin: 10px 0;
}
.chat-html {
    width: max-content;
    max-width: 60%;
    vertical-align: middle;
    border-radius: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.chat-html p {
    font-size: 14px;
    margin: 0;
    padding: 10px;
    overflow-wrap: break-word;
}
.User .chat-html {
    float: right;
}
.Third .chat-html p {
    background: #E9E9E9;
    color: #222;
    border-radius: 15px 15px 15px 0px;
}
.User .chat-html p {
    background: #079cc5;
    color: #FFF;
    border-radius: 15px 15px 0px 15px;
}
.chat-avatar {
    max-width: 50px;
    max-height: 50px;
    margin-right: 5px;
    border-radius: 50%;
}
.chat-avatar img {
    border-radius: inherit;
    max-width: 100%;
}
.Third .chat-avatar
{
    display: inline-block;
    vertical-align: sub;
}
.User .chat-avatar
{
    float: right;
    clear: left;
}
.container-time {
    position: relative;
    z-index: 10;
    font-size: 11px;
    line-height: 15px;
    white-space: nowrap;
}
.message_time_date {
    color: #222;
    font-size: 12px;
    padding: 4px 0;
    display: block;
    text-align: end;
}
</style>