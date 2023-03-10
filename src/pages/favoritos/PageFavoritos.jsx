import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { Alert, Container, Col, Row } from 'react-bootstrap'
import { PATHS } from '../Paths'
import { useComicsCache } from '../../context/store/storeComics'
import TagCardComic from './../../components/TagCardComic'
// TODO: hacer la pagina de favoritos
const PageFavoritos = () => {
  const {
    accounts: { getActiveProfile },
    favoritos: { checkFavorite }
  } = useAppContext()
  const { identificacion } = getActiveProfile()
  const [existe, data] = checkFavorite(identificacion)
  const cache = useComicsCache().comics
  const comics =
    data?.favoritos.map((item) => cache.find((el) => el.id === item)) || []
  return (
    <Container className="mt-lg-3">
      <Row>
        {existe && data && data.favoritos.length > 0
          ? (
              comics.map((comic, i) => (
            <Col className="mb-3" lg={6} xl={4} key={i}>
              <TagCardComic {...comic} />
            </Col>
              ))
            )
          : (
          <Alert variant="purple">
            No hay favoritos en este perfil,{' '}
            <Link to={PATHS.URL_SIGN_UP.path}>registra</Link> un <Link to={PATHS.URL_SIGN_IN.path}>perfil</Link> luego activalo, <Link to={PATHS.URL_COMICS.path}>busca
            un comic</Link> y guarda uno de tu preferencia.
          </Alert>
            )}
      </Row>
    </Container>
  )
}

export default PageFavoritos
