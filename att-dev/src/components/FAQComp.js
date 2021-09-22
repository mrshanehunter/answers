import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function Questions({ faq }) {
  return (
    <Card className="w-100" style={{ maxWidth: `50rem` }}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={faq.event_key}
        style={{ cursor: `pointer` }}
      >
        <h3 className="m-1 p-2 faqh3" style={{textShadow: `0.25rem 0.25rem #412456`}}>{faq.question}</h3>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={faq.event_key}>
        <Card.Body className="m-3" style={{color: `var(--gold)`}}>{faq.answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default function FAQComp({ faqs }) {
  return (
    <Accordion className="w-100 m-0 p-0" style={{ maxWidth: `50rem` }}>
      {faqs.map(faq => (
        <Questions key={faq.id} faq={faq} />
      ))}
    </Accordion>
  )
}