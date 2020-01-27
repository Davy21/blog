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
      <Col>
        {" "}
        <div
          style={{
            position: "relative",
            top: "10px",
            bottom: "10px",
            margin: "auto 0",
          }}
        >
          Description
        </div>
      </Col>
      <Col>
        <div
          style={{
            position: "relative",
            top: "10px",
            bottom: "10px",
            margin: "auto 0",
          }}
        >
          <footer>
            <div>
              <i className="fa fa-github"></i> :{" "}
              <a
                target="_blank"
                className="noDecoration"
                href="https://github.com/Davy21"
              >
                Davy21
              </a>
            </div>
            <div>
              <i className="fa fa-envelope"></i> :{" "}
              <a className="noDecoration" href="mailto:wei122193@gmail.com">
                wei122193@gmail.com
              </a>
            </div>
            <div>
              <i className="fa fa-whatsapp"></i> :{" "}
              <a
                target="_blank"
                className="noDecoration"
                href="https://api.whatsapp.com/send?phone=60127960821"
              >
                012-7960821
              </a>
            </div>
          </footer>
        </div>
      </Col>
      <Col>
        <div
          style={{
            position: "relative",
            top: "10px",
            bottom: "10px",
            margin: "auto 0",
          }}
        >
          <div>
            <i className="fa fa-building"></i> :{" "}
            <a
              target="_blank"
              className="noDecoration"
              href="https://www.gofo.com.my"
            >
              Gofo © {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
