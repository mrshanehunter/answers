import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"

export default function Signup() {
  const emailRef = useRef()
  const displayNameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { signup, userdetails } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      const displayName = displayNameRef.current.value
      const { user } = await signup(
        emailRef.current.value,
        passwordRef.current.value
      )
      await userdetails(user, { displayName })
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
    navigate("/ask-first-checkout")
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create A Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="displayName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={displayNameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have a profile? <Link to="/ask-login">Log In</Link>
      </div>
    </>
  )
}
