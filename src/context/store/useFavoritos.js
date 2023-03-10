import { useLocalStorage } from '../../hooks/use-local-storage'
export const useFavoritos = () => {
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
    const newFavoritos = favoritos.map((fav) => {
      if (fav.perfil === perfil) {
        if (fav.favoritos.includes(favorito)) {
          const tempFav = fav.favoritos.filter((item) => item !== favorito)
          return { ...fav, favoritos: tempFav }
        }
        return { ...fav, favoritos: [...fav.favoritos, favorito] }
      }
      return fav
    })
    setFavoritos(newFavoritos)
  }
  const checkFavorite = (perfil, favorito = null) => {
    if (!favorito) {
      const fav = favoritos.find((fav) => fav.perfil === perfil)
      return [!!fav, fav]
    }
    const fav = favoritos.find((fav) => fav.perfil === perfil && fav.favoritos.includes(favorito))
    return [!!fav, fav]
  }
  return { favoritos, setFavoritos, saveFavorito, checkFavorite }
}
