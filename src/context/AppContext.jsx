/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export const TagAppContext = ({ children }) => {
  const [favoriteComics, setFavoriteComics] = useState([])
  const [profiles, setProfiles] = useState([])
  return (
    <AppContext.Provider
      value={{
        favorites: { favoriteComics, setFavoriteComics },
        accounts: { profiles, setProfiles }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
