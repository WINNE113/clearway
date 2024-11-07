import { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import path from './ultils/path'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/public/Layout'
import Home from './pages/public/Home'
import Login from './pages/public/Login'
import ForgetPassword from './pages/public/ForgetPassword'
import LayoutAdmin from './pages/admin/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import { Modal } from './components'
import RenewPassword from './pages/public/RenewPassword'
import ManageRouters from './pages/admin/ManageRouters'
import ManageUser from './pages/admin/ManageUser'
import { getCurrent } from './redux/action'
import ManageTrafficStatus from './pages/admin/ManageTrafficStatus'
import ManageCameras from './pages/admin/ManageCameras'
import LayoutTrafficAuthority from './pages/trafficAuthority/LayoutTrafficAuthority'
import TAManageRouter from './pages/trafficAuthority/TAManageRouter'
import LayoutCorerate from './pages/coperate/LayoutCorerate'
import COManageTrafficStatus from './pages/coperate/COManageTrafficStatus'
import TAManageTrafficStatus from './pages/trafficAuthority/TAManageTrafficStatus'

function App() {
  const { isLoading, isShowModal, modalContent } = useSelector(
    (state) => state.app
  )
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.user)


  console.log("Token: " + token);

  // Xử lý logic lấy dữ liệu dựa vào token
  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        dispatch(getCurrent());
      };
      const timeoutId = setTimeout(fetchData, 800);
      return () => clearTimeout(timeoutId);
    }
  }, [token, dispatch]);

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
        <Route path={path.FORGET_PASSWORD} element={<ForgetPassword />} />
        <Route path={path.RENEW_PASSWORD} element={<RenewPassword />} />
        /** Admin */
        <Route path={path.ADMIN} element={<LayoutAdmin />}>
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.AD_MANAGE_ROUTES} element={<ManageRouters />} />
          <Route path={path.AD_MANAGE_USER} element={<ManageUser />} />
          <Route path={path.AD_MANAGE_TRAFFIC_STATUS} element={<ManageTrafficStatus />} />
          <Route path={path.AD_MANAGE_CAMERA} element={<ManageCameras />} />
        </Route>

        /** TRAFFIC AUTHORITY */
        <Route path={path.TRAFFIC_AUTHORITY} element={<LayoutTrafficAuthority />}>
          <Route path={path.TA_MANAGE_ROUTE} element={<TAManageRouter />} />
          <Route path={path.TA_MANAGE_TRAFFIC_STATUS} element={<TAManageTrafficStatus />} />
        </Route>

        /** COPERATE */
        <Route path={path.COPERATE} element={<LayoutCorerate />}>
          <Route path={path.CO_MANAGE_TRAFFIC_STATUS} element={<COManageTrafficStatus />} />
        </Route>

      </Routes >
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
