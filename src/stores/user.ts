import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const password = ref('')
  const nickname = ref('Nope')
  const isLoggedIn = ref(false)

  return {
    username,
    password,
    nickname,
    isLoggedIn,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
