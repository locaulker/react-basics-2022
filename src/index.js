import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71m+Qtq+HrL._AC_UY327_FMwebp_QL65_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
)
const Title = () => <h2>Interesting Facts For Curious Minds</h2>
const Author = () => {
  return <h4>Jordan Moore</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
