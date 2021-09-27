import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "react-bootstrap/Container"
import Logo from "./Logo"
import styled from "styled-components"
import { useAuth } from "../contexts/AuthContext"

const StyledLogo = styled.div`
  max-width: 150px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  background: var(--shade);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0;
  margin-left: 0;
  
`

const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--shade);
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding-right: 2rem;
  font-family: "aviano-flare";
  a {
    color: var(--gold);
    padding-left: 1rem;
    font-size: 1.8rem;
    letter-spacing: 0.15rem;
    text-shadow: 1px 1px 1px var(--black);
  }
`

export default function Header({ ...props }) {

  
  const { currentUser } = useAuth()


  return (
   <header>
    <Container
      className="d-flex w-100 m-1"
      style={{
        background: `rgba(65, 36, 86, 0.35)`,
        borderRadius: `1rem`,
        boxShadow: `0 0 0.2rem rgba(0, 0, 0, 0.8)`,
      }}
    >
      <StyledLogo>
        <AniLink paintDrip to="/" hex="#412456" duration={0.25}>
          <Logo />
        </AniLink>
      </StyledLogo>
      <StyledNavigation>
        {currentUser ? (
          <AniLink paintDrip to="/profile" hex="#412456" duration={0.25}>
            Profile
          </AniLink>
        ) : (
          <AniLink paintDrip to="/ask-login" hex="#412456" duration={0.25}>
            Ask
          </AniLink>
        )}
      </StyledNavigation>
    </Container>
   </header>
  )
}

