import { useLocalStorage } from '@/hooks/use-local-storage'
export const useProfiles = () => {
  const [profiles, setProfiles] = useLocalStorage('marvel:profiles', [])

  /** Funcion para guardar el perfil con el nombre, identicacion y correo, se comprueba si ya exite la identenficacion */
  const saveProfile = ({ nombre, identificacion, correoElectronico }) => {
    if (profiles.find((profile) => profile.identificacion === identificacion.trim())) {
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
    setProfiles(newProfiles)
  }

  return { profiles, saveProfile, deleteProfile }
}
