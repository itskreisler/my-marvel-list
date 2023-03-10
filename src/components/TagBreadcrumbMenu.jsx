import React from 'react'
import { Container, Card, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PATHS } from './../pages/Paths'
import { titleWebSite } from './../helpers/config'
import { useUpdateTitle } from './../hooks/use-update-title'
import { useAppContext } from '../context/AppContext'

const TagBreadcrumbMenu = () => {
  const [stateTitle] = useUpdateTitle()
  const { breadcrumbId } = useAppContext()
  return (
    <Container className="d-lg-none">
      <Card className="my-3 border-0 shadow-sm">
        <Card.Body>
          <Breadcrumb className="m-0">
            <Breadcrumb.Item>
              <Link to={PATHS.URL_DEFAULT.path}>{titleWebSite}</Link>
            </Breadcrumb.Item>
            {breadcrumbId
              ? (
              <Breadcrumb.Item>
                <Link to={PATHS.URL_COMICS.path}>{PATHS.URL_COMICS.title}</Link>
              </Breadcrumb.Item>
                )
              : (
              <Breadcrumb.Item active>{stateTitle?.title}</Breadcrumb.Item>
                )}

            {breadcrumbId && (
              <Breadcrumb.Item active>{breadcrumbId}</Breadcrumb.Item>
            )}
          </Breadcrumb>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default TagBreadcrumbMenu
