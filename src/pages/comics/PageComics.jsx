import React from 'react'
import { stateApiMarvelComics } from '../../services/marvel.api'
import { toast } from 'react-toastify'
import TagCardComic from '../../components/TagCardComic'
import { Container, Row, Col } from 'react-bootstrap'
const PageComics = () => {
  const stateMarvelComics = stateApiMarvelComics()
  const [comics, setComics] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    setComics(stateMarvelComics.value?.data.results || [])
    setLoading(stateMarvelComics.loading)
    if (typeof stateMarvelComics.error?.message !== 'undefined') {
      toast(stateMarvelComics.error?.message, { type: 'error' })
    }
  }, [stateMarvelComics])
  return (
      <Container className='mt-lg-3'>
        {/* {loading && <li>Loading...</li>} */}
        {/* {comics.map((comic, i) => (<li key={i}>{comic.title}</li>))} */}
        <Row>
        {comics.map((comic, i) => (<Col className='mb-3' lg={6} xl={4} key={i}><TagCardComic {...comic}/></Col>))}
        </Row>
      </Container>
  )
}

export default PageComics
