import { useEffect } from 'react'
import { appPages } from '../pages/Paths'
import { useTitle } from 'react-use'
import { useCurrentPath } from '../hooks/use-current-path'
import { titleWebSite } from '../helpers/config'
import { useRouter } from './use-router'

/**
 * Es un hook personalizado actualiza el título de la página en función de la ruta actual.
 * @returns The titleSite object.
 */
export const useUpdateTitle = () => {
  const { push, location } = useRouter()
  const titleSite = appPages.find(
    ({ url, title }) => useCurrentPath(url, location) && { title }
  )
  useTitle(`${titleWebSite} | ${titleSite?.title}`)
  useEffect(() => {
    !titleSite && push('/')
  }, [titleSite])

  return [titleSite]
}
