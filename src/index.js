import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";
//Don't need extensions to import js files.
//default export  [Book] name can be anything.
import Book from './Book';

import {booksData} from './books';
//Special function starts with Capital letter.

function BookList(){
  return (
    <section className = 'booklist'>
      {
        booksData.map((book)=>{
          return <Book book = {book}></Book>;
        })
      }
    </section>
  )
}




//injects Greeting component into element that has id = root.
ReactDom.render(<BookList />, document.getElementById("root"));
