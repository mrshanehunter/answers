import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Fade, Zoom } from "react-awesome-reveal"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"

export default function AskAnswer({ ...props }) {
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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  const { currentUser } = useAuth()
  const random = Math.floor(Math.random() * 78)
  const card = cards.nodes[`${random}`]
  const [state, setState] = useState(currentUser)

  useEffect(() => {
    const unsub = db
      .collection(`users`)
      .doc(`${currentUser.uid}`)
      .onSnapshot(doc => {
        const dataUpdate = doc.data()
        let balance = dataUpdate.balance
        if (state.balance > balance) {
          currentUser.balance = balance
          setState(state => [{ ...state, balance: balance }])
        }
      })
    return () => {
      unsub()
    }
  })

  return (
    <>
      <Card>
        <Fade cascade={true} triggerOnce={true}>
          <Card.Body className="d-flex-column text-center justify-content-center align-items-center">
            <Fade delay={2000} triggerOnce={true}>
              <Zoom delay={2000} duration={6500} triggerOnce={true}>
                <h5>{card.card_name}</h5>
              </Zoom>
            </Fade>
            <Fade delay={2000} triggerOnce={true}>
              <Zoom delay={2000} duration={6500} triggerOnce={true}>
                <GatsbyImage
                  className=" p-0"
                  image={card.image.asset.gatsbyImageData}
                  style={{
                    width: `250px`,
                    height: `480px`,
                    margin: `0 auto 1rem`,
                    boxShadow: `0 0 0.75rem rgba(0,0,0,0.5)`,
                    border: `0.15rem groove var(--gold)`,
                  }}
                  alt={card.card_name}
                />
              </Zoom>
            </Fade>
            <Fade delay={7500} duration={9500} triggerOnce={true}>
              <Zoom delay={7500} duration={9500} triggerOnce={true}>
                <h4>{card.yes_or_no}</h4>
              </Zoom>
            </Fade>
            <Fade delay={10500} duration={9500} triggerOnce={true}>
              <p
                style={{
                  fontSize: `1.4rem`,
                  textShadow: `1px 1px 1px var(--black)`,
                  padding: `0, 1rem`,
                }}
              >
                {card.response}
              </p>
            </Fade>
          </Card.Body>
        </Fade>
      </Card>

      <Card className="mt-3">
        <Fade delay={7500} duration={5000} triggerOnce={true}>
          <Card.Body className="w-100">
            {currentUser.balance === 0 ? (
              <AniLink
                paintDrip
                to="/ask-balance"
                hex="#412456"
                duration={0.25}
                className="d-flex w-100 p-0 m-0"
              >
                <Button className="w-100 ml-auto mr-auto text-center">
                  Need More Answers?
                </Button>
              </AniLink>
            ) : (
              <AniLink
                paintDrip
                to="/ask-app"
                hex="#412456"
                duration={0.25}
                className="d-flex w-100 p-0 m-0"
              >
                <Button className="w-100 mt-0 ml-auto mr-auto text-center">
                  Ask Another Question?
                </Button>
              </AniLink>
            )}
          </Card.Body>
        </Fade>
      </Card>
    </>
  )
}
