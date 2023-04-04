import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container grid gap-4  lg:grid-cols-4 sm:grid-cols-2">
      {books.map((book) => (
        <div className="relative duration-100 hover:-translate-y-2">
          <div>
            <img className="" src={book.image} alt="" />
          </div>
          <div className="bg-black text-gray-200 absolute inset-0 opacity-0 hover:opacity-70 duration-200 translate-y-2 flex flex-col py-4 px-6 rounded-lg shadow-2xl">
            <h4 className="text-2xl font-bold">{book.title}</h4>
            <p className="my-auto">{book.subtitle}</p>
            <p className="mt-auto">{book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
