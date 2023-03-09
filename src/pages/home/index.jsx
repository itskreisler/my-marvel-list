import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AlertHome from '../../components/alerts/AlertHome'

const index = () => {
  return (
    <Container>
      <Row>
        <Col>
        <AlertHome />
        </Col>
      </Row>
    </Container>
  )
}

export default index
