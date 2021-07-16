
import React, { useState } from "react"
import { navigate } from "gatsby"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Image from "./Image"
import { useAuth } from "../contexts/AuthContext"
import { askUpdate } from "../firebase"

import AskAnswer from "./AskAnswer"

export default function AskApp() {
  const { currentUser } = useAuth()
  
 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
     
 
  setError("Something has gone wrong with the shuffle")

   const clickHandler = async () => {
    e.preventDefault()
    setLoading(loading)
    
    await askUpdate(currentUser)
   
      setLoading(!loading)
      navigate("/app/ask-answer")
      return <AskAnswer />
  }

   

  
  

  return (
    <>
     
       {/* <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `rgba(251, 201, 38, 0.5)`, fontSize: `1.8rem`}}>{count} questions remaining</p> </Container> */}
      
      
      
      
      {error && <Alert variant="danger">{error}</Alert>}
      
        <Card>
          <Card.Body className="mx-auto">
            <Image />
          </Card.Body>
          
        </Card>
       
       <Card className="mt-3">
         <Card.Body>
          
         <Button disabled={loading} className="w-100 ml-auto mr-auto text-center" onClick={() => clickHandler}>
            Ask The Tarot
          </Button>
        
         </Card.Body>
       </Card>
        
      
     
    </>
  )
}
