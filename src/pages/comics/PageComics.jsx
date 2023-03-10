import React, { useState } from 'react'
import { stateApiMarvel } from '../../services/marvel.api'
import { toast } from 'react-toastify'
import TagCardComic from '../../components/TagCardComic'
import { Container, Row, Col } from 'react-bootstrap'
import { requestUrlMarvel } from '../../helpers/config'
import PlaceholderCardComic from '../../components/placeholders/PlaceholderCardComic'
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
      <Row>
        {loading &&
          Array.from({ length: 6 }).map((_, idx) => (
            <Col className="mb-3" lg={6} xl={4} key={idx}>
              <PlaceholderCardComic />
            </Col>
          ))}
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
