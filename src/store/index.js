import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contactSelected: 0,
        contacts: [
            {
                cpf: '1',
                name: "Macarquitos",
                status: "Status contato 1",
                messages: [
                    {
                        content: 'Teste contato 1',
                        messageOwner: 'Third',
                        time: '10:30'
                    },
                    {
                       content: 'Teste contato 1',
                       messageOwner: 'Third',
                       time: '10:30'
                    },
                    {
                       content: 'Teste contato 1',
                       messageOwner: 'User',
                       time: '10:31'
                    },
                ]
            },
            {
                cpf: '2',
                name: "Serjão Berranteiro",
                status: "Status contato 2",
                messages: [
                    {
                       content: 'Teste contato 2',
                       messageOwner: 'Third',
                       time: '10:30'
                    },
                    {
                       content: 'Teste contato 2',
                       messageOwner: 'User',
                       time: '10:31'
                    },
                    {
                       content: 'Teste contato 2',
                       messageOwner: 'Third',
                       time: '10:32'
                    }
                ]
            },
            {
                cpf: '3',
                name: "Luquitas",
                status: "Status contato 3",
                messages: [
                    {
                       content: 'Teste contato 3',
                       messageOwner: 'Third',
                       time: '10:30'
                    },
                    {
                       content: 'Teste contato 3',
                       messageOwner: 'User',
                       time: '10:31'
                    },
                    {
                        content: 'Teste contato 3',
                        messageOwner: 'User',
                        time: '10:31'
                    },
                    {
                        content: 'Teste contato 3',
                        messageOwner: 'Third',
                        time: '10:32'
                     },
                     {
                         content: 'Teste contato 3',
                         messageOwner: 'User',
                         time: '10:31'
                     }
                ]
            },
            {
                cpf: '3',
                name: "Tosito",
                status: "Status contato 4",
                messages: [
                    {
                       content: 'Teste contato 4',
                       messageOwner: 'Third',
                       time: '10:30'
                    },
                    {
                       content: 'Teste contato 4',
                       messageOwner: 'User',
                       time: '10:31'
                    },
                    {
                        content: 'Teste contato 4',
                        messageOwner: 'User',
                        time: '10:31'
                    },
                    {
                        content: 'Teste contato 4',
                        messageOwner: 'Third',
                        time: '10:32'
                     },
                     {
                         content: 'Teste contato 4',
                         messageOwner: 'User',
                         time: '10:31'
                     }
                ]
            }
        ]
    },
    getters: {
        contactMessages(state) {
            return state.contacts[state.contactSelected].messages
        },
        contactSelectedName(state) {
            return state.contacts[state.contactSelected].name
        }
    },
    mutations: {
        addMessage(state , message) {
            state.contacts[state.contactSelected].messages.push(message)
        }
    },
    actions: {
    },
    modules: {
    }
})
