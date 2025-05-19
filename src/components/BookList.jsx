import React, { useEffect, useState } from "react"

function BookList() {
const apiKey = import.meta.env.VITE_NYT_API_KEY;

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results.books)
        console.log(data)
      })
      .catch((error) => {
        console.error("Gagal fetch data buku:", error)
      })
  }, [])

  return (
    <div className="p-6 flex flex-col max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">NEW YORK TIMES BEST SELLERS</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.primary_isbn10} className="flex flex-col justify-center items-center bg-white shadow-md rounded p-4 hover:bg-violet-600">
            <img src={book.book_image} alt={book.title} className="w-[200px] h-[300px] mb-2" />
            <h3 className="font-semibold text-black text-lg">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList
