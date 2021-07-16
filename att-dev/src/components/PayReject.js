import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function PayReject({ ...props }) {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
        <h3>Hmmm, that could have gone better</h3>
        <h4>Your payment was declined </h4>
        <h4>Your token balance remains unchanged</h4>

        </Card.Body>
      </Card>

     <Card className="mt-4">
      <Card.Body>
      <AniLink paintDrip to="/profile" hex="#412456" duration={0.25}>
        <Button className="w-100" type="button">Click here to continue</Button>
      </AniLink>
      </Card.Body>

     </Card>

      

      
    </>
  )
}
