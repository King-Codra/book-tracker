import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookSearchController extends Controller {
  @tracked showPopup = false;

  @action
  toggleDropdown(bookIsbn) {
    let dropdown = document.getElementById(`dropdown-${bookIsbn}`);

    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  }

  @action
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
  addToWishlist(book) {
    console.log(book);
  }

  @action
  addPreviouslyRead(book) {
    let dropdown = document.getElementById(`dropdown-${book.isbn}`);

    console.log(book);
    dropdown;
  }
}
