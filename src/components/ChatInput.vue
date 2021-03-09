<template>
    <div class="chat-bottom-nav"> 
        <v-text-field
            solo
            id="chat-input"
            label="Digite uma mensagem"
            class="v-text-field"
            hide-details
            :append-icon="mdiSend"
            color="cyan darken"
            :value="userInput"
            @keydown="handleKey($event)"
            @click:append.stop="submitMessage(userInput)"
            autocomplete="off"
            @input="userInput = $event;"
        ></v-text-field> 
    </div>
</template>

<script>
import { mdiSend, mdiChevronUp } from "@mdi/js";

export default {
    data() {
        return {
            userInput: "",
            mdiSend, 
            mdiChevronUp 
        };
    },
    props: {
        messages: {
            Type: Object
        }
    },
    methods: {
        handleKey(event) {
            if (event.keyCode === 13 && !event.shiftKey) {
                this.submitMessage(this.userInput);
                event.preventDefault();
            } else if (event.keyCode === 27) {
                this.userInput = "";
                event.preventDefault();
            }
        },
        submitMessage() {
            if(!this.userInput)
                return;
            console.log(this.userInput)
            this.messages.push({
                   content: this.userInput,
                   messageOwner: 'User',
                   time: '10:30'
                })
            this.userInput = ""
        }
    }
}
</script>
<style scoped>
.v-text-field{
    width: 100%;
    border-radius: 30px;
    box-sizing: border-box;
    flex: 1 1 auto;
    width: inherit;
    min-width: 0;
    min-height: 20px;
    font-size: 15px;
    font-weight: 400;
}

.v-text-field >>> svg{
    height: 24px !important;
    width: 24px !important;
}

.v-text-field >>>.v-input__slot{
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.chat-bottom-nav {
    width: 100%;
    height: auto;
    align-items: center;
}
</style>