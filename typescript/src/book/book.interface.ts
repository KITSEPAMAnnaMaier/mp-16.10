import Paper from '../paper/paper';

interface IBook extends Paper {
  authors: Author[];
}

interface Author {
  firstName: string;
  lastName: string;
  DOB: Date;
}

export {
  IBook,
  Author,
};
