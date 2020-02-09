import React from "react"
import { Card } from "react-bootstrap"

const QuoteOfTheDay = () => {
  return (
    <Card border="warning">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Live as if you were to die tomorrow. Learn as if you were to live
            forever.
          </p>
          <footer className="blockquote-footer">Mahatma Gandhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default QuoteOfTheDay
