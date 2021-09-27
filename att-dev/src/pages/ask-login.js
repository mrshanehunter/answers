import React from "react"
import Login from "../components/Login"
import SEO from "../components/seo"

export default function AskLoginPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Login" />
  <Login  props={props}/>
  </>
)
}