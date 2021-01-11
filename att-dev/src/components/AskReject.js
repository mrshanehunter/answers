import React from "react"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

export default function AskReject() {
  const { currentUser } = useAuth()

  return (
    <>
      <Card>
        <Card.Body>
          <h2>You don't have enough tokens {currentUser.displayName}.</h2>
          <h3>To Ask The Tarot more questions, you'll need more tokens.</h3>
          <Link to="/app/profile">
            <Button className="w-50 mb-4 ml-auto mr-auto">Get Some Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
