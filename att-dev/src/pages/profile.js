import React from "react"
import Profile from "../components/Profile"
import SEO from "../components/seo"

export default function ProfilePage ({...props}) { 
  
 return ( 
   <>
   <SEO title="Profile" />
  <Profile  props={props}/>
  </>
)
}

