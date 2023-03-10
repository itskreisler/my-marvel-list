import React from 'react'
import { Card } from 'react-bootstrap'
import { randomQuoteMarvel } from '../helpers/config'
const TagBannerQuote = () => {
  const { frase, autor } = randomQuoteMarvel()
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="./img/logo.png"
        className="card-img-blur"
        alt="img-logo"
      />
      <Card.ImgOverlay>
        <Card.Title>
          <p>{frase}</p>
          <span className="blockquote-footer text-white">
            <cite title="Source Title">{autor}</cite>
          </span>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  )
}

export default TagBannerQuote
