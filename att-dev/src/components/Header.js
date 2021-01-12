import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar expand="lg" variant="light">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav as="ul" style={{ display: `inline-block` }}>
          <Nav.Item as="li">
            <Link to="/app" className="nav-link" activeClassName="active">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/app/profile"
              className="nav-link"
              activeClassName="active"
            >
              Profile
            </Link>
          </Nav.Item>
        </Nav>
    </Navbar>
  )
}
