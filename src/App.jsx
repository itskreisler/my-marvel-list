import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { TagAppContext } from './context/AppContext'
import appPages from './pages/Paths'
import TagMenu from './components/TagMenu'
function App () {
  return (
    <Router>
      <TagAppContext>
          <TagMenu/>
          <Routes>{appPages()}</Routes>
      </TagAppContext>
    </Router>
  )
}

export default App
