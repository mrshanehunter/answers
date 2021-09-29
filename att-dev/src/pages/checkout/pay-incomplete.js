import React from "react"
import PayReject from "../../components/PayReject"
import Seo from "../../components/Seo"

export default function PayIncompletePage({ ...props }) {
  return (
    <>
      <Seo title="Incomplete Payment" />
      <PayReject props={props} />
    </>
  )
}
