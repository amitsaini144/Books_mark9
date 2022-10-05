import "./styles.css";
import { useState } from "react";
//DATABASE Book LIST
var Horror = [
  { bookName: "Pet Sematary", stars: "⭐ ⭐ ⭐ ⭐" },
  { bookName: "The Island of Doctor Moreau", stars: "⭐ ⭐ ⭐ ⭐ ⭐" },
  { bookName: "The Exorcist", stars: "⭐ ⭐ ⭐" }
];

var Fiction = [
  { bookName: "Where the Blue Sky Begins", stars: " ⭐ ⭐ ⭐ ⭐ ⭐" },
  { bookName: "The Maid by Nita Prose", stars: " ⭐ ⭐ ⭐ ⭐" },
  { bookName: " Violeta", stars: "⭐ ⭐ ⭐" }
];

var Mystery = [
  { bookName: "The Big Sleep", stars: "⭐ ⭐ ⭐ ⭐ ⭐" },
  { bookName: "Gone Girl", stars: "⭐ ⭐ ⭐" },
  { bookName: "The Postman Always Rings Twice", stars: "⭐ ⭐ ⭐ ⭐ ⭐" }
];

export default function App() {
  // useState for Updating the databse name by taking on button click
  const [presentList, newList] = useState(Horror);

  function btn1Handler(event) {
    newList(Horror);
  }
  function btn2Handler(event) {
    newList(Fiction);
  }

  function btn3Handler(event) {
    newList(Mystery);
  }
  return (
    <div className="App">
      <h1>📚 My Books</h1>
      <p>
        Checkout list of my favourite books.Select a genre and see the list of
        my favourite books.
        {/* -----Buttons ----*/}
      </p>
      <button onClick={btn1Handler}>Horror</button>
      <button onClick={btn2Handler}>Fiction</button>
      <button onClick={btn3Handler}>Mystery</button>
      <hr />

      <ul>
        {presentList.map((object, index) => {
          return (
            <span key={index}>
              <div class="listOfBook">
                <li>{object.bookName}</li>
                <li>{object.stars}</li>
              </div>{" "}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
