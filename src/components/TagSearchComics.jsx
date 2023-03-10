import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useTypingEffect } from '../hooks/use-typing-effect'
import { marvelCharactersList } from '../helpers/config'

const TagSearchComics = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const [text] = useTypingEffect(marvelCharactersList)
  return (
      <Row className='justify-content-center'>
        <Col lg={8}>
          <Form className='mt-lg-5' onSubmit={handleSubmit(onSubmit)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={'Ex: ' + text}
              aria-label=""
              aria-describedby="titleHelp"
              required
              {...register('title', { required: true })}
            />
            <Button type='submit' variant="outline-mml">
              Buscar
            </Button>
          </InputGroup>
          </Form>
        </Col>
      </Row>
  )
}

export default TagSearchComics
