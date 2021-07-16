import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Card, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

export default function AskReject({ ...props }) {
  const { currentUser } = useAuth()

  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <h3 className="text-center">Your token balance is {currentUser.balance} {currentUser.displayName}.</h3>
          <h3 className="text-center">To Ask The Tarot more questions, you'll need more tokens.</h3>
          
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
        <AniLink paintDrip to="/profile" hex="#412456" duration={1}>
            <Button className="w-100">Get Some Now</Button>
          </AniLink>
        </Card.Body>
      </Card>
    </>
  )
}
