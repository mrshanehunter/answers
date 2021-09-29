import React from "react"
import UpdateProfile from "../components/UpdateProfile"
import Seo from "../components/Seo"

export default function AskUpdateProfilePage({ ...props }) {
  return (
    <>
      <Seo title="Update Profile" />
      <UpdateProfile props={props} />
    </>
  )
}
