import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores';

export default function useAuth() {
  const router = useRouter();
  const store = useAppStore();

  const logout = () => {
    store.logout()
    router.push('/start')
  }

  return {logout}
}