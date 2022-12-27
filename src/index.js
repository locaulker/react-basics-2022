import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

// data
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
]

/**
 * 1. parent component
 * 2. map() function iterates over array elements
 * 3. includes <Book /> components with props
 */
const BookList = () => {
  return (
    <section className="booklist">
      {books.map(book => {
        const { img, title, author, id } = book
        return <Book key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

// child component that is called in the parent component
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
