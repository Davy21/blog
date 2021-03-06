import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { withPrefix } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Navbar */}
      <Navbar expand="lg">
        <Navbar.Brand href={withPrefix("/")}>
          <h3>{siteTitle}</h3>
          <h6>Humanity & Tech blog</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href={withPrefix("/")}>Blog</Nav.Link>
            <Nav.Link href={withPrefix("/aboutme")}>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
