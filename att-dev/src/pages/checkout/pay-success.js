import React from "react"
import PaySuccess from "../../components/PaySuccess"
import SEO from "../../components/seo"

export default function PaySuccessPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Successful Payment" />
  <PaySuccess  props={props}/>
  </>
)
}

