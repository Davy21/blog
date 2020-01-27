import React from "react"
import Layout from "../components/layout"
import { Row, Col, Image } from "react-bootstrap"

const Post = ({ location }) => {
  if (location.state) {
    const { image, title, content } = location.state
    return (
      <Layout>
        <Row>
          <Col>
            <div>
              <div className="text-center">
                <Image
                  className="thumbnail"
                  src={require(`../images/${image}`)}
                  rounded
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>{title}</h5>
            <p>{content}</p>
          </Col>
        </Row>
      </Layout>
    )
  } else {
    return <></>
  }
}

export default Post
