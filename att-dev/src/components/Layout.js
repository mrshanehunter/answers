import React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"
import { AuthProvider } from "../contexts/AuthContext"



export default function Layout({ children }) {

  return (
    <>
      <AuthProvider>
       
       {children}
      <Footer />
           </AuthProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


