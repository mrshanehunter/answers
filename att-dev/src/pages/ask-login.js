import React from "react"
import Login from "../components/Login"
import Seo from "../components/Seo"

export default function AskLoginPage({ ...props }) {
  return (
    <>
      <Seo title="Login" />
      <Login props={props} />
    </>
  )
}
