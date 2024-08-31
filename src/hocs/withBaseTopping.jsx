import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"

const WithBaseTopping = (Component) => (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Component
      {...props}
      location={location}
      dispatch={dispatch}
      navigate={navigate}
    />
  )
}

export default WithBaseTopping
