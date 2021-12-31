import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <>
    <SEO title="404 - Page Not Found" />
    <Card className="mt-5 mb-5 pt-5 pb-5">
      <Card.Body className="text-center">
        <h3>404:</h3>
        <h3>Page Not Found</h3>
        <p>You won&#39;t find the answer you&#39;re looking for here.</p>
        <p>
          But you&#39;re only a click or two away from having your questions
          answered.
        </p>
      </Card.Body>
    </Card>
    <Card className="mb-5">
      <Card.Body>
        <AniLink paintDrip to="/" hex="#412456" duration={1}>
          <Button type="button" className="w-100 mr-auto ml auto">
            Ask It Now!
          </Button>
        </AniLink>
      </Card.Body>
    </Card>
  </>
)

export default NotFoundPage
