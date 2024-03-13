import logo from './logo.svg';
import './App.css';
import { useState } from "react";
const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "The Magician's Nephew",
    author: "C. S. Lewis",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
  },
 ];

function App() {
  return (
    <div className="App">
      
      {books.map((book)=>(
        <NewBook {...book} />
        
      ))}
      
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(0);
 
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
 }


function NewBook({title, author}) {
return (
  <div>
    <h1>{title}</h1>
    <p>{author}</p>
    <LikeCounter />
  </div>
);
}




export default App;
