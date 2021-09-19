import React from "react"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FooterStyles = styled.footer`
  width: 100%;
  font-size: 0.5vw;
  text-align: center;
  background: var(--shaded);
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  box-shadow: 0 0 0.2rem rgba(0,0,0,0.8);
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--gold)
  }
  a {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--gold);
    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Footer() {
  return (
    <Container className="d-flex p-2 mb-1" style={{background: `rgba(65, 36, 86, 0.35)`,borderRadius: `1rem`,
   }}>
    <FooterStyles>
      <div className="d-flex flex-row w-75 mx-auto justify-content-center"> 
      <AniLink paintDrip to="/privacy" hex="#412456" duration={0.25} className="w-25 pt-2 text-center">Privacy</AniLink>
      <AniLink paintDrip to="/terms" hex="#412456" duration={0.25} className="w-25 pt-2 text-center">Terms</AniLink>
      <AniLink paintDrip to="/ask-contact" hex="#412456" duration={0.25} className="w-25 pt-2 text-center">Contact</AniLink>
      </div>
      <div className="d-flex w-100 m-0 p-0">
      <p className="w-100 pb-2 text-center">&copy; {new Date().getFullYear()} Ask The Tarot. All Rights Reserved</p>
      </div>

    </FooterStyles>
    </Container>
  )
}
