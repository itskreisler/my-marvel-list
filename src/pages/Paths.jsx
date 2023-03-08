import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/index'
import PageComics from './comics/PageComics'
const pathTitle = ([path, title]) => { return { path, title } }
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_COMICS: pathTitle(['/comics', 'Comics']),
  URL_COMIC_ID: pathTitle(['/comic/:id', 'Comic']),
  URL_FAVORITES: pathTitle(['/favorites', 'Favoritos'])
}
export const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: () => <Home></Home>
  },
  {
    title: PATHS.URL_COMICS.title,
    url: PATHS.URL_COMICS.path,
    Component: () => <PageComics></PageComics>
  }
]

const tagAppPages = () => appPages.map(({ url, Component }, index) => (
    <Route key={index} path={url} exact={true} element={<Component />} />
))

export default tagAppPages
