import React from 'react'

function App () {
  return (
    <pre>{JSON.stringify(process.env.NODE_ENV, null, 2)} </pre>
  )
}

export default App
