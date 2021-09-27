import React from "react"
import AskReject from "../components/AskReject"
import SEO from "../components/seo"

export default function AskBalancePage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Balance" />
  <AskReject  props={props}/>
  </>
)
}