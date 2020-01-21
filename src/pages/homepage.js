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
            <Post title="title1" description="desc1" tag="tag1" />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post title="title2" description="desc2" tag="tag2" />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <Post title="title3" description="desc3" tag="tag3" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Homepage
