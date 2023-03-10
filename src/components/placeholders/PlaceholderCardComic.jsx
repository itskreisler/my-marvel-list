import React from 'react'
import { Card, Placeholder, Row, Col } from 'react-bootstrap'

const PlaceholderCardComic = () => {
  const numberMinMax = (min = 1, max = 12) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <Card className='shadow-sm vh-lg-100 card-mml'>
      <Card.Header>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={numberMinMax()} />
        </Placeholder>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4}>
            <Card.Img
              height={150}
              className="object-fit-cover border object-position-left rounded"
              variant="top"
              lazy="loading"
              src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            />
          </Col>
          <Col xs={8}>
            <Card.Text as="div">
              <Placeholder as='p' animation="glow">
                <Placeholder xs={numberMinMax()} /> <Placeholder xs={numberMinMax()} /> <Placeholder xs={numberMinMax()} />&nbsp;
                <Placeholder xs={numberMinMax()} /> <Placeholder xs={numberMinMax()} />
              </Placeholder>
            </Card.Text>
            <hr />
            <Placeholder.Button variant="purple" xs={5} />
            <Placeholder.Button variant="mml" xs={5} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PlaceholderCardComic
