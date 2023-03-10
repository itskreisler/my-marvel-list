/* eslint-disable react/prop-types */
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { PATHS } from '../pages/Paths'
const TagButtonGroupComics = ({ id }) => {
  const { accounts: { getActiveProfile }, favoritos: { saveFavorito, checkFavorite } } = useAppContext()
  const { identificacion } = getActiveProfile()
  const [exiteYlogueado] = checkFavorite(identificacion, id)
  const handleClick = (id) => {
    if (typeof identificacion === 'undefined') return toast('No hay perfil activo, registra uno!')
    saveFavorito(identificacion, id)
  }
  return (

        <ButtonGroup className="mb-3">
            <Button onClick={() => handleClick(id)} size="sm" variant={exiteYlogueado ? 'purple' : 'outline-purple'}>
                {exiteYlogueado ? 'Eliminar' : 'Guardar'} <i className={`fa-regular fa-heart ${exiteYlogueado && 'fa-solid'}`}></i>
            </Button>
            <Link to={PATHS.URL_COMIC_ID.url + id} className="btn btn-sm btn-outline-mml">
                Ver <i className="fa-regular fa-eye"></i>
            </Link>
        </ButtonGroup>
  )
}

export default TagButtonGroupComics
