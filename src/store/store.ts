import { createStore } from "vuex"

const user = JSON.parse(localStorage.getItem("cats_user") || "{}")

interface Auth {
  token: string
  expiresIn: number | null
}

export const store = createStore({
  state(): Auth {
    return {
      token: user.token,
      expiresIn: user.expiresIn,
    }
  },
  mutations: {
    login(state: Auth, user_token) {
      const now = new Date()
      const expire = now.setSeconds(user_token.expires_in)

      state.token = user_token.access_token
      state.expiresIn = expire

      localStorage.setItem(
        "cats_user",
        JSON.stringify({ token: `Bearer ${user_token.access_token}`, expiresIn: expire })
      )
    },
    logout(state: Auth) {
      state.token = ""
      state.expiresIn = null

      localStorage.removeItem("cats_user")
    },
  },
  getters: {
    isLogged(state: Auth) {
      const now: number = +new Date()
      return state.expiresIn ? state.expiresIn > now : false
    },
  },
})
