export default interface IDictionary<TValue> {
  add(key: string, value: TValue): void;
  count(): number;
  containsKey(key: string): boolean;
  item(key: string): TValue;
  remove(key: string): boolean;
}
