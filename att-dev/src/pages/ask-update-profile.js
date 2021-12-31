import React from "react"
import UpdateProfile from "../components/UpdateProfile"
import SEO from "../components/SEO"

export default function AskUpdateProfilePage({ ...props }) {
  return (
    <>
      <SEO title="Update Profile" />
      <UpdateProfile props={props} />
    </>
  )
}
