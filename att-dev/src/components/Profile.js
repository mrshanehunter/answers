import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"
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
      alert("You will need more tokens to Ask The Tarot");
    } else {
      navigate("/app/ask-app")
    }
  }

  return (
    <>
      <Card className="m-2">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Name:</strong> {currentUser.displayName}
          </p>
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

      <Card className="m-2">
        <Card.Body>
          
            <Button className="w-100" onClick={handleApp}>Ask The Tarot</Button>
          
        </Card.Body>
      </Card>
      <TokenPurchase page={props.path} welcome={false} />
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
