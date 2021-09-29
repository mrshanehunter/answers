import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const BackgroundSection = ({ children }) => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query {
        backgroundImage: file(relativePath: { eq: "BG_SS_DSK.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              height: 1080
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              layout: CONSTRAINED
              quality: 50
              webpOptions: { quality: 80 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage)

  return (
    <BgImage image={pluginImage} className="bg">
      {children}
    </BgImage>
  )
}
BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
}

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   min-height: 100vh;
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
// `

export default BackgroundSection
