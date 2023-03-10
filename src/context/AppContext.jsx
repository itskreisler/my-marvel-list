/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useProfiles } from './store/useProfiles'
import { useFavoritos } from './store/useFavoritos'
import { useCache } from './store/useCache'

const AppContext = createContext({
  breadcrumbId: '',
  setBreadcrumbId: () => {},
  accounts: {
    profiles: [],
    saveProfile: () => {},
    deleteProfile: () => {},
    activeProfile: () => {},
    getActiveProfile: () => {}
  },
  favoritos: {
    favoritos: [],
    setFavoritos: () => {},
    saveFavorito: () => {},
    checkFavorite: () => {}
  },
  cache: {
    cache: [],
    setCache: () => {}
  }
})

export const TagAppContext = ({ children }) => {
  const [breadcrumbId, setBreadcrumbId] = React.useState('')
  const [comics, setComics] = React.useState([])
  const stateProfile = useProfiles()
  const stateFavoritos = useFavoritos()
  const stateCache = useCache()
  return (
    <AppContext.Provider
      value={{
        breadcrumbId,
        setBreadcrumbId,
        comics,
        setComics,
        accounts: stateProfile,
        favoritos: stateFavoritos,
        cache: stateCache
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
