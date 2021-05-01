import React from 'react';

const clickHandler = (e)=>{
  console.log(e);
  console.log(e.target);
  alert("Hello world");
}

const functionCallExample = (author) =>{
  console.log(author);
}

//Componenet
const Book = (props) => {
  const { id,img, title, author } = props.book;
  return (
    <article className="book" onMouseOver={()=>console.log(title)}>
      <img src={img} alt="" height="200" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Add to cart</button>
  {/* Below line [onClick] function will automaticall call on page load */}
      {/* <button type ="button" onClick= {functionCallExample(author)}></button> */}
<button type ="button" onClick= {()=>functionCallExample(author)}>Complex Exmple</button> 

    </article>
  );
};

export default Book