import { getBooks } from "./api.js";

const createElementWithText = (type, text, parent) => {
  const newElement = document.createElement(type);
  const textNode = document.createTextNode(text);
  newElement.className = "output-text";
  newElement.appendChild(textNode);
  parent.appendChild(newElement);
};

const outputField = document.getElementById("output");

const createElementWithImage = (url, altImg, parent) => {
  if (url !== undefined) {
  const bookImg = document.createElement("img");
  bookImg.className = "output-img";
  bookImg.setAttribute("src", url);
  bookImg.setAttribute("alt", altImg);
  parent.appendChild(bookImg);
  }
};

const createElementsFromResult = (books) => {
  books.map((book) => {
    //div container for the search results
    const divBook = document.createElement("div");
    divBook.classList.add("result-grid-display")

    createElementWithImage(
      book.volumeInfo?.imageLinks?.thumbnail,
      book.volumeInfo?.title,
      divBook
    );
    createElementWithText("h3", book.volumeInfo?.title, divBook);
    createElementWithText("h5", book.volumeInfo.authors, divBook);
    createElementWithText("p",  book.volumeInfo.description, divBook);
    outputField.appendChild(divBook);
  });
};

const clearElements = () => {
  for (let i = 0; i < outputField.childNodes.length; i++) {
    outputField.removeChild(outputField.childNodes[i]);
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputField = document.getElementById("input").value;
  const books = await getBooks(inputField); //returns an array of objects

  // createElementWithImage(books);
  clearElements();
  createElementsFromResult(books);
  console.log(books);
});
