import React from 'react'
import { HashRouter as Router, Routes } from 'react-router-dom'
import { TagAppContext } from './context/AppContext'
import appPages from './pages/Paths'
import TagMenu from './components/TagMenu'
import TagFooter from './components/TagFooter'
function App () {
  return (
    <Router>
      <TagAppContext>
          <TagMenu/>
          <Routes>{appPages()}</Routes>
          <TagFooter/>
      </TagAppContext>
    </Router>
  )
}

export default App
