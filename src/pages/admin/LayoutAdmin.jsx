import { useSelector } from "react-redux"
import { AdminSidebar } from "../../components"
import WithBaseTopping from "../../hocs/withBaseTopping"
import React, { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import path from "@/ultils/path"
const LayoutAdmin = ({ dispatch }) => {
  const { current } = useSelector((s) => s.user)
  if(!(current?.role === 0 || current?.role === 2 || current?.role === 3) ){
    return <Navigate to={`/${path.LOGIN}`} replace={true} />
  }
  return (
    <div className="grid grid-cols-11 gap-3 overflow-hidden max-h-screen">
      <div className="col-span-2 bg-white max-h-screen overflow-y-auto">
        <AdminSidebar />
      </div>
      <div className="col-span-9 bg-white max-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default WithBaseTopping(LayoutAdmin)
