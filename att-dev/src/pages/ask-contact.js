import React from "react"
import ContactForm from "../components/ContactForm"
import Seo from "../components/Seo"
import Address from "../components/Address"

export default function AskContactPage({ ...props }) {
  return (
    <>
      <Seo title="Contact" />
      <ContactForm props={props} />
      <Address />
    </>
  )
}
