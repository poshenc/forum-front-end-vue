import Vue from 'vue'
import Vuex from 'vuex'

import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser() {
      try {
        const { data } = await usersAPI.getCurrentUSer()

        const { id, name, email, image, isAdmin } = data

        this.commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

      } catch (error) {
        console.log('error', error)
        console.log('cannot fetch current user info')
      }
    }
  },
  modules: {
  }
})
