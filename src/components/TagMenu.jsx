import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Breadcrumb, Card } from 'react-bootstrap'
import TagListMenu from './TagListMenu'
import { useUpdateTitle } from '../hooks/use-update-title'
import { titleWebSite } from '../helpers/config'
const TagMenu = () => {
  const [temp] = useUpdateTitle()
  return (
    <>
      <Navbar bg="" className='shadow-sm' expand="lg" collapseOnSelect={true}>
        <Container>
          <Navbar.Brand href="#/">
            <img
              src='./img/icon.png'
              width="50"
              height="50"
              className="d-inline-block align-top object-fit-contain rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <TagListMenu />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Show me by: <strong>{'correo'}</strong>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-lg-none">
        <Card className='my-3 border-0 shadow-sm'>
          <Card.Body>
            <Breadcrumb className='m-0'>
              <Breadcrumb.Item active>
                <Link to='/'>{titleWebSite}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{temp?.title}</Breadcrumb.Item>
            </Breadcrumb>
          </Card.Body>
        </Card>

      </Container>
    </>
  )
}

export default TagMenu
