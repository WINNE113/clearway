
import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import WithBaseTopping from "@/hocs/withBaseTopping"

const Home = ({ dispatch }) => {

  return (
    <section className="pb-16">
      <Header />
      <div className="h-60   flex justify-center items-center font-bold">
        <div>
          THIS IS BODY
        </div>
      </div>
    </section>
  )
}

export default WithBaseTopping(Home)
