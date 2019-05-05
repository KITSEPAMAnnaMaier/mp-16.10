import Paper from './paper.interface';

export default abstract class PaperBase implements Paper {
  title: string;
  country: string;
  published: Date;

  constructor(title: string, country: string, published: Date) {
    this.title = title;
    this.country = country;
    this.published = published;
  }

  abstract getPaper(): string;
}
