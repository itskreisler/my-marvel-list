import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/index'
import PageComics from './comics/PageComics'
import PageSingUp from './sign/up/PageSingUp'
const pathTitle = ([path, title, url]) => ({ path, title, url })
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_COMICS: pathTitle(['/comics', 'Comics']),
  URL_COMIC_ID: pathTitle(['/comic/:id', 'Comic', '/comic/']),
  URL_FAVORITES: pathTitle(['/favorites', 'Favoritos']),
  URL_SIGN_UP: pathTitle(['/sign-up', 'Registrarse']),
  URL_SIGN_IN: pathTitle(['/sign-in', 'Ingresar'])
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
  },
  {
    title: PATHS.URL_SIGN_UP.title,
    url: PATHS.URL_SIGN_UP.path,
    Component: () => <PageSingUp/>
  },
  {
    title: PATHS.URL_SIGN_IN.title,
    url: PATHS.URL_SIGN_IN.path,
    Component: () => <div>PageSingIn</div>
  }
]

const tagAppPages = () => appPages.map(({ url, Component }, index) => (
    <Route key={index} path={url} exact={true} element={<Component />} />
))

export default tagAppPages
