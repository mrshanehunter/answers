import React from "react"
import Card from "react-bootstrap/Card"

function TCDetail({ term }) {
  return (
    <Card className="w-100" style={{maxWidth: `80rem`, maxHeight: `90vh`}}>
      <Card.Header className="m-3 p-3 text-center" style={{textShadow: `0.25rem 0.25rem #412456`}}>
     <h3>  {term.name}</h3>
      </Card.Header>
      <Card.Body className="terms-privacy">
        <Card.Text className="mr-4">    
        <ol>
          <li>
            <strong>
            {term.header1}
            </strong>
            <br />
            {term.para1}
          </li>
          <li>
            <strong>
            {term.header2}
            </strong>
            <br />
            {term.para2}
          </li>
          <li>
            <strong>
            {term.header3}
            </strong>
            <br />
            {term.para3}
          </li>
          <li>
            <strong>
            {term.header4}
            </strong>
            <br />
            {term.para4}
          </li>
          <li>
            <strong>
            {term.header5}
            </strong>
            <br />
            {term.para5}
          </li>
          <li>
            <strong>
            {term.header6}
            </strong>
            <br />
            {term.para6}
          </li>
          <li>
            <strong>
            {term.header7}
            </strong>
            <br />
            {term.para7}
          </li>
          <li>
            <strong>
            {term.header8}
            </strong>
            <br />
            {term.para8}
          </li>
          <li>
            <strong>
            {term.header9}
            </strong>
            <br />
            {term.para9}
          </li>
          <li>
            <strong>
            {term.header10}
            </strong>
            <br />
            {term.para10}
          </li>
          <li>
            <strong>
            {term.header11}
            </strong>
            <br />
            {term.para11}
          </li>
          <li>
            <strong>
            {term.header12}
           </strong>
            <br />
            {term.para12}
          </li>
          <li>
            <strong>
            {term.header13}
            </strong>
            <br />
            {term.para13}
          </li>
          <li>
            <strong>
            {term.header14}
            </strong>
            <br />
            {term.para14}
          </li>
          <li>
            <strong>
            {term.header15}
            </strong>
            <br />
            {term.para15}
          </li>
          <li>
            <strong>
            {term.header16}
            </strong>
            <br />
            {term.para16}
          </li>
          <li>
            <strong>
            {term.header17}
          </strong>  
            <br />
            {term.para17}
          </li>
        </ol>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default function TermsComp({ terms }) {
  
  return (
    <>
    {terms.map((term) => (
      <TCDetail key={term.id} term={term} />
    ))}
    </>
  )
}