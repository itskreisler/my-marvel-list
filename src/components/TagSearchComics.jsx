import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useTypingEffect } from '../hooks/use-typing-effect'
const marvelCharacters = [
  'Iron Man',
  'Spider-Man',
  'Hulk',
  'Thor',
  'Captain America',
  'Black Widow',
  'Hawkeye',
  'Doctor Strange',
  'Wolverine',
  'Deadpool',
  'Black Panther',
  'Ant-Man',
  'Vision',
  'Scarlet Witch',
  'Quicksilver',
  'Groot',
  'Rocket Raccoon',
  'Gamora',
  'Star-Lord',
  'Drax',
  'Thanos',
  'Loki',
  'Nick Fury',
  'Winter Soldier',
  'Falcon',
  'War Machine',
  'Daredevil',
  'Jessica Jones',
  'Luke Cage',
  'Iron Fist',
  'Punisher'
]

const TagSearchComics = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const [text] = useTypingEffect(marvelCharacters)
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
