import React from 'react'
import { stateApiMarvelComics } from '../../services/marvel.api'
import { toast } from 'react-toastify'

const PageComics = () => {
  const stateMarvelComics = stateApiMarvelComics()
  const [comics, setComics] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    try {
      setComics(stateMarvelComics.value?.data.results || [])
    } catch (error) {
      toast(stateMarvelComics.error?.message, { type: 'error' })
    } finally {
      setLoading(stateMarvelComics.loading)
    }
  }, [stateMarvelComics])
  return (

      <ul>
        {loading && <li>Loading...</li>}
        {comics.map((comic, i) => (<li key={i}>{comic.title}</li>))}
      </ul>
  )
}

export default PageComics
