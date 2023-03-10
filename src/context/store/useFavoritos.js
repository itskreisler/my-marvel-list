import { useLocalStorage } from '../../hooks/use-local-storage'
import { toast } from 'react-toastify'
export const useFavoritos = () => {
  let saved
  const [favoritos, setFavoritos] = useLocalStorage('marvel:favoritos', [])

  /** funcion para guardar un favorito de un perfil y si ya esta removerlo */
  const saveFavorito = (perfil, favorito) => {
    // si no hay nada se crea la estructura base de los favoritos
    if (!favoritos.length) {
      return setFavoritos(state => {
        const favoritos = []
        favoritos.push(favorito)
        return [...state, { perfil, favoritos }]
      })
    }
    // si no existe el perfil se crea
    const perfilExist = favoritos.find((fav) => fav.perfil === perfil)
    if (typeof perfilExist === 'undefined') {
      return setFavoritos([...favoritos, { perfil, favoritos: [favorito] }])
    }

    // si exite el perfil lo modifica
    saved = false
    const newFavoritos = favoritos.map((fav) => {
      if (fav.perfil === perfil) {
        if (fav.favoritos.includes(favorito)) {
          const tempFav = fav.favoritos.filter((item) => item !== favorito)
          saved = true
          return { ...fav, favoritos: tempFav }
        }
        return { ...fav, favoritos: [...fav.favoritos, favorito] }
      }
      return fav
    })
    if (saved) {
      toast('Eliminado de favoritos')
    } else {
      toast('Agregado a favoritos')
    }
    setFavoritos(newFavoritos)
  }
  /** funcion para eleminar un perfil */
  const deletePerfilFavoritos = (perfil) => {
    const newFavoritos = favoritos.filter((fav) => fav.perfil !== perfil)
    setFavoritos(newFavoritos)
  }

  /** funcion para verificar si un favorito existe */
  const checkFavorite = (perfil, favorito = null) => {
    if (!favorito) {
      const fav = favoritos.find((fav) => fav.perfil === perfil)
      return [!!fav, fav]
    }
    const fav = favoritos.find((fav) => fav.perfil === perfil && fav.favoritos.includes(favorito))
    return [!!fav, fav]
  }
  return { favoritos, setFavoritos, saveFavorito, checkFavorite, deletePerfilFavoritos }
}
