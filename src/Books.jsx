import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container grid gap-4  lg:grid-cols-4 sm:grid-cols-2">
      {books.map((book) => (
        <Book book={book} key={book.isbn13} />
      ))}
    </div>
  );
};

export default Books;
