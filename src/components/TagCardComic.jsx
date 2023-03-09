/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Col, Row, InputGroup, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const TagCardComic = ({ title, thumbnail, format, prices, description }) => {
  const { price } = prices.find((price) => price.type === 'printPrice')
  return (
    <Card className="shadow-sm vh-lg-100 card-mml">
      <Card.Header className="text-ellipsis" title={title}>
        {title}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4}>
            <Card.Img
              height={150}
              className="object-fit-cover border object-position-left rounded"
              variant="top"
              lazy="loading"
              src={thumbnail.path.concat('.', thumbnail.extension)}
            />
          </Col>
          <Col xs={8}>
            <Card.Text><strong>Titulo:</strong> {title}</Card.Text>
            <Card.Text>
            {format && (
              <>
                Formato: <Badge bg="info">{format}</Badge>
              </>
            )}
            </Card.Text>
            Precio:{' '}
            <Badge bg={price > 0 ? 'purple' : 'success'}>{price > 0 ? price : 'free'}</Badge>
            <hr />
            <InputGroup className="mb-3">
              <Button size="sm" variant="outline-purple">
                Guardar <i className="fa-regular fa-heart"></i>
              </Button>
              <Link to="/comics" className="btn btn-sm btn-outline-mml">
                Ver <i className="fa-regular fa-eye"></i>
              </Link>
            </InputGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TagCardComic
