import React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"




export default function Layout({ children }) {

  return (
    <>
      
       
       {children}
      <Footer />
          </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


