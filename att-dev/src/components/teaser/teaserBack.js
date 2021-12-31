import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TeaserBack() {
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
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)

  const random = Math.floor(Math.random() * 3)
  const card = cards.nodes[`${random}`]

  return (
    <Fade cascade={true} delay={2000}>
      <div>
        <h3>{card.card_name}</h3>
      </div>
      <div>
        <GatsbyImage
          image={card.image.asset.gatsbyImageData}
          alt={card.card_name}
        />
      </div>
      <div>
        <h4> {card.yes_or_no}</h4>
      </div>
      <div>
        {" "}
        <p>{card.response}</p>
      </div>
    </Fade>
  )
}
