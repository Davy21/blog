import React from "react"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <div
      className="pt-2"
      style={{
        backgroundColor: "#182628",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "930px", margin: "0 auto" }}>
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col>
            <div
              className="pl-3"
              style={{
                padding: "10px 0 10px 0",
              }}
            >
              <h6>Connect with me</h6>
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
          <Col>
            <div
              className="pl-3"
              style={{
                padding: "10px 0 10px 0",
              }}
            >
              <h6>Why blog ?</h6>
              This blog will be a platform where I share my perspective,
              opinion, experience as well as my software engineering's journey.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={{
                border: "0.3px solid white",
              }}
            />
          </Col>
        </Row>
        <Row
          style={{
            fontSize: "12px",
            padding: "0 0 15px 0",
          }}
        >
          <Col className="text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              className="noDecoration"
              rel="noopener noreferrer"
              href="https://www.gofo.com.my"
            >
              Gofo
            </a>
            . All Rights Reserved.
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
