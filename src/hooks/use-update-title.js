import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { appPages } from '../pages/Paths'
import { useTitle } from 'react-use'
import { useCurrentPath } from '../hooks/use-current-path'
import { titleWebSite } from '../helpers/config'

/**
 * Es un hook personalizado actualiza el título de la página en función de la ruta actual.
 * @returns The titleSite object.
 */
export const useUpdateTitle = () => {
  const location = useLocation()
  const navigateTo = useNavigate()
  const titleSite = appPages.find(
    ({ url, title }) => useCurrentPath(url, location) && { title }
  )
  useTitle(`${titleWebSite} | ${titleSite?.title}`)
  useEffect(() => {
    !titleSite && navigateTo('/')
  }, [titleSite])

  return [titleSite]
}
