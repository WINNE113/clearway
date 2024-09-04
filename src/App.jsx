import { useState } from 'react'
import path from './ultils/path'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/public/Layout'
import Home from './pages/public/Home'

function App() {

  return (
    <Routes>
      <Route>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
