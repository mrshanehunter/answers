import React from "react"
import { Card } from "react-bootstrap"

import TokenPurchase from "./TokenPurchase"

export default function FirstCheckout({ ...props }) {
  return (
    <>
      <Card className="m-2">
        <Card.Body>
          <h2>Bonus Tokens</h2>
        </Card.Body>
      </Card>
      <TokenPurchase page={props.path} welcome={true} />
    </>
  )
}
