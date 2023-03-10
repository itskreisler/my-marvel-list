import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { Alert, Container, Col, Row } from 'react-bootstrap'
import { PATHS } from '../Paths'
// TODO: hacer la pagina de favoritos
const PageFavoritos = () => {
  const {
    accounts: { getActiveProfile },
    favoritos: { checkFavorite }
  } = useAppContext()
  const { identificacion } = getActiveProfile()
  const [existe, data] = checkFavorite(identificacion)
  return (
    <Container className="mt-lg-3">
      <Row>
        <Col>
          {existe && data && data.favoritos.length > 0
            ? (
            <>{data.favoritos.map(i => (<li>{i}</li>))}</>
              )
            : (
            <Alert variant="purple">
              No hay favoritos en este perfil,{' '}
              <Link to={PATHS.URL_SIGN_UP.path}>registra</Link> un perfil y
              guarda un comic que te guste.
            </Alert>
              )}
        </Col>
      </Row>
    </Container>
  )
}

export default PageFavoritos
