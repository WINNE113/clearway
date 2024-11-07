import { useSelector } from "react-redux"
import WithBaseTopping from "../../hocs/withBaseTopping"
import React, { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import path from "@/ultils/path"
import TrafficAuthoritySidebar from "@/components/sidebar/TrafficAuthoritySidebar"
const LayoutTrafficAuthority = () => {
  const { current } = useSelector((s) => s.user)
  console.log("Current in layout: " + JSON.stringify(current))
  if (current?.role !== 3) {
    return <Navigate to={`/${path.LOGIN}`} replace={true} />
  }
  return (
    <div className="grid grid-cols-11 gap-3 overflow-hidden max-h-screen">
      <div className="col-span-2 bg-white max-h-screen overflow-y-auto">
        <TrafficAuthoritySidebar />
      </div>
      <div className="col-span-9 bg-white max-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default WithBaseTopping(LayoutTrafficAuthority)
