import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

const Post = () => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div>
        <h5>#1 My definition on success</h5>
        <p>
          Everyone has its own definition of success. So, let's talk about it a
          little bit.
        </p>
        <div>
          <Button variant="outline-success">Self-Perspective</Button>
        </div>
      </div>
      <hr />
    </Link>
  )
}

export default Post
