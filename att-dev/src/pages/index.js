import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Teaser from "../components/Teaser"

const IndexPage = ({...props}) => (
  <>
   <Teaser />
  <Card className="mt-4" style={{ background: `transparent`, boxShadow: `none`}}>
    <Card.Body className="hiw-Card-Body">
      <AniLink className="w-100" paintDrip to="/faq" hex="#412456" duration={0.25}>
        <Button  type="button" className="w-100 btn">How It Works</Button>
      </AniLink>
    </Card.Body>
  </Card>

  </>
)

export default IndexPage
