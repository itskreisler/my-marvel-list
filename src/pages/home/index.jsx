import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TagSearchComics from '../../components/TagSearchComics'
import TagCardComic from '../../components/TagCardComic'

const index = () => {
  return (
    <Container>
      <TagSearchComics/>
      <Row>
        <Col lg={4}>
        <TagCardComic/>
        </Col>
      </Row>
    </Container>
  )
}

export default index
