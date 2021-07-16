import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Reveal from "react-reveal/Reveal"
import ReactCardFlip from "react-card-flip"
import Image from "./Image"
import Img from "gatsby-image"

export default function Teaser() {
  const { cards } = useStaticQuery(graphql`
    query {
      cards: allSanityTeaser {
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

  const random = Math.floor(Math.random() * 3)
  const card = cards.nodes[`${random}`]

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <Reveal delay={2000} duration={2000}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={0.99} flipSpeedBackToFront={0.1}>
          <Card className="mx-auto" style={{ height: `570px`, maxWidth: `400px`}}>
            <Card.Body className="mx-auto">
              <Image style={{ paddingTop: `20px` }} />
            </Card.Body>
            <div className="d-flex justify-content-center p-3">
              {" "}
              <Button
                type="button"
                className="teaser-Card-Button btn"
                onClick={handleClick}
              >
                Ask The Tarot
              </Button>
            </div>
          </Card>

          <Card className="mx-auto" style={{ height: `570px`, maxWidth: `400px` }}>
         
            <Card.Body className="d-flex-column text-center">
              <h5>{card.card_name}</h5>

              <Img
                fluid={card.image.asset.fluid}
                style={{
                  width: `200px`,
                  height: `315px`,
                  margin: `0 auto 1rem`,
                  boxShadow: `0 0 0.75rem rgba(0,0,0,0.5)`,
                }}
                alt={card.card_name}
              />

              <h4>{card.yes_or_no}</h4>
              <div className="teaser-Card-Response">
                <p>{card.response}</p>
              </div>
            </Card.Body>
           
            <div className="d-flex justify-content-center p-3">
            <Button 
            type="button"
            className="teaser-Card-Button"
            onClick={handleClick}>Another Question?</Button>
            </div>
           
          </Card>
        </ReactCardFlip>
      </Reveal>
    </>
  )
}
