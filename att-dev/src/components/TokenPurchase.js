import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Card } from "react-bootstrap"
import usePacks from "../services/usePacks"

export default function TokenPurchase({ ...props }) {
  const { tokenpacks } = useStaticQuery(graphql`
    query {
      tokenpacks: allSanityTokenpacks {
        nodes {
          pack_name
          pack_price_display
          pack_price_code
          pack_token_qty
          id
          welcome_offer
        }
      }
    }
  `)

  const tokens = tokenpacks.nodes
  let data

  const { addToOrder } = usePacks({
    tokens,
    data,
  })

  let packs

  if (props.welcome === true) {
    packs = tokens.filter(token => token.welcome_offer === true)
  } else if (props.welcome === false) {
    packs = tokens.filter(token => token.welcome_offer === false)
  }

  return (
    <Card className="m-2">
      <Card.Body className="d-flex-column">
        <h2>Token Packs</h2>
        {packs.map(pack => (
          <div key={pack.id} pack={pack}>
            <Button
              className="order w-100 mb-2"
              type="button"
              name={pack.pack_price_code}
              onClick={e => {
                let data = e.currentTarget.name
                addToOrder(data)
                console.log(data)
              }}
            >
              {pack.pack_name} for ${pack.pack_price_display / 100}
            </Button>
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}
