import React from 'react'
import { Alert } from 'react-bootstrap'
import { titleWebSite } from '../../helpers/config'

const AlertHome = () => {
  return (
    <>
      <Alert className="my-lg-3" variant="success">
        <Alert.Heading>¿Qué es {titleWebSite}?</Alert.Heading>
        <p className="text-justify">
          ¡Saludos, fanáticos de los <strong>cómics!</strong> Les presento&nbsp;
          <strong>{titleWebSite}</strong>: un sitio web de registro y gestión de
          perfiles para los amantes de cómics. Aquí podrán registrar su
          información personal, como nombre, identificación y correo
          electrónico, para que puedan explorar nuestro amplio catálogo de
          cómics y tener acceso a todas las imágenes y detalles relevantes de
          cada uno. <strong>¿No saben por dónde empezar?</strong> ¡No hay
          problema! Los usuarios pueden crear su&nbsp;
          <strong>propia lista personalizada</strong> de cómics favoritos para
          tenerlos a mano en todo momento. Pero lo mejor de todo es que la
          información de los usuarios y sus preferencias se guarda
          permanentemente, para que puedan disfrutar de sus cómics favoritos
          siempre que lo deseen. En resumen, nuestro proyecto está diseñado para
          hacer que los amantes de los cómics sonrían y se diviertan mientras
          exploran nuestra impresionante colección. ¡A disfrutar!
        </p>
        <hr />
        <p className="mb-0">
          ¡Gracias por visitar <strong>{titleWebSite}</strong>!
        </p>
      </Alert>
      <Alert className="my-lg-3" variant="mml">
        <Alert.Heading>¿Qué hago ahora?</Alert.Heading>
        <p className="text-justify">
          Muy facil, accede al menú en la parte superior, y navega por el sitio,
          puedes buscar un comic en <strong>Menu&gt;Comics</strong> pero si quieres crear tu
          lista de comics primero registrar un perfil en <strong>Menu&gt;Registrarse</strong> y luego activalo en&nbsp;
          <strong>Menu&gt;Perfiles</strong>
        </p>
      </Alert>
    </>
  )
}

export default AlertHome
