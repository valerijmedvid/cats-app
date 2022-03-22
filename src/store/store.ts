import { createStore } from "vuex"

const user = JSON.parse(localStorage.getItem("cats_user") || "{}")

export const store = createStore({
  state() {
    return {
      token: user.token,
      expiresIn: user.expiresIn,
    }
  },
  mutations: {
    login(state, user_token) {
      const now = new Date()
      const expire = now.setSeconds(user_token.expires_in)

      state.token = user_token.access_token
      state.expiresIn = expire

      localStorage.setItem(
        "cats_user",
        JSON.stringify({ token: `Bearer ${user_token.access_token}`, expiresIn: expire })
      )
    },
    logout(state) {
      state.token = ""
      state.expiresIn = ""

      localStorage.removeItem("cats_user")
    },
  },
  getters: {
    isLogged(state) {
      const now = new Date()
      return state.expiresIn > now
    },
  },
})
