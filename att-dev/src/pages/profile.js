import React from "react"
import Profile from "../components/Profile"
import Seo from "../components/Seo"

export default function ProfilePage({ ...props }) {
  return (
    <>
      <Seo title="Profile" />
      <Profile props={props} />
    </>
  )
}
