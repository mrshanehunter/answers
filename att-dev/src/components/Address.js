import React from "react"
import { Card } from "react-bootstrap"

export default function Address() {
  return (
    <Card className="mt-5 mb-5 addressCard">
      <Card.Body className="address">
        <Card.Text>
          Or write to Ask The Tarot at:
        </Card.Text>
        <Card.Text>
          PO Box 3015
        </Card.Text>
        <Card.Text>
          South Melbourne VIC 3205
        </Card.Text>
        <Card.Text>
          AUSTRALIA
        </Card.Text>
      </Card.Body>
    </Card>
  )
}