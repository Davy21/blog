import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: "10px",
        margin: "auto 0",
        color: "gray",
      }}
    >
      <footer>
        Gofo © {new Date().getFullYear()} | Business Enquiry :
        davy_cheng1221@yahoo.com
      </footer>
    </div>
  )
}

export default Footer
