import React from "react"
import AskApp from "../components/AskApp"
import SEO from "../components/seo"

export default function AskAppPage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Ask" />
  <AskApp  props={props}/>
  </>
)
}
