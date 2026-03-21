import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueClipboard)
})