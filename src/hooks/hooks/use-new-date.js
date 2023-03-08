import { useState, useEffect } from 'react'
/**
 * Devuelve una nueva fecha cada segundo.
 * @returns una matriz con un solo elemento, la fecha actual.
 */
const useNewDate = () => {
  const [hora, setHora] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setHora(new Date())
    }, 1000)
  }, [])
  return [hora]
}
const useDateTime = () => {
  const [locale] = useNewDate()
  return {
    fecha: locale.toLocaleDateString(),
    hora: locale.toLocaleTimeString(),
    fechaHora: locale.toLocaleString()
  }
}
const useJsonStringDateTime = () => {
  return JSON.stringify(
    useDateTime(),
    null,
    2
  )
}
export { useNewDate, useDateTime, useJsonStringDateTime }
