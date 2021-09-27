import React from "react"
import Signup from "../components/SignUp"
import SEO from "../components/seo"

export default function AskSignupPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Sign Up" />
  <Signup  props={props}/>
  </>
)
}