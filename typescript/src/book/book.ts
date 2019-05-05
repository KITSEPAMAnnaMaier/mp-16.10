import PaperBase from '../paper/paper';
import { IBook, Author } from './book.interface';

export default class Book extends PaperBase implements IBook {
  authors: Author[];

  constructor(title: string, country: string, published: Date, authors: Author[]) {
    super(title, country, published);
    this.authors = authors;
  }

  getPaper(): string {
    return `${this.title} is a book.`;
  }
}
