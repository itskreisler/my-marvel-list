import { create } from 'zustand'
import { stateApiMarvel } from '../../services/marvel.api'
import { requestUrlMarvel } from '../../helpers/config'
import { toast } from 'react-toastify'

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
