import React from "react"
import AskAnswer from "../components/AskAnswer"
import Seo from "../components/Seo"

export default function AskAnswerPage({ ...props }) {
  return (
    <>
      <Seo title="Answer" />
      <AskAnswer props={props} />
    </>
  )
}
