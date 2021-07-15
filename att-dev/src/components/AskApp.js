import { navigate } from "gatsby"
import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
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
    if (count < 1) {
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
      {(count > 1)
      ? <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `rgba(251, 201, 38, 0.5)`, fontSize: `1.8rem`}}>{count} questions remaining</p> </Container>
      : (count === 1)
      ? <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `#fefefa`, fontSize: `1.8rem`}}>{currentUser.displayName}, this is your last question</p></Container>
      : <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `#fefefa`, fontSize: `1.8rem`}}>{currentUser.displayName}, you're out of tokens</p></Container>

    }
      
      
      
      {error && <Alert variant="danger">{error}</Alert>}
      
        <Card>
          <Card.Body className="mx-auto">
            <Image />
          </Card.Body>
          
        </Card>
       
       <Card className="mt-3">
         <Card.Body>
          
         <Button disabled={loading} className="w-100 ml-auto mr-auto text-center" onClick={e => {clickHandler(e)}}>
            Ask The Tarot
          </Button>
        
         </Card.Body>
       </Card>
        
      
     
    </>
  )
}
