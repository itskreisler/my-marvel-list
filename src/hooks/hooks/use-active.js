import { useState, useRef, useEffect } from 'react'

/**
 * Devuelve una matriz con dos valores: el primero es un booleano que indica si el usuario está
 * activo o no, y el segundo es el momento en milisegundos que el usuario debe estar inactivo para el
 * booleano para cambiar a falso.
 *
 * La función toma un argumento, que es el tiempo en milisegundos que el usuario debe estar inactivo
 * Para que el booleano cambie a falso.El valor predeterminado es de 1000 milisegundos (1 segundo).
 *
 * La función utiliza el gancho USEsestate para crear una variable de estado llamada Active, que se establece inicialmente
 * a falso.También crea una variable de estado llamada TIempo, que se establece en el valor del tiempo
 * argumento.
 *
 * La función utiliza el gancho Useref para crear una variable REF llamada temporizador.
 *
 * La función utiliza el gancho UseeFectect para agregar oyentes de eventos al documento para los eventos en el
 * Array de eventos.Cuando se activa cualquiera de estos eventos, se llama a la función HandleEvent.
 * @param [time=1000] - El tiempo en milisegundos que el usuario debe estar inactivo antes de que la funcion
 * sevuelva falso.
 * @returns Una matriz con dos valores.
 */
const useActive = (time = 1000) => {
  const [active, setActive] = useState(false)
  const [tiempo] = useState(time)
  const timer = useRef()
  const events = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll']
  useEffect(() => {
    const handleEvent = () => {
      setActive(true)
      timer.current && window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setActive(false)
      }, time)
    }

    events.forEach((event) => document.addEventListener(event, handleEvent))
    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvent)
      )
    }
  }, [timer])

  return [active, tiempo]
}

export { useActive }
