//GET https://www.googleapis.com/books/v1/volumes?q={search terms}
// https://www.googleapis.com/books/v1/volumes?q=search+terms

export const getBooks = async (book) => {
    const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
    // console.log (responsePromise);
    const response = await responsePromise; // Response Object
    // console.log(response);
    const jsonResponse = await response.json();
   return jsonResponse.items;
    // console.log(jsonResponse);
    // const jsonResponse = await response.json();
    //  return jsonResponse.data;
    // console.log(jsonResponse);
};

// const bookInformation = (jsonResponse) => {
//    return jsonResponse.items.map((book) => {
//     bookTitle = book.volumeInfo.bookTitle;
//     bookDesc = book.volumeInfo.description;
//     bookAuthor = book.volumeInfo.authors;
//     bookImg = book.volumeInfo.imageLinks.thumbnail;
//     console.log(bookInformation(jsonResponse));
//     })
    
    
// } 