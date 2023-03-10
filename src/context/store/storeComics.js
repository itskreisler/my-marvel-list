import { create } from 'zustand'
import { stateApiMarvel } from '../../services/marvel.api'
import { requestUrlMarvel } from '../../helpers/config'
import { toast } from 'react-toastify'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useComicsStore = create((set, get) => ({
  query: '',
  comics: [],
  loading: false,
  error: null,
  setQuery: async (q) => {
    set(state => ({ query: q, loading: true, error: null }))
    try {
      const response = await (await fetch(requestUrlMarvel('/comics', { titleStartsWith: q }))).json()
      set(state => ({
        ...state,
        comics: response.data.results
      }))
      useComicsCache.getState().addComics()
    } catch (error) {
      toast(error.message)
    } finally {
      set({ loading: false })
    }
  },
  fetchComics: () => {
    const [responde, loading, error] = stateApiMarvel(
      requestUrlMarvel('/comics', { titleStartsWith: get().query })
    )
    set({ comics: responde, loading, error })
  },
  deleteEverything: () => set({}, true)
}))

// cached commics
export const useComicsCache = create(
  persist(
    (set, get) => ({
      comics: [],
      addComics: () => {
        if (get().comics.length === 0) {
          const temp = useComicsStore.getState().comics
          set({ comics: [...get().comics, ...temp] })
        }
        const arr1 = get().comics
        const arr2 = useComicsStore.getState().comics
        const map = {}

        const combined = arr1.concat(arr2)

        combined.forEach(obj => {
          if (map[obj.id]) {
            Object.assign(map[obj.id], obj)
          } else {
            map[obj.id] = obj
          }
        })
        const result = Object.values(map)
        set({ comics: result })
      }
    }),
    {
      name: 'marvel:cache', // unique name
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
)
