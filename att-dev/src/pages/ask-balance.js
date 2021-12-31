import React from "react"
import AskReject from "../components/AskReject"
import SEO from "../components/SEO"

export default function AskBalancePage({ ...props }) {
  return (
    <>
      <SEO title="Balance" />
      <AskReject props={props} />
    </>
  )
}
