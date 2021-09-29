import React from "react"
import FirstCheckout from "../components/FirstCheckout"
import Seo from "../components/Seo"

export default function AskFirstCheckoutPage({ ...props }) {
  return (
    <>
      <Seo title="Checkout" />
      <FirstCheckout props={props} />
    </>
  )
}
