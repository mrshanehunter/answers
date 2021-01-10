import React from "react"
import { navigate } from "gatsby"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser, loading } = useAuth()

  if (!loading && !currentUser && location.pathname !== "/app") {
    navigate("/app")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
