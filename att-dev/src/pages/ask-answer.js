import React from "react"
import AskAnswer from "../components/AskAnswer"
import SEO from "../components/SEO"

export default function AskAnswerPage({ ...props }) {
  return (
    <>
      <SEO title="Answer" />
      <AskAnswer props={props} />
    </>
  )
}
