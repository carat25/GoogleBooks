import { getBooks } from "./api.js";
import { createElementWithText, createElementWithImage } from "./dom.js";

const outputField = document.getElementById("output");

const createElementsFromResult = (books) => {
  books.map((book) => {
    //div container for the search results
    const divBook = document.createElement("div");
    divBook.classList.add("result-grid-display");

    createElementWithImage(
      book.volumeInfo?.imageLinks?.thumbnail,
      book.volumeInfo?.title,
      divBook
    );
    createElementWithText("h3", book.volumeInfo?.title, divBook);
    createElementWithText("h5", book.volumeInfo.authors, divBook);
    createElementWithText("p", book.volumeInfo.description, divBook);
    outputField.appendChild(divBook);
  });
};


const clearElements = () => {
  for (let i = outputField.childNodes.length - 1; i >= 0; i--) {
    outputField.removeChild(outputField.childNodes[i]);
  }
};

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputField = document.getElementById("input").value;
  const books = await getBooks(inputField); //returns an array of objects

    clearElements();
    createElementsFromResult(books);
  
});
