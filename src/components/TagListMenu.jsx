import React from 'react'
import { appPages } from '../pages/Paths'
import { useLocation, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const TagListMenu = () => {
  const { pathname } = useLocation()
  return appPages.map(({ url, title }, index) => {
    return (
      !url.includes(':') && !url.includes('dashboard') && (
          <Nav.Link active={pathname === url} as='span' key={index}>
            <Link to={url} className="h5 text-decoration-none">{title}</Link>
          </Nav.Link>
      )
    )
  })
}
export default TagListMenu
