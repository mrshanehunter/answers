import React from "react"
import Layout from "../components/Layout"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Teaser from "../components/Teaser"

const IndexPage = ({...props}) => (
  <Layout>
   <Teaser />
  <Card className="mt-4">
    <Card.Body>
      <AniLink className="w-100" paintDrip to="/faq" hex="#412456" duration={1}>
        <Button  type="button" className="w-100">How It Works</Button>
      </AniLink>
    </Card.Body>
  </Card>

  </Layout>
)

export default IndexPage
