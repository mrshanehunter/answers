import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"
import ReactCardFlip from "react-card-flip"
import Image from "./Image"



export default function AskApp() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [counter, setCounter] = useState(0)
  
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

  const random = Math.floor(Math.random() * 49)
  const card = cards.nodes[`${random}`]

  const clickHandler = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setCounter(counter -1)
    }
  }

  return (
    <>
     
        
      
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card>
          <Card.Body>
            <Image />
          </Card.Body>
          <Button className="w-100 text-center mb-4" onClick={clickHandler}>
            Ask The Tarot
          </Button>
        </Card>

        <Card>
          <Card.Body>
            <h3>{card.card_name}</h3>
            <Img
              fluid={card.image.asset.fluid}
              style={{ width: `62%`, margin: `0 auto 1rem` }}
              alt={card.card_name}
            />
            <h4>{card.yes_or_no}</h4>
            <p>{card.response}</p>
          </Card.Body>
          <Button className="w-100 text-center mb-4" onClick={clickHandler}>
            Ask Another Question
          </Button>
        </Card>
      </ReactCardFlip>
    </>
  )
}
