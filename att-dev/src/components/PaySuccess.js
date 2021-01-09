import React, { useContext } from "react"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"
import PackContext from "../contexts/PackContext"
import handleConfirm from "../services/handleConfirm"

export default function PaySuccess() { 


const { order } = useContext(PackContext);  


const upd = order;

const updateOrder = (upd) => {
  console.log("Maybe I've cracked it", upd)
}
 
 return(
 <>
  <Card>
    <Card.Body>
     <h2>Your Payment has been approved</h2>
     <h3>Token Purchase of {upd} is currently being added to your balance</h3>
  
 <Link to="/app/profile">
    <Button type="button" onClick={updateOrder}>Click here to continue</Button>
  </Link>
  </Card.Body>
  </Card> 
 

  </>
)
}