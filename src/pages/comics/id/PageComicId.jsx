import React from 'react'
import { useRouter } from '../../../hooks/use-router'
import { PATHS } from './../../Paths'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup
} from 'react-bootstrap'
import { requestUrlMarvel } from '../../../helpers/config'
import { stateApiMarvel } from '../../../services/marvel.api'
import { toast } from 'react-toastify'
import { useAppContext } from '../../../context/AppContext'
import TagButtonComic from '../../../components/TagButtonComic'
const PageComicId = () => {
  const {
    push,
    query: { id }
  } = useRouter()
  const { setBreadcrumbId } = useAppContext()
  /** Validar es un numero */
  if (isNaN(+id)) push(PATHS.URL_COMICS.path)
  const [responde, loading, error] = stateApiMarvel(
    requestUrlMarvel(PATHS.URL_COMICS.url + id)
  )
  const [comic, setComic] = React.useState({})

  /** Buscar el precio */
  const { price } = comic.prices?.find(
    (price) => price.type === 'printPrice'
  ) || { price: 0 }

  /** Buscar la url */
  const { url } = comic.urls?.find((url) => url.type === 'detail') || {
    url: ''
  }

  /** Buscar la fecha de publicacion y formatearla */
  const { date } = comic.dates?.find(date => date.type === 'onsaleDate') || { date: '' }
  const fecha = new Date(date)
  const fechaFormateada = fecha.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  React.useEffect(() => {
    setComic(responde?.data.results[0] || {})
    if (typeof error?.message !== 'undefined') {
      toast(error?.message, { type: 'error' })
    }
  }, [loading])
  React.useEffect(() => {
    setBreadcrumbId(id)
    return () => {
      setBreadcrumbId('')
    }
  }, [id])

  return (
    <Container className="mt-lg-3">
      <Row className="border rounded">
        <Col lg={6}>
          <Card className="border-0">
            <Card.Body>
              <h5>{comic.title}</h5>
              <p>{comic.description}</p>
              <h5 className="text-mml">MÁS DETALLES</h5>
              <Row>
                <Col xl={6}>
                  <strong className="text-danger">
                    Créditos e información:
                  </strong>
                  <p>
                    <strong>Published:</strong> {fechaFormateada}
                  </p>
                  <p>
                    <strong>Format:</strong> {comic.format || 'No disponible'}
                  </p>
                  <p>
                    <strong>Price:</strong> {price > 0 ? `$${price}` : 'free'}
                  </p>
                  <p>
                    <strong>UPC:</strong> {comic.upc}
                  </p>
                </Col>
                <Col xl={6}>
                  <strong className="text-danger">
                    Historia e Información del cover
                  </strong>
                  {comic.creators?.items.map(({ name, role }, idx) => (
                    <p key={idx}>
                      <strong className="text-capitalize">{role}:</strong>{' '}
                      {name}
                    </p>
                  ))}
                </Col>
                <Col xl={6}>
                  <ButtonGroup size='sm'>
                    <TagButtonComic id={id} />
                    <Button
                      as="a"
                      href={url}
                      target="_blank"
                      variant="outline-mml"
                      rel="noreferrer"
                    >
                      Ver en Marvel
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="bg-dark text-white">
            <Card.Img
              src={comic.thumbnail?.path.concat(
                '.',
                comic.thumbnail?.extension
              )}
              alt={comic.title}
            />
            <Card.ImgOverlay>
              <Card.Title className="text-end">
                <TagButtonComic id={id} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PageComicId
