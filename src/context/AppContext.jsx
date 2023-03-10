/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useProfiles } from './store/useProfiles'
import { useFavoritos } from './store/useFavoritos'

const AppContext = createContext({
  accounts: {
    profiles: [],
    saveProfile: () => {},
    deleteProfile: () => {},
    activeProfile: () => {},
    getActiveProfile: () => {}
  },
  favoritos: {
    saveFavorito: () => {}
  }
})

export const TagAppContext = ({ children }) => {
  const stateProfile = useProfiles()
  const stateFavoritos = useFavoritos()
  return (
    <AppContext.Provider
      value={{
        accounts: stateProfile,
        favoritos: stateFavoritos
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
