import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
}

const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
}

// const author = "Jordan Moore"
// const title = "Interesting Facts For Curious Minds"
// const img = "./images/book-1.jpg"

/*
// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2)
}
// arguments
someFunc("job", "developer")
*/

// This is the PARENT component
// props being PASSED from parent to child component
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

// This is the CHILD component
// props being RECEIVED from parent to child component
const Book = ({ img, title, author }) => {
  // console.log(props)
  // const { img, title, author } = props

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
