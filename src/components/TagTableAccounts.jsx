import React from 'react'
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'

const TagTableAccounts = () => {
  const {
    accounts: { profiles, activeProfile, deleteProfile }
  } = useAppContext()
  const handleCLick = (id) => activeProfile(id)
  const handleCLickDelete = (id) => {
    if (typeof Swal !== 'undefined') {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: '¿Está seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, borrarlo!',
        cancelButtonText: '¡No, Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Su perfil ha sido eliminado.',
            'success'
          )
          deleteProfile(id)
        }
      })
    }
  }
  if (profiles.length === 0) return <h3>No hay perfiles</h3>
  return (
    <Table bordered responsive size="sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Identificacion</th>
          <th>Correo Electronico</th>
          <th>Perfil</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map(
          ({ nombre, identificacion, correoElectronico, active }, index) => (
            <tr key={index}>
              <td>{nombre}</td>
              <td>{identificacion}</td>
              <td>{correoElectronico}</td>
              <td className="text-center">
                <ButtonGroup size='sm'>
                <Button

                  variant={active ? 'danger' : 'success'}
                  onClick={() => handleCLick(identificacion)}
                >
                  {active ? 'Desactivar' : 'Activar'}
                </Button>
                <Button

                  variant='outline-mml'
                  onClick={() => handleCLickDelete(identificacion)}
                >
                  Eliminar
                </Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  )
}

export default TagTableAccounts
