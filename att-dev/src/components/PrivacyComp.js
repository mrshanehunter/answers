import React from "react"
import Layout from "./Layout"
import Card from "react-bootstrap/Card"

export default function PrivacyComp() {
  return (
    <>
      <Layout>
        <Card style={{ height: `670px` }}>
          <Card.Body>
            <h3>I am the Privacy Component</h3>
          </Card.Body>
        </Card>
      </Layout>
    </>
  )
}
