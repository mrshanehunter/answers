import React from "react"
import FirstCheckout from "../components/FirstCheckout"
import SEO from "../components/seo"

export default function AskFirstCheckoutPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Checkout" />
  <FirstCheckout  props={props}/>
  </>
)
}