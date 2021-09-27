import React from "react"
import ForgotPassword from "../components/ForgotPassword"
import SEO from "../components/seo"

export default function AskForgotPasswordPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Forgot Password" />
  <ForgotPassword  props={props}/>
  </>
)
}