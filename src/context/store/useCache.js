import { useLocalStorage } from '@/hooks/use-local-storage'
export const useCache = () => {
  const [cache, setCache] = useLocalStorage('marvel:cache', [])

  // guardar cache de la consultas de comics
  const saveCache = (comic) => {
    // comprobar si existe, si existe lo actualiza, si no exsite lo agreda

    setCache(state => [...state, comic])
  }

  return { cache, setCache }
}
