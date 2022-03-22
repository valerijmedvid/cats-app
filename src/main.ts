import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import BootstrapVue3 from "bootstrap-vue-3"
import Notifications from "@kyvg/vue3-notification"

import { store } from "./store/store"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(Notifications)
app.use(store)

app.mount("#app")
