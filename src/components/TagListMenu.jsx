import React from 'react'
import { appPages } from '../pages/Paths'
import { useLocation } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const TagListMenu = () => {
  const { pathname } = useLocation()
  return appPages.map(({ url, title }, index) => {
    return (
      !url.includes(':') && !url.includes('dashboard') && (
          <Nav.Link active={pathname === url} key={index} href={'#' + url}>
            <span className="h5 text-decoration-none">{title}</span>
          </Nav.Link>
      )
    )
  })
}
export default TagListMenu
