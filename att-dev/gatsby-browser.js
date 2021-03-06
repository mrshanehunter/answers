import React from "react"
import Layout from "./src/components/Layout"
import { AuthProvider } from "./src/contexts/AuthContext"
import { PackProvider } from "./src/contexts/PackContext"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      <PackProvider>{element}</PackProvider>
    </AuthProvider>
  )
}
