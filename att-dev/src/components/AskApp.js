
import React from "react"
import { navigate } from "gatsby"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Image from "./Image"
import { useAuth } from "../contexts/AuthContext"
import { askUpdate } from "../firebase"
import AskReject from "../components/AskReject"
import Login from "../components/Login"





export default function AskApp() {
  const { currentUser } = useAuth()
  
 
 


   async function clickHandler(e){
    e.preventDefault()
    
    
    await askUpdate(currentUser)
   
      
      navigate("/ask-answer")
      
  }

   

  
  

  return (
    <>
     {!currentUser ? <Login />
     : (currentUser.balance > 1) ?
        <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `rgba(251, 201, 38, 0.5)`, fontSize: `1.8rem`}}>{currentUser.balance} questions remaining</p></Container> 
      : (currentUser.balance === 1) ?
      <Container className="w-100 mb-3 d-flex justify-content-center"><p className="text-center" style={{color: `rgba(251, 201, 38, 0.5)`, fontSize: `1.8rem`}}>This is your last question {currentUser.displayName}</p></Container> 
      :
      <AskReject />       }
      
      
      
     
      
        <Card>
          <Card.Body className="mx-auto">
            <Image />
          </Card.Body>
          
        </Card>
       
       <Card className="mt-3">
         <Card.Body>
          
         <Button className="w-100 ml-auto mr-auto text-center" onClick={(e) => clickHandler(e)}>
            Ask The Tarot
          </Button>
        
         </Card.Body>
       </Card>
        
      
     
    </>
  )
}
