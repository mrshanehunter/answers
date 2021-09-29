import React from "react"
import AskReject from "../components/AskReject"
import Seo from "../components/Seo"

export default function AskBalancePage({ ...props }) {
  return (
    <>
      <Seo title="Balance" />
      <AskReject props={props} />
    </>
  )
}
