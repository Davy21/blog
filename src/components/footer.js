import React from "react"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <Row
      style={{
        backgroundColor: "gray",
        color: "white",
        height: "100px",
      }}
    >
      <Col className="text-center">
        <div
          style={{
            position: "relative",
            top: "10px",
            bottom: "10px",
            margin: "auto 0",
          }}
        >
          <footer>
            Gofo © {new Date().getFullYear()} | Business Enquiry :
            davy_cheng1221@yahoo.com
          </footer>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
