/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const TagButtonComic = ({ id }) => {
  const { accounts: { getActiveProfile }, favoritos: { saveFavorito, checkFavorite } } = useAppContext()
  const { identificacion } = getActiveProfile()
  const [exiteYlogueado] = checkFavorite(identificacion, Number(id))
  const handleClick = () => {
    if (typeof identificacion === 'undefined') return toast('No hay perfil activo, registra uno, y luego activalo en Menu>Perfiles!')
    saveFavorito(identificacion, Number(id))
  }
  return (
    <Button onClick={handleClick} size="sm" variant='purple'>
    {exiteYlogueado ? 'Eliminar' : 'Guardar'} <i className={`fa-regular fa-heart ${exiteYlogueado && 'fa-solid'}`}></i>
</Button>
  )
}

export default TagButtonComic
