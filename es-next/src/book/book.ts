import { Hero } from './book.interfaces'

export default class Book {
  character: Hero;
  story = {
    [Symbol.iterator]: () => {
      const storyLength: number = Object.keys(this.story).length;
      let line: number = 0;

      return {
        next: (): IteratorResult<string> => (
          line < storyLength
            ? { value: this.story[line++], done: false }
            : { value: undefined, done: true }
        )
      }
    }
  };

  constructor(character: Hero) {
    this.character = character;
  }
}