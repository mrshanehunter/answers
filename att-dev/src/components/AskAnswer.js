import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase" 


export default function AskAnswer(props) {
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

  const { currentUser } = useAuth()
  const random = Math.floor(Math.random() * 78)
  const card = cards.nodes[`${random}`]
  const [state, setState] = useState(currentUser)

  useEffect(() => {
    const unsub = db
      .collection(`users`)
      .doc(`${currentUser.uid}`)
      .onSnapshot(doc => {
        const user = doc.data()
        if (state.balance > user.balance) {
        currentUser.balance = user.balance
        setState(state => [{...state, balance: user.balance}])
        }
      })
    return () => {
      unsub()
    }
  })

  return (
    <>
      <Card>
        <Reveal>
          <Card.Body className="d-flex-column text-center">
            <Fade delay={2000}>
              <Zoom delay={2000} duration={6500}>
                <h5>{card.card_name}</h5>
              </Zoom>
            </Fade>
            <Fade delay={2000}>
              <Zoom delay={2000} duration={6500}>
                <Img
                  fluid={card.image.asset.fluid}
                  style={{
                    width: `270px`,
                    height: `485px`,
                    margin: `0 auto 1rem`,
                    boxShadow: `0 0 0.75rem rgba(0,0,0,0.5)`,
                  }}
                  alt={card.card_name}
                />
              </Zoom>
            </Fade>
            <Fade delay={7500} duration={9500}>
              <Zoom delay={7500} duration={9500}>
                <h4>{card.yes_or_no}</h4>
              </Zoom>
            </Fade>
            <Fade delay={10500} duration={9500}>
              <p style={{ fontSize: `1.8rem`, textShadow: `1px 1px 1px var(--black)` }}>{card.response}</p>
            </Fade>
          </Card.Body>
        </Reveal>
      </Card>

      <Card className="mt-3">
        <Reveal delay={12000}>
          <Fade delay={14000} duration={5000}>
            <Card.Body className="w-100">
              <AniLink
                paintDrip
                to="/app/ask-app"
                hex="#412456"
                duration={0.25}
                className="d-flex w-100 p-0 m-0"
              >
                <Button className="w-100 ml-auto mr-auto text-center">
                  Ask Another Question?
                </Button>
              </AniLink>
            </Card.Body>
          </Fade>
        </Reveal>
      </Card>
    </>
  )
}
