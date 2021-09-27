import React from "react"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"
import Address from "../components/Address"

export default function AskContactPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Contact" />
  <ContactForm  props={props}/>
  <Address />
  </>
)
}