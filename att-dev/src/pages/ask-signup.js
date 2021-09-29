import React from "react"
import Signup from "../components/SignUp"
import Seo from "../components/Seo"

export default function AskSignupPage({ ...props }) {
  return (
    <>
      <Seo title="Sign Up" />
      <Signup props={props} />
    </>
  )
}
