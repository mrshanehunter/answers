import React from "react"
import PaySuccess from "../../components/PaySuccess"
import Seo from "../../components/Seo"

export default function PaySuccessPage({ ...props }) {
  return (
    <>
      <Seo title="Successful Payment" />
      <PaySuccess props={props} />
    </>
  )
}
