import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  font-size: 1rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()} Ask The Tarot</p>
      <p>Privacy</p>
      <p>Terms</p>
    </FooterStyles>
  )
}
