import { useState } from 'react'
import path from './ultils/path'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/public/Layout'
import Home from './pages/public/Home'
import Login from './pages/public/Login'
import LayoutAdmin from './pages/admin/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'


function App() {

  return (
    <Routes>
      <Route>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Route>
      <Route path={path.LOGIN} element={<Login />} />

      <Route path={path.ADMIN} element={<LayoutAdmin />}>
        <Route path={path.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
