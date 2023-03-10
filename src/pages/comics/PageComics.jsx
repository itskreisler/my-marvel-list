import React from 'react'
import TagCardComic from '../../components/TagCardComic'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import PlaceholderCardComic from '../../components/placeholders/PlaceholderCardComic'
import TagSearchComics from './../../components/TagSearchComics'
import { useComicsStore } from './../../context/store/storeComics'
import { shallow } from 'zustand/shallow'
const PageComics = () => {
  const { loading, comics } = useComicsStore((state) => ({
    comics: state.comics,
    query: state.query,
    loading: state.loading,
    error: state.error
  }), shallow)
  return (
    <Container className="mt-lg-3">
      <TagSearchComics loading={loading} />
      <Row>
      <Col lg={8} className='mx-auto'>
          {comics.length === 0 && !loading && (<Alert variant='purple'>Empieza por buscar un comics...</Alert>)}
        </Col>
      </Row>
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
