import React from 'react'
import { appPages } from '../pages/Paths'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const TagListMenu = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigate()

  return appPages.map(({ url, title }, index) => {
    const handleCLickLinkTo = () => navigateTo(url)
    return (
      !url.includes(':') && !url.includes('dashboard') && (
          <Nav.Link active={pathname === url} key={index} href={'#' + url} onClick={handleCLickLinkTo}>
            <span className="h5 text-decoration-none">{title}</span>
          </Nav.Link>
      )
    )
  })
}
export default TagListMenu
