import React from "react"
import { Footer, Navigation } from "@/components"
import { Outlet } from "react-router-dom"
import withBaseTopping from "@/hocs/WithBaseTopping"

const Layout = ({ location }) => {
  return (
    <div className="relative max-h-screen overflow-y-auto">
      <Navigation />
      <div className="w-full bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default withBaseTopping(Layout)