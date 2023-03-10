import React, { useRef } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'
import { toast } from 'react-toastify'
import { PATHS } from '../../Paths'
import TagBannerQuote from '../../../components/TagBannerQuote'

const PageSingUp = () => {
  const formRegister = useRef(null)
  const { register, handleSubmit } = useForm({ defaultValues: { nombre: 'Kreisler', identificacion: '123', correoElectronico: 'temp@hotmail.com' } })
  const { accounts: { saveProfile } } = useAppContext()
  const onSubmit = (data) => {
    const ifSaved = saveProfile(data)
    if (ifSaved) {
      toast('Perfil guardado')
      formRegister.current.reset()
    } else {
      toast('Error al guardar el perfil')
    }
  }
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-lg-3">
            <Row>
              <Col xl={6}>
                <Card className="border-0">
                  <Card.Body>
                    <Form ref={formRegister} onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="forIdNombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" autoComplete="off" required {...register('nombre')} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="forIdIdentificacion">
                        <Form.Label>Identificación:</Form.Label>
                        <Form.Control type="number" autoComplete='off' placeholder="12345678" required {...register('identificacion')} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="forIdCorreoElectronico">
                        <Form.Label>Correo Electrónico:</Form.Label>
                        <Form.Control type="email" autoComplete='off' required {...register('correoElectronico')} />
                      </Form.Group>
                      <Row className="justify-content-center text mb-3">
                        <Col xl="6">
                          <Button
                            type="submit"
                            className="w-100"
                            variant="outline-mml"
                          >
                            Crear perfil
                          </Button>
                        </Col>
                      </Row>
                      <Form.Text>
                        Ya tienes un perfil? <Link to={PATHS.URL_SIGN_IN.path}>Inicia sesión</Link>
                      </Form.Text>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={6}>
                <TagBannerQuote/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PageSingUp
