import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import TagListMenu from './TagListMenu'
import { PATHS } from '../pages/Paths'
import { useRouter } from '../hooks/use-router'
import { useAppContext } from '../context/AppContext'
import TagBreadcrumbMenu from './TagBreadcrumbMenu'

const TagMenu = () => {
  const { push } = useRouter()
  const handleClickHome = () => push(PATHS.URL_DEFAULT.path)
  const { accounts: { getActiveProfile } } = useAppContext()
  const { nombre } = getActiveProfile()
  return (
    <>
      <Navbar bg="" className='shadow-sm' expand="lg" collapseOnSelect={true}>
        <Container>
          <Navbar.Brand className='cursor-pointer' onClick={handleClickHome}>
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
              {nombre && (<>Perfil: <strong>{nombre}</strong></>)}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TagBreadcrumbMenu />
    </>
  )
}

export default TagMenu
