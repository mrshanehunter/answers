import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <Card>
      <Card.Body>
        <h1>404: Not Found</h1>
        <p>
          You just hit a route that doesn&#39;t exist... a good question to Ask
          The Tarot!
        </p>
      </Card.Body>
      <Link to="/app">
        <Button type="button" className="w-50 mr-auto ml auto">
          Ask It Now!
        </Button>
      </Link>
    </Card>
  </Layout>
)

export default NotFoundPage
