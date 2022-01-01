import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, navigate } from "gatsby"
import Modal from "react-modal"

export default function Login() {
  const { login } = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setTimeout(() => {
        navigate("/profile")
      }, 1700)
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-center mb-4">Access Profile</h3>
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
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Let Me In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/ask-forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        No Profile? <Link to="/ask-signup">Create One Here</Link>
      </div>

      <div className="w-100 text-center mt-2">
        <button className="login-modal-button" onClick={openModal}>
          Why do I need a profile?
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="close-modal">
            <button onClick={closeModal}>X</button>
          </div>
          <div className="modal-copy">
            <p>
              To Ask The Tarot any questions requires the purchase of tokens.
            </p>
            <p> Any unused tokens are saved in a profile for future use.</p>
            <p>
              The only data required to create a profile is an email address and
              a first name.
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}
