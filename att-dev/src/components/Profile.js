import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"
import Logo from "./Logo"
import TokenPurchase from "./TokenPurchase"
import Login from "./Login"


export default function Profile({ ...props }) {
  const [error, setError] = useState("")
  
  const { currentUser, logout } = useAuth()
  
  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/ask-login")
    } catch {
      setError("Failed to log out")
    }
  }

  const handleApp = () => {
    if (currentUser.balance < 1) {
      alert("You will need more tokens to Ask The Tarot")
    } else {
      navigate("/ask-app")
    }
  }

  return (
  
    !currentUser ?  <Login />
      :
        <>
       <Card className="mt-1 mb-4">
        <Card.Body>
          <h4 className="text-center">
            What's your question {currentUser.displayName}?
          </h4>
          <Button
            className="w-100 d-flex justify-content-center"
            onClick={() => handleApp()}
          >
            <Logo />
          </Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <h4 className="text-center mb-4">Your Details</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Tokens:</strong> {currentUser.balance}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <Link to="/ask-update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>

      <TokenPurchase page={props.path} welcome={false} />
      <Card className="w-100 mb-1 p-3">
        <Button className="log btn" variant="link" onClick={() => handleLogout()}>
          Log Out
        </Button>
      </Card>
       </>
  )  
    }

