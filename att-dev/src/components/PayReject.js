import React from "react"
import { Link } from "gatsby"

export default function PayReject() {
  return (
    <>
      <h2>Your Payment has been Declined</h2>

      <h3>Your token balance remains unchanged</h3>

      <Link to="/app/profile">
        <button type="button">Click here to continue</button>
      </Link>
    </>
  )
}
