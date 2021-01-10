import React from "react"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"

export default function AskReject() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2>You don't have enough tokens to Ask The Tarot right now</h2>
          <Link to="/app/profile">
            <Button className="w-50 mb-4 ml-auto mr-auto">Get Some Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
