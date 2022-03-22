<template>
  <b-card title="Log In" class="shadow login mt-5 p-3">
    <b-card-text>
      <label for="email" class="mt-3">Email</label>
      <b-form-input v-model="username" id="email" type="text" placeholder="me@example.com" class="mt-2"> </b-form-input>

      <label for="password" class="mt-3">Password</label>
      <b-form-input id="password" type="password" placeholder="*******" class="mt-2"></b-form-input>
    </b-card-text>
    <div class="d-flex justify-content-end">
      <b-button variant="primary" @click="login">Log In</b-button>
    </div>
  </b-card>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Client from "@/Client"
import { store } from "@/store/store"

export default defineComponent({
  data() {
    return {
      username: "vili" as string,
      password: "SuperCat11" as string,
    }
  },
  methods: {
    async login(): Promise<void> {
      await Client.login(this.username, this.password)
        .then(resp => {
          store.commit("login", resp)

          this.$notify({
            title: "Success",
            text: "You have successfully logged in!",
            type: "success",
          })
        })
        .catch(e => {
          this.$notify({
            title: "Error",
            text: e,
            type: "error",
          })
        })
    },
  },
})
</script>

<style lang="scss" scoped>
.login {
  max-width: 25rem;
  margin: 0 auto;
}
</style>
