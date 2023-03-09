import React, { useState } from 'react'
import { stateApiMarvel } from '../../services/marvel.api'
import { toast } from 'react-toastify'
import TagCardComic from '../../components/TagCardComic'
import { Container, Row, Col } from 'react-bootstrap'
import { requestUrlMarvel } from '../../helpers/config'
const PageComics = () => {
  const [responde, loading, error] = stateApiMarvel(
    requestUrlMarvel('/comics')
  )
  const [comics, setComics] = useState([])
  React.useEffect(() => {
    setComics(responde?.data.results || [])
    if (typeof error?.message !== 'undefined') {
      toast(error?.message, { type: 'error' })
    }
  }, [loading])
  return (
    <Container className="mt-lg-3">
      {/* {loading && <li>Loading...</li>} */}
      {/* {comics.map((comic, i) => (<li key={i}>{comic.title}</li>))} */}
      <Row>
        {comics.map((comic, i) => (
          <Col className="mb-3" lg={6} xl={4} key={i}>
            <TagCardComic {...comic} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PageComics
