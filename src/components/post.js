import React from "react"
import { Link } from "gatsby"
import { Button, Image } from "react-bootstrap"

const Post = ({ title, description, tag }) => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div>
        <div className="text-center">
          <Image
            src={require("../images/gatsby-astronaut.png")}
            rounded
            responsive
          />
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
        <div>
          <Button variant="outline-success">{tag}</Button>
        </div>
      </div>
      <hr />
    </Link>
  )
}

export default Post
