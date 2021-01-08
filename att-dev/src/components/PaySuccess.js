import React from "react"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"

export default function PaySuccess({ pack }) { 

 
 return(
 <>
  <Card>
    <Card.Body>
     <h2>Your Payment has been approved</h2>
     <h3>Token Purchase is currently being added to your balance</h3>
  
 <Link to="/app/profile">
    <Button type="button">Click here to continue</Button>
  </Link>
  </Card.Body>
  </Card> 
 

  </>
)
}