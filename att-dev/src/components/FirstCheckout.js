import React from "react"
import { Card } from "react-bootstrap"

import TokenPurchase from "./TokenPurchase"

export default function FirstCheckout({ ...props }) {
  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <h3 className="text-center">Bonus Tokens</h3>
          <p className="text-center">Welcome to Ask The Tarot! </p>
          <p className="text-center">Your first token pack will be automatically <strong>doubled</strong> on a successful checkout</p>
          <p className="text-center"><strong>
            100% added value, FREE!</strong>
            </p>
          <p className="text-center">10 becomes 20</p>
          <p className="text-center">20 becomes 40</p>
         <Card.Text className="tandccheck">
         <p>By Aquiring Tokens you confirm your acceptance of Ask The Tarot's <a href="https://answers.askthetarot.com.au/terms" target="_blank" rel="noreferrer">terms & conditions</a></p>
       </Card.Text> 
        </Card.Body>
      </Card>
      <TokenPurchase page={props.path} welcome={true} />
    </>
  )
}
