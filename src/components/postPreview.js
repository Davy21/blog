import React from "react"
import { Link } from "gatsby"
import { Button, Image } from "react-bootstrap"

const PostPreview = ({ title, description, tag, image, content }) => {
  return (
    <Link
      to="/post/"
      state={{
        image,
        title,
        content,
      }}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div>
        <div className="text-center">
          <Image
            className="thumbnail"
            src={require(`../images/${image}`)}
            rounded
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

export default PostPreview
