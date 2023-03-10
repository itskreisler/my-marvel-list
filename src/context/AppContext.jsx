/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useProfiles } from './store/useProfiles'
import { useFavoritos } from './store/useFavoritos'

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
  }
})

export const TagAppContext = ({ children }) => {
  const [breadcrumbId, setBreadcrumbId] = React.useState('')
  const stateProfile = useProfiles()
  const stateFavoritos = useFavoritos()
  return (
    <AppContext.Provider
      value={{
        breadcrumbId,
        setBreadcrumbId,
        accounts: stateProfile,
        favoritos: stateFavoritos
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
