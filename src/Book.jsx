import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="relative duration-100 hover:-translate-y-2">
        <div>
          <img className="" src={book.image} alt="" />
        </div>
        <div className="bg-black text-gray-200 absolute inset-0 opacity-0 hover:opacity-70 duration-200 translate-y-2 flex flex-col py-4 px-6 rounded-lg shadow-2xl">
          <h4 className="text-2xl font-bold">{book.title}</h4>
          <p className="my-auto">{book.subtitle.substring(0, 45)}...</p>
          <p className="mt-auto">{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
