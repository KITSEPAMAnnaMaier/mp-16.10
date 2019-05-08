import Book from './book';

export default class Bookshelf {
  books: Book[];

  constructor(books) {
    this.books = books;
  }

  *read() {
    for (let i = 0; i < this.books.length; i++) {
      const book: Book = this.books[i];
      const storyLength: number = Object.keys(book.story).length;

      for (let line = 0; line < storyLength; line++) {
        yield book.story[line];
      }
    }
  }
}