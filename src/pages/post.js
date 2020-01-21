import React from "react"
import { Image } from "react-bootstrap"

const Post = ({ location }) => {
  const { image, title, content } = location.state
  return (
    <div>
      <div className="text-center">
        <Image
          className="thumbnail"
          src={require(`../images/${image}`)}
          rounded
        />
      </div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  )
}

export default Post
