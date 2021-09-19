import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

export default function ThanksPage() {
  return (
    <>
     
      <Container className="d-flex-column justify-content-center align-items-center">
        <Card className="w-100" style={{ maxWidth: `50rem`, margin: `3rem auto` }}>
          <Card.Header className="m-3 p-3 text-center" style={{textShadow: `0.25rem 0.25rem #412456`}}>
            <h3>Form Submitted Successfully</h3>
          </Card.Header>
          <Card.Body className="m-3 text-center">
            <p>Thanks for taking the time to write to Ask The Tarot Yes or No</p>
            <br />
            <p>Someone will respond to your query within the next 48 hours</p>
            
           
          </Card.Body>

          <Card.Footer className="m-0 p-0">
            <Button className="w-50 thxbtn">
              <Link to="/profile">Return to the App</Link>
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}