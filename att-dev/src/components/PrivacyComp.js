import React from "react"
import Card from "react-bootstrap/Card"

function PrivacyDetail({ privacy }) {
  return (
    <Card className="w-100" style={{ maxWidth: `80rem`, maxHeight: `90vh` }}>
      <Card.Header
        className="m-3 p-3 text-center"
        style={{ textShadow: `0.25rem 0.25rem #412456` }}
      >
        <h3>{privacy.name}</h3>
      </Card.Header>
      <Card.Body className="m-3 terms-privacy">
        <Card.Title style={{ fontSize: `1.5rem` }}>
          {privacy.openpara}
        </Card.Title>
        <Card.Subtitle
          className="p-5 text-center"
          style={{ fontSize: `1.3rem` }}
        >
          Last Updated: {privacy.updated}
        </Card.Subtitle>
        <Card.Text className="mr-4">
          <ol>
            <li>
              <strong> {privacy.header1}</strong> <br />
              {privacy.para1}
            </li>
            <li>
              <strong>{privacy.header2}</strong>
              <br />
              {privacy.para2}
            </li>
            <li>
              <strong>{privacy.header3}</strong>
              <br />
              {privacy.para3}
            </li>
            <li>
              <strong>{privacy.header4}</strong>
              <br />
              {privacy.para4}
            </li>
            <li>
              <strong>{privacy.header5}</strong>
              <br />
              {privacy.para5}
            </li>
            <li>
              <strong>{privacy.header6}</strong>
              <br />

              {privacy.para6}
            </li>
            <li>
              <strong>{privacy.header7}</strong>
              <br />
              {privacy.para7}
            </li>
            <li>
              <strong>{privacy.header8}</strong>
              <br />
              {privacy.para8}
            </li>
          </ol>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default function PrivacyComp({ privacys }) {
  return (
    <>
      {privacys.map(privacy => (
        <PrivacyDetail key={privacy.id} privacy={privacy} />
      ))}
    </>
  )
}
