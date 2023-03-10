import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import TagBannerQuote from '../../../components/TagBannerQuote'
import TagTableAccounts from '../../../components/TagTableAccounts'
import AlertSingIn from '../../../components/alerts/AlertSingIn'
const PageSingIn = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-lg-3">
            <Row>
              <Col xl={6}>
                <Card className="mb-3">
                  <Card.Header>Perfiles</Card.Header>
                  <Card.Body>
                    <AlertSingIn />
                    <TagTableAccounts />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={6}>
                <TagBannerQuote />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PageSingIn
