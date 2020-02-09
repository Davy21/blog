import React from "react"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#182628",
          color: "white",
          height: "100%",
        }}
      >
        <Col className="text-center">
          {" "}
          <div
            style={{
              padding: "10px 0 10px 0",
              textAlign: "left",
            }}
          >
            <h6>Contacts</h6>
            <footer>
              <div>
                <i className="fa fa-github"></i>{" "}
                <a
                  target="_blank"
                  className="noDecoration"
                  rel="noopener noreferrer"
                  href="https://github.com/Davy21"
                >
                  Davy21
                </a>
              </div>
              <div>
                <i className="fa fa-envelope"></i>{" "}
                <a className="noDecoration" href="mailto:wei122193@gmail.com">
                  wei122193@gmail.com
                </a>
              </div>
              <div>
                <i className="fa fa-whatsapp"></i>{" "}
                <a
                  target="_blank"
                  className="noDecoration"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=60127960821"
                >
                  012-7960821
                </a>
              </div>
            </footer>
          </div>
        </Col>
        <Col className="text-center">
          {" "}
          <div
            style={{
              padding: "10px 0 10px 0",
              textAlign: "left",
            }}
          >
            <h6>Why blog ?</h6>
            This blog will be a platform where I share my perspective,opinion,
            experience as well as my software engineering's journey.
          </div>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#182628",
          color: "white",
        }}
      >
        <Col>
          <hr
            style={{
              border: "1px solid white",
            }}
          />
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#182628",
          fontSize: "12px",
          color: "white",
          padding: "0 0 10px 0",
        }}
      >
        <Col className="text-center">
          <a
            target="_blank"
            className="noDecoration"
            rel="noopener noreferrer"
            href="https://www.gofo.com.my"
          >
            Copyright © {new Date().getFullYear()} Gofo
          </a>
        </Col>
      </Row>
    </>
  )
}

export default Footer
