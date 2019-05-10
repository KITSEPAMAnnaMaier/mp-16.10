## TypeScript

```
npm install
npm start
```

These commands will setup you live reloading development server.

```
Implement the interface for (any) DTO (Data Transfer Object) from the back-end
and create a model based on it
```

Take a look at `book/book.interface.ts`. A class `Book` in `book/book.ts` was created based on `IBook` interface.

```
Implement the inheritance of an abstract class
```

Class `Book` extends abstract class `PaperBase` from `paper/paper.ts`. This class has abstract method `getPaper` which is implemented in the child class.

```
Implement generic construction
```

Class `Dictionary` from `dictionary/dictionary.ts` has generic type paprameter `TValue`. This class implements some basic methods of the dictionary data structure.
