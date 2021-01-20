import React from "react"
import Layout from "./Layout"
import Card from "react-bootstrap/Card"

export default function FAQComp() {
  return(
    <>
      <Layout>
      <Card style={{height: `670px`}}>
        <Card.Body>
          <h3>I am the FAQ Component</h3>
        </Card.Body>
      </Card>

      </Layout>
    </>
  )
}