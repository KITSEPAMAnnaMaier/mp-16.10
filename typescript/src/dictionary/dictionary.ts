import IDictionary from './dictionary.interface';

export default class Dictionary<TValue> implements IDictionary<TValue> {
  private _dictionary: { [key: string]: TValue } = {};
  private _count: number = 0;

  private isDictionaryHasProp(key: string): boolean {
    return this._dictionary.hasOwnProperty(key);
  }

  add(key: string, value: TValue): void {
    if (!this.isDictionaryHasProp(key)) {
      this._count++;
    }
    this._dictionary[key] = value;
  }

  count(): number {
    return this._count;
  }

  containsKey(key: string): boolean {
    return this.isDictionaryHasProp(key);
  }

  item(key: string): TValue {
    if (this.isDictionaryHasProp(key)) {
      return this._dictionary[key];
    }
  }

  remove(key: string): boolean {
    const isItemRemoved: boolean = delete this._dictionary[key];
    if (isItemRemoved) {
      this._count--;
    }
    return isItemRemoved;
  }
}
