import HTTP from './http/http';
import { REQUEST_POSTS_URL, REQUEST_USERS_URL, REQUEST_SWAPI_URL } from './http/http.dictionary';

import Book from './book/book';
import Bookshelf from './book/bookshelf';

// PART 1

Promise.all([REQUEST_POSTS_URL, REQUEST_USERS_URL].map(HTTP.get))
  .then(data => console.log('get', data));

HTTP.put(`${REQUEST_USERS_URL}/1`, {
  name: 'mega boss'
})
  .then(response => console.log('post', response));

HTTP.put(`${REQUEST_POSTS_URL}/1`, {
  title: 'hey, yo'
})
  .then(response => console.log('put', response));

HTTP.delete(`${REQUEST_USERS_URL}/1`)
  .then(response => console.log('delete', response));

(async () => {
  const person = await HTTP.get(`${REQUEST_SWAPI_URL}/1`);
  const starships = await Promise.all(person.starships.map(HTTP.get));
  console.log(starships);
})();

// PART 2

const myCoolBook = new Book({ name: 'Old dude', age: 100 });

const { name, age } = myCoolBook.character;
myCoolBook.story[0] =
  `Once there was a miller ${name} who was poor ${age} years old man, but who had a beautiful daughter.`;
myCoolBook.story[1] =
  `Now it happened that he had to go and speak to the king, and he said to him, "I have a daughter who can spin straw into gold."`;
myCoolBook.story[2] =
  `The king said ${name}, "That is an art which pleases me well, bring her tomorrow to my palace, and I will put her to the test."`;

for (const line of myCoolBook.story) {
  console.log(line);
}

// PART 3

const myAwesomeBook = new Book({ name: 'Small Prince', age: 6 });

myAwesomeBook.story[0] =
  `Once when ${myAwesomeBook.character.name} was ${myAwesomeBook.character.age} years old he saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest.`;
myAwesomeBook.story[1] =
  `It was a picture of a boa constrictor in the act of swallowing an animal.`;

const bookshelf = new Bookshelf([myCoolBook, myAwesomeBook]);

for (const iterator of bookshelf.read()) {
  console.log(iterator);
}