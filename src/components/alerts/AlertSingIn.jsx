import React from 'react'
import { Alert } from 'react-bootstrap'
import { useAppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import { PATHS } from '../../pages/Paths'
const AlertSingIn = () => {
  const {
    accounts: { profiles }
  } = useAppContext()
  return (<Alert variant="purple">
  Aqui apareceran lo perfiles que has creado.
  {!profiles.length && (
    <>
      <hr />
      <p className="mb-0">
        Parece que no hay perfiles, empieza{' '}
        <Link to={PATHS.URL_SIGN_UP.path}>registrando</Link>{' '}
        uno.
      </p>
    </>
  )}
</Alert>
  )
}

export default AlertSingIn
