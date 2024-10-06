import { ref } from 'vue'
import router from '../router/index'

const isAuthenticated = ref(false)

export function useAuth() {
  const login = () => {
    isAuthenticated.value = true
    router.push({ name: 'Aoubt' })
  }

  const logout = () => {
    isAuthenticated.value = false
    router.push({ name: 'login' })
  }

  return { isAuthenticated, login, logout }
}
