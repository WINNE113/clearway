
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/header/Header"
const Home = () => {
  const dispatch = useDispatch()
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

export default Home
