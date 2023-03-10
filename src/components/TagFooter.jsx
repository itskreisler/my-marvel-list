import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const TagFooter = () => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col>
          <footer className="text-center rounded p-3">
            Made with ❤️ by&nbsp;
            <a
              className="text-muted"
              href="https://github.com/itskreisler/my-marvel-list"
              target="_blank"
              rel="noreferrer"
            >
              Kreisler
            </a>
          </footer>
        </Col>
      </Row>
    </Container>
  )
}

export default TagFooter
