/* eslint-disable react/prop-types */
import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
const TagButtonComic = ({ id }) => {
  const { accounts: { getActiveProfile }, favoritos: { saveFavorito, checkFavorite } } = useAppContext()
  const { identificacion } = getActiveProfile()
  const exiteYlogueado = checkFavorite(identificacion, id)
  const handleClick = (id) => {
    if (typeof identificacion === 'undefined') return toast('No hay perfil activo')
    saveFavorito(identificacion, id)
  }
  return (

        <InputGroup className="mb-3">
            <Button onClick={() => handleClick(id)} size="sm" variant={exiteYlogueado ? 'purple' : 'outline-purple'}>
                {exiteYlogueado ? 'Eliminar' : 'Guardar'} <i className="fa-regular fa-heart"></i>
            </Button>
            <Link to="/comics" className="btn btn-sm btn-outline-mml">
                Ver <i className="fa-regular fa-eye"></i>
            </Link>
        </InputGroup>
  )
}

export default TagButtonComic
