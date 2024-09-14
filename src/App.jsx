import { useState } from 'react'
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import path from './ultils/path'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/public/Layout'
import Home from './pages/public/Home'
import Login from './pages/public/Login'
import LayoutAdmin from './pages/admin/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import { Modal } from './components'

function App() {
  const { isLoading, isShowModal, modalContent } = useSelector(
    (state) => state.app
  )
  return (
    <>
      {isShowModal && <Modal>{modalContent}</Modal>}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-[1000] bottom-0 bg-overlay-70 flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      )}
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
