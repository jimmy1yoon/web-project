import router from '@/router'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStore = new Vuex.Store({
    state: {
        userId: '',
        userName: '',
        token: ''
    },
    mutations: {
        login: function (state, payload) {
            state.userId = payload.userId
            state.userName = payload.userName
            state.token = payload.token
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
})

export default userStore