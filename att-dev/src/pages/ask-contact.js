import React from "react"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"
import Address from "../components/Address"

export default function AskContactPage({ ...props }) {
  return (
    <>
      <SEO title="Contact" />
      <ContactForm props={props} />
      <Address />
    </>
  )
}
