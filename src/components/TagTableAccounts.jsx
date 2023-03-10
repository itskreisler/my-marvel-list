import React from 'react'
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'

const TagTableAccounts = () => {
  const {
    accounts: { profiles, activeProfile }
  } = useAppContext()
  const handleCLick = (id) => activeProfile(id)
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
