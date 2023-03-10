import { useLocalStorage } from '@/hooks/use-local-storage'
export const useProfiles = () => {
  const [profiles, setProfiles] = useLocalStorage('marvel:profiles', [])
  const [favoritos, setFavoritos] = useLocalStorage('marvel:favoritos', [])

  /** Funcion para guardar el perfil con el nombre, identicacion y correo, se comprueba si ya exite la identenficacion */
  const saveProfile = ({ nombre, identificacion, correoElectronico }) => {
    if (
      profiles.find(
        (profile) =>
          profile.identificacion === identificacion.trim() ||
          profile.correoElectronico === correoElectronico.trim()
      )
    ) {
      return false
    }
    setProfiles([
      ...profiles,
      {
        nombre: nombre.trim(),
        identificacion: identificacion.trim(),
        correoElectronico: correoElectronico.trim(),
        active: false
      }
    ])
    return true
  }

  const deleteProfile = (identificacion) => {
    const newProfiles = profiles.filter(
      (profile) => profile.identificacion !== identificacion
    )
    const newFavoritos = favoritos.filter(
      (favorito) => favorito.perfil !== identificacion
    )
    setFavoritos(newFavoritos)
    setProfiles(newProfiles)
  }

  const activeProfile = (identificacion) => {
    const newProfiles = profiles.map((profile) => {
      if (profile.identificacion === identificacion) {
        return { ...profile, active: !profile.active }
      }
      return { ...profile, active: false }
    })
    setProfiles(newProfiles)
  }

  const getActiveProfile = () => profiles.find((profile) => profile.active) || {}

  return { profiles, setProfiles, saveProfile, deleteProfile, activeProfile, getActiveProfile }
}
