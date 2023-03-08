import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import { TagAppContext } from './context/AppContext'
import appPages from './pages/Paths'
function App () {
  return (
    <Router>
      <TagAppContext>
          {/* <Menu /> */}
          <Routes>{appPages()}</Routes>
      </TagAppContext>
    </Router>
  )
}

export default App
