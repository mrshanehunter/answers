import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import { Card, Button } from "react-bootstrap"
import PackContext from "../contexts/PackContext"
import { useAuth } from "../contexts/AuthContext"

export default function PaySuccess() {
  const { handleUpdate, finishUpdate } = useAuth()
  useContext(PackContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleClick = async (e, qty) => {
    e.preventDefault()
    try {
      setLoading(true)
      await handleUpdate(qty)
      await finishUpdate()
    } catch (error) {
      setError("Error updating balance")
      console.error(error)
    }
    setLoading(false)
    navigate("/app/profile", { replace: true })
  }

  return (
    <PackContext.Consumer>
      {context => (
        <>
          <Card>
            {error && alert(error)}
            <Card.Body className="text-center">
              <h3>Your payment has been approved</h3>
              <h3>
                We're currently adding {context[0].pcont} tokens to your balance
              </h3>

             
            </Card.Body>
          </Card>
          <Card className="mt-5">
            <Card.Body>
            <Button
                className="w-100"
                disabled={loading}
                type="button"
                onClick={e => {
                  const qty = context[0].pcont
                  handleClick(e, qty)
                }}
              >
                Click here to continue
              </Button>
            </Card.Body>
          </Card>
        </>
      )}
    </PackContext.Consumer>
  )
}
