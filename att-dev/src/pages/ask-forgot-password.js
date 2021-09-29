import React from "react"
import ForgotPassword from "../components/ForgotPassword"
import Seo from "../components/Seo"

export default function AskForgotPasswordPage({ ...props }) {
  return (
    <>
      <Seo title="Forgot Password" />
      <ForgotPassword props={props} />
    </>
  )
}
