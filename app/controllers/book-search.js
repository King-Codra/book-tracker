import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookSearchController extends Controller {
  @tracked showPopup = false;

  @action
  // Dropdown menu for different types of "add book" functionality
  toggleDropdown(bookIsbn) {
    let dropdown = document.getElementById(`dropdown-${bookIsbn}`);

    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  }

  @action
  // Add book functionality which adds the selected book to "My books"
  addBook(book) {
    let books = JSON.parse(localStorage.getItem('myBooks')) || [];

    //   Check for duplicate (TESTING MODE)
    // const bookAdded = books.some((storedBook) => storedBook.isbn === book.isbn);
    // if (bookAdded) {
    //   console.log('Book is already in My Books');
    //   return;
    // }

    // Check for duplicate (API Mode)
    const bookAdded = books.some((storedBook) => storedBook.id === book.id);
    if (bookAdded) {
      console.log('Book is already in My Books');
      return;
    }

    books.push(book);
    localStorage.setItem('myBooks', JSON.stringify(books));
    // displayStoredBooks();
    this.showPopup = true;
    setTimeout(() => (this.showPopup = false), 3000); // Popup disappears after 3 seconds
    console.log(book);
  }

  @action
  // Function that adds the book to the "Wishlist"
  addToWishlist(book) {
    console.log(book);
  }

  @action
  // Positioned in the dropdown menu, will allow the user to specify when the book is read and add the book to "My books" with specified info
  addPreviouslyRead(book) {
    let dropdown = document.getElementById(`dropdown-${book.isbn}`);

    console.log(book);
    dropdown;
  }
}
