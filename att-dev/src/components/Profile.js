import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Logo from "./Logo"
import TokenPurchase from "./TokenPurchase"

export default function Profile({ ...props }) {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/app")
    } catch {
      setError("Failed to log out")
    }
  }

  const handleApp = () => {
    if (currentUser.balance < 2) {
      alert("You will need more tokens to Ask The Tarot")
    } else {
      navigate("/app/ask-app")
    }
  }

  return (
    <>
      <Card className="m-3">
        <Card.Body>
          <h4 className="text-center">What's your question {currentUser.displayName}?</h4>
          <Button className="w-100 d-flex justify-content-center"onClick={handleApp}>
            <Logo />
          </Button>
        </Card.Body>
      </Card>
      <Card className="m-3">
        <Card.Body>
          <h4 className="text-center mb-4">Profile</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Balance:</strong> {currentUser.balance} tokens{" "}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <Link to="/app/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>

    
      <TokenPurchase page={props.path} welcome={false} />
      <Card className="m-3 logOut">
        <Button className="log" variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </Card>
    </>
  )
}
