<template>
    <div class="header">
        <v-list-item>
            <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>
                    mdi-account
                </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{contactName}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>

<script>
export default {
    computed: {
        contactName() {
            return this.$store.getters.contactSelectedName
        }
    }
}
</script>

<style>
.header {
    font-size: 1.5em;
    font-weight: 500;
    padding: 10px;
    background: #F0F0F0 !important;
}
</style>