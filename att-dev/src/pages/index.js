import React from "react"
import Card from "react-bootstrap/Card"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Teaser from "../components/Teaser"
import SEO from "../components/SEO"

const IndexPage = ({ ...props }) => (
  <>
    <SEO title="Welcome" />
    <Teaser />
    <Card
      className="mt-1"
      style={{ background: `transparent`, boxShadow: `none` }}
    >
      <Card.Body className="hiw-Card-Body">
        <AniLink
          className="w-100 d-flex justify-content-center"
          paintDrip
          to="/faq"
          hex="#412456"
          duration={0.25}
        >
          <button type="button" className="hiw-btn">
            How It Works
          </button>
        </AniLink>
      </Card.Body>
    </Card>
  </>
)

export default IndexPage
