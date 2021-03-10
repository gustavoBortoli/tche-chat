<template>
    <div :class="message.messageOwner">
        <v-flex class="chat-html">
            <p> {{message.content}}</p>
            <div class="container-time">
                <span class="message_time_date">{{message.time}}</span>
            </div>
        </v-flex>
    </div>
</template>

<script>
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
.User .chat-html {
    float: right;
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