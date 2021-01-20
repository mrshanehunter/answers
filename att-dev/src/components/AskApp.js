import { navigate } from "gatsby"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import Image from "./Image"
import { useAuth } from "../contexts/AuthContext"
import { askUpdate } from "../firebase"
import AskReject from "./AskReject"
import AskAnswer from "./AskAnswer"

export default function AskApp() {
  const { currentUser } = useAuth()

  const [count, setCount] = useState(currentUser.balance)
  const [loading, setLoading] = useState(false)
  
  const [error, setError] = useState("")
 

  const random = Math.floor(Math.random()*78);   
  


   const clickHandler = async (e) => {
    e.preventDefault()
    setLoading(loading)
    if (count < 2) {
      navigate("/app/ask-balance")
      return <AskReject />
    } else {
    await askUpdate(currentUser)
      setCount(count - 1)
      setLoading(!loading)
      navigate("/app/ask-answer")
      return <AskAnswer random={random} />
    }}

   

  
  

  return (
    <>
      <div>Counter = {count}</div>
      {error && <Alert variant="danger">{error}</Alert>}
      
        <Card>
          <Card.Body>
            <Image />
          </Card.Body>
          
        </Card>
       
       <Card className="mt-3">
         <Card.Body>
         <Button className="w-100 ml-auto mr-auto text-center" onClick={e => {clickHandler(e)}}>
            Ask The Tarot
          </Button>
         </Card.Body>
       </Card>
        
      
     
    </>
  )
}
