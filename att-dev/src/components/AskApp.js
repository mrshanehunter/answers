import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import ReactCardFlip from "react-card-flip"
import { CSSTransition } from "react-transition-group"
import Image from "./Image"
import { useAuth } from "../contexts/AuthContext"
import { askUpdate } from "../firebase"
import AskReject from "./AskReject"

export default function AskApp() {
  const { currentUser, finishUpdate } = useAuth()
  const [isFlipped, setIsFlipped] = useState(false)
  const [count, setCount] = useState(currentUser.balance)
  const [loading, setLoading] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(true)

  const { cards } = useStaticQuery(graphql`
    query {
      cards: allSanityTarot {
        nodes {
          card_name
          card_number
          yes_or_no
          response
          image {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  const random = Math.floor(Math.random() * 78)
  const card = cards.nodes[`${random}`]
  const opac = {
    opacity: opacity,
  }


  const closeOut = async e => {
    e.preventDefault()
    setOpacity(0)
    try {
      setLoading(true)
      await finishUpdate()
    } catch (error) {
      setError("Error updating balance")
      console.error(error)
    }
    setLoading(false)
    navigate("/app/profile", { replace: true })
    setMounted(false)
  }


  const clickHandler = () => {
    if (isFlipped && count < 2) {
      alert("You are out of tokens")
      setOpacity(0)
      return <AskReject user={currentUser} />
    }
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      askUpdate(currentUser)
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>Counter = {count}</div>
      {error && <Alert variant="danger">{error}</Alert>}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card>
          <Card.Body>
            <Image />
          </Card.Body>
          <Button className="w-75 ml-auto mr-auto text-center mb-4" onClick={clickHandler}>
            Ask The Tarot
          </Button>
        </Card>

        <Card style={opac}>
          <CSSTransition 
          in={isFlipped}
          timeout={1200}
          >
          <Card.Body className="d-flex-column text-center" >
            <h5>{card.card_name}</h5>
            <Img
              fluid={card.image.asset.fluid}
              style={{ width: `170px`, height: `275px`, margin: `0 auto 1rem`, boxShadow: `0 0 0.75rem rgba(0,0,0,0.5)` }}
              alt={card.card_name}
            />
            <h4>{card.yes_or_no}</h4>
            <p style={{fonSize: `0.5vw`}}>{card.response}</p>
          </Card.Body>
          </CSSTransition>
          <Button className="w-75 ml-auto mr-auto text-center mb-4" onClick={clickHandler}>
            Ask Another Question
          </Button>
        </Card>
      </ReactCardFlip>
      <Card className="mt-3">
        <Card.Body className="d-flex justify-content-center">
          <Button className="w-75 text-center" onClick={e => closeOut(e)}>
            Return to Profile
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
