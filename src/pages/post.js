import React from "react"
import { Image } from "react-bootstrap"

const Post = ({ location }) => {
  if (location.state) {
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
  } else {
    return null
  }
}

export default Post
