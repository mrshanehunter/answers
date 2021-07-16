import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"

export default function Login() {
 
    const { login } = useAuth()
  
    const emailRef = useRef()
  const passwordRef = useRef()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setTimeout(() => { navigate("/app/profile")},1700)
    } catch {
      setError("Failed to log in")
    } 
    
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-center mb-4">Log In</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/app/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/app/signup">Sign Up</Link>
      </div>
    </>
  )
}

