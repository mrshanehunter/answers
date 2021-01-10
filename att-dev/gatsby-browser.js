import React from "react"
import { AuthProvider } from "./src/contexts/AuthContext"
import { PackProvider } from "./src/contexts/PackContext"

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      <PackProvider>{element}</PackProvider>
    </AuthProvider>
  )
}

export const onRouteUpdateDelayed = () => {
  console.log("Show a loading indicator now")
}
