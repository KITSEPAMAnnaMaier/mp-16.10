import Book from './book/book';
import Dictionary from './dictionary/dictionary';

const author = {
  firstName: 'George',
  lastName: 'Martin',
  DOB: new Date('September 20, 1948'),
};

const book = new Book('A Game of Thrones', 'United States', new Date('August 1, 1996'), [author]);
console.log(book.getPaper(), book);

const dictionary = new Dictionary<number>();
dictionary.add('a', 1);
dictionary.add('b', 2);
console.log(dictionary.count());

if (dictionary.containsKey('a')) {
  console.log(dictionary.item('a'));
}
