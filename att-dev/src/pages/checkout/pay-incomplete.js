import React from "react"
import PayReject from "../../components/PayReject"
import SEO from "../../components/SEO"

export default function PayIncompletePage({ ...props }) {
  return (
    <>
      <SEO title="Incomplete Payment" />
      <PayReject props={props} />
    </>
  )
}
