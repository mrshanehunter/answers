import React from "react"
import AskApp from "../components/AskApp"
import Seo from "../components/Seo"

export default function AskAppPage({ ...props }) {
  return (
    <>
      <Seo title="Ask" />
      <AskApp props={props} />
    </>
  )
}
