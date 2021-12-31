import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Teaser from "../components/Teaser"
import Seo from "../components/Seo"

const IndexPage = ({ ...props }) => (
  <>
    <Seo title="Welcome" />
    <Teaser />
    <Card
      className="mt-1"
      style={{ background: `transparent`, boxShadow: `none` }}
    >
      <Card.Body className="hiw-Card-Body">
        <AniLink
          className="w-100"
          paintDrip
          to="/faq"
          hex="#412456"
          duration={0.25}
        >
          <Button type="button" className="w-100 btn">
            How It Works
          </Button>
        </AniLink>
      </Card.Body>
    </Card>
  </>
)

export default IndexPage
