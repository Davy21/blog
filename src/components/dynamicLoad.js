import { withPrefix } from "gatsby"

export default function pageLoader(pathname) {
  switch (pathname) {
    case withPrefix("/"):
      return ""
    case withPrefix("/post/"):
      return import("../styles/post.css")
  }
}
