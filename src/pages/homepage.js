import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Quote from "../components/quote"
import { Container, Row, Col } from "react-bootstrap"

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Container>
        <Row className="mt-2 mb-5">
          <Col className="text-center">
            <Quote />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Homepage
