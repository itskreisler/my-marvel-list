/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useProfiles } from './store/useProfiles'

const AppContext = createContext({ accounts: { profiles: [], saveProfile: () => {}, deleteProfile: () => {} } })

export const TagAppContext = ({ children }) => {
  const stateProfile = useProfiles()
  return (
    <AppContext.Provider
      value={{
        accounts: stateProfile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
