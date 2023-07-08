# Assignment 4 | Web Development | Javascript

## Q.1 Explain Hoisting in JavaScript

- Hoisting is a concept in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, even before the actual code execution takes place. This means that you can use variables and invoke functions before they are declared in your code.

However, it's important to note that hoisting only applies to variable and function declarations, not the initialization or assignment of values. Variable assignments are not hoisted.

1. `Variable Hoisting`: When variables are hoisted, the JavaScript engine moves their declarations to the top of the current scope. This allows you to use a variable before it's declared in your code. However, the value assigned to the variable is not hoisted, so if you try to access the variable before its initialization, it will have the value `undefined`. For example:

   ```javascript
   console.log(a); // undefined
   var a = 10;
   ```

   In this example, the `a` declaration is hoisted to the top, but its assignment of `10` is not hoisted. Therefore, when you try to access `a` before initialization, it will output `undefined`.

2. `Function Hoisting`: Similarly, function declarations are also hoisted. You can invoke a function before its declaration in your code. For example:

   ```javascript
   myFunction();

   function myFunction() {
     console.log("Hello, world!");
   }
   ```

   In this case, the `myFunction` declaration is hoisted to the top, so you can call it before its actual declaration.

3. `Block Scope Variables`: It's important to note that variables declared with `let` and `const`, which are block-scoped, are hoisted to the top of their block but not to the top of the containing function or global scope. However, they are not accessible before their declaration within their block scope.

   ```javascript
   console.log(a); // ReferenceError: Cannot access 'a' before initialization
   let a = 10;
   ```

   In this example, the `a` declaration is hoisted to the top of its block scope but not to the top of the containing scope. Trying to access it before its initialization will result in a `ReferenceError`.

## Q.2 Explain Temporal Dead Zone?

- The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to a specific region in the code where variables declared with `let` and `const` exist but are in an uninitialized state and cannot be accessed. It's a period of time between the creation (hoisting) of a variable and its actual initialization with a value.

- In the TDZ, any attempt to access or reference a variable before it is initialized will result in a `ReferenceError`. This behavior is different from variables declared with `var`, which are hoisted to the top of their scope and can be accessed before their initialization (although they will have the value `undefined`).

```javascript
console.log(a); // ReferenceError: Cannot access 'myVariable' before initialization
let a = 10;
```

- In this example, trying to access `a` before its initialization results in a `ReferenceError`. The TDZ exists from the start of the block until the point where `a` is assigned a value. Once the variable is initialized, it can be accessed normally.

- The Temporal Dead Zone helps enforce good coding practices and prevents the use of variables before they are properly initialized. It encourages developers to declare variables where they are intended to be used and avoids unexpected behaviors that may arise from accessing variables in an uninitialized state.

- To avoid the Temporal Dead Zone, it's recommended to declare variables with `let` and `const` as close to their usage as possible, ensuring they are initialized before accessing them. This helps improve code readability and reduces the chances of encountering runtime errors related to variable access before initialization.

## Q.3 Difference between var & let?

1. Scoping:

   - `var`: Variables declared with `var` are function-scoped. This means they are accessible within the function in which they are declared, regardless of block scopes (if statements or loops). They have a function-level scope.
   - `let`: Variables declared with `let` are block-scoped. They are only accessible within the block (enclosed by curly braces) in which they are declared. They have a block-level scope. Block scopes include if statements, loops, and any other blocks defined with curly braces.

2. Hoisting:
   - `var`: Variables declared with `var` are hoisted to the top of their enclosing scope during the compilation phase, which means you can access them before their declaration. However, the variable assignment is not hoisted, resulting in an initial value of `undefined` until the assignment is encountered.
   - `let`: Variables declared with `let` are also hoisted, but they remain in the Temporal Dead Zone (TDZ) until they are declared in the code. Accessing a variable in the TDZ results in a `ReferenceError`. The variable is only accessible and usable after its declaration and assignment in the code.

Here's an example that demonstrates the differences:

```javascript
console.log(myVar); // Outputs "undefined"
var myVar = 10;

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
```

- `myVar` is declared with `var`, and it is hoisted to the top of the scope. Thus, it can be accessed before its declaration, but it will have the value `undefined` until it is assigned `10`. On the other hand, `myLet` is declared with `let`, and accessing it before its declaration results in a `ReferenceError` due to the Temporal Dead Zone.

## Q.4 What are the major features introduced in ECMAScript 6?

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several significant features and improvements to the JavaScript language.

1. `let and const Declarations`: The `let` and `const` keywords were introduced for block-scoped variable declarations. `let` allows the creation of variables with block scope, while `const` declares constants that cannot be reassigned.

2. `Arrow Functions`: Arrow functions provide a concise syntax for defining functions. They have a lexical `this` binding and can omit the `function` keyword and return statement for single expressions.

3. `Classes`: ES6 introduced a class syntax that provides a more intuitive and convenient way to define objects and prototypes. Classes can have constructors, methods, and inheritance using the `extends` keyword.

4. `Template Literals`: Template literals allow the embedding of expressions inside string literals using backticks (`). They support multi-line strings, string interpolation, and expression evaluation.

5. `Destructuring Assignment`: Destructuring assignment provides a concise way to extract values from arrays or objects into variables. It allows you to assign values to multiple variables in a single statement.

6. `Default Parameters`: Default parameter values can be defined for function parameters. If a parameter is not provided when calling the function, its default value is used.

7. `Spread Syntax`: The spread syntax (`...`) allows the expansion of iterable objects (like arrays or strings) into multiple elements. It can be used for array concatenation, function arguments, and object copying.

8. `Rest Parameters`: Rest parameters allow the gathering of multiple function arguments into an array. It allows a function to accept a variable number of arguments.

9. `Modules`: ES6 introduced a standardized module system for JavaScript with the `import` and `export` keywords. Modules provide a way to organize and encapsulate code, making it more maintainable and reusable.

10. `Promises`: Promises provide a better way to handle asynchronous operations. They represent the eventual completion or failure of an asynchronous operation, allowing for more readable and structured asynchronous code.

11. `Enhanced Object Literals`: Object literals gained additional capabilities in ES6. They can have computed property names, shorthand method syntax, and the ability to define getters and setters for object properties.

## Q.5 What is the difference between let and const in ES6?

In ES6 (ECMAScript 2015) and later versions of JavaScript, `let` and `const` are two new ways to declare variables, offering some differences in their behavior.

1. `Variable Reassignment`:

   - `let`: Variables declared with `let` can be reassigned a new value. They are mutable and can be updated throughout the code.
   - `const`: Variables declared with `const` are constants and cannot be reassigned once they are initialized. They are immutable. Attempting to reassign a `const` variable will result in an error.

   ```javascript
   let a = 10;
   a = 20; // Valid reassignment

   const myConstant = 10;
   myConstant = 20; // Error: Assignment to a constant variable
   ```

2. `Block Scope`:

   - Both `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are declared. Blocks can be defined by curly braces `{}` in if statements, loops, or functions.
   - Block scope restricts the visibility and accessibility of variables to the block where they are defined, providing better control over variable lifetime and avoiding naming conflicts.

   ```javascript
   if (true) {
     let blockScoped = 10;
     const anotherConstant = 20;
   }

   console.log(blockScoped); // Error: blockScoped is not defined
   console.log(anotherConstant); // Error: anotherConstant is not defined
   ```

3. `Hoisting and Temporal Dead Zone (TDZ)`:

   - Both `let` and `const` are hoisted to the top of their block scope during the compilation phase. However, unlike variables declared with `var`, they remain in the Temporal Dead Zone (TDZ) until they are declared in the code.
   - Accessing `let` or `const` variables before their declaration within the TDZ results in a `ReferenceError`.

   ```javascript
   console.log(myVariable); // Error: Cannot access 'myVariable' before initialization
   let myVariable = 10;

   console.log(myConstant); // Error: Cannot access 'myConstant' before initialization
   const myConstant = 20;
   ```

4. `Global Object Property`:

   - Variables declared with `var` become properties of the global object (`window` in browsers, `global` in Node.js). This can cause unintended global namespace pollution.
   - `let` and `const` variables are not added as properties to the global object, enhancing code encapsulation and reducing the risk of naming conflicts.

   ```javascript
   var globalVar = 10;
   console.log(window.globalVar); // 10

   let localVar = 20;
   console.log(window.localVar); // undefined
   ```

## Q.6 What is template literals in ES6 and how do you use them?

- Template literals, introduced in ES6 (ECMAScript 2015), are an enhanced way of working with strings in JavaScript. They provide a more flexible and readable syntax for string interpolation, multiline strings, and embedding expressions within strings.

- Template literals are defined using backticks (` `) instead of single or double quotes. Here's an example of a basic template literal:

```javascript
const name = "alex ";
const message = `Hello, ${name}!`;

console.log(message);
```

In this example, the template literal is created with backticks. Within the template literal, you can use `${expression}` to embed expressions. The expression is evaluated and its result is inserted into the string.

Template literals offer several advantages over traditional string concatenation or interpolation methods:

1. String Interpolation: Expressions enclosed in `${}` within a template literal are automatically evaluated and their values are interpolated into the resulting string. This makes it easier and more concise to include variables or complex expressions within a string.

2. Multiline Strings: Template literals support multiline strings without the need for escape characters or concatenation. Line breaks and indentation are preserved within the template literal.

   ```javascript
   const multiline = `
   This is a multiline
   string using
   template literals.`;

   console.log(multiline);
   ```

3. Expression Evaluation: Template literals allow for the evaluation of expressions within the `${}` syntax. This can include variable references, mathematical calculations, function invocations, and more.

   ```javascript
   const a = 5;
   const b = 10;
   const result = `The sum of ${a} and ${b} is ${a + b}.`;
   console.log(result);
   ```

4. Tagged Templates: Template literals can be used with tag functions, which are functions that process the template literal before the final string is produced. The tag function can perform custom logic, modify the values, or format the resulting string.

   ```javascript
   function myTag(strings, ...values) {
     return modifiedString;
   }

   const name = "Alice";
   const age = 30;
   const processed = myTag`Hello, ${name}! You are ${age} years old.`;
   ```

## Q.7 What’s difference between map & forEach?

- Both `map()` and `forEach()` are higher-order functions in JavaScript that operate on arrays. They are used to iterate over the elements of an array and perform some operation on each element. However, there are some important differences between them.

1. `Return Value`:

   - `map()`: It returns a new array containing the results of applying a provided function to each element of the original array. It creates a new array by mapping each element based on the function's return value.
   - `forEach()`: It does not return anything. It simply executes a provided function once for each array element.

2. `Modifying the Original Array`:

   - `map()`: It does not modify the original array. Instead, it creates and returns a new array with the transformed values.
   - `forEach()`: It does not create a new array. It executes a provided function for each element in the array but does not modify the original array.

3. `Usage of Return Values`:
   - `map()`: Since it returns a new array, the return value can be assigned to a variable or used directly in further operations.
   - `forEach()`: It does not return anything, so its return value cannot be used directly. It is typically used when you want to perform some side effect, like logging or modifying external variables.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledMap = numbers.map((num) => num * 2);
console.log(doubledMap); // [2, 4, 6, 8, 10]

const doubledForEach = [];
numbers.forEach((num) => doubledForEach.push(num * 2));
console.log(doubledForEach); // [2, 4, 6, 8, 10]
```

- `map()` creates a new array `doubledMap` with each element of `numbers` doubled. On the other hand, `forEach()` pushes the doubled values directly into the existing `doubledForEach` array without creating a new array.

## Q.8 How can you destructure objects and arrays in ES6?

`Destructuring Arrays`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [a, b, ...rest] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```

- In the example above, `a` and `b` capture the first and second elements of the `numbers` array, respectively. The rest operator (`...rest`) allows you to capture the remaining elements of the array in the `rest` array.

`Destructuring Objects`:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Destructuring assignment
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);
```

- In the example above, the variables `name`, `age`, and `city` capture the corresponding properties of the `person` object.

- You can also assign destructured values to different variable names:

```javascript
const { name: personName, age: personAge } = person;
console.log(personName);
console.log(personAge);
```

- In this case, the properties `name` and `age` are assigned to variables `personName` and `personAge`, respectively.

`Destructuring with Default Values`:

```javascript
const person = {
  name: "John Doe",
  age: 30,
};

const { name, age, city = "Unknown" } = person;
console.log(name);
console.log(age);
console.log(city);
```

- In this example, the `city` property is not present in the `person` object, so the default value `'Unknown'` is assigned to the `city` variable during destructuring.

`Nested Destructuring`:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const {
  name,
  address: { city },
} = person;
console.log(name);
console.log(city);
```

- Here, the `city` property is destructured from the `address` property, which is nested within the `person` object.

`Destructuring in Function Parameters`:

```javascript
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
  name: "John Doe",
  age: 30,
};
printPerson(person);
```

- the `printPerson` function expects an object parameter with `name` and `age` properties. The destructuring syntax in the function parameter allows us to directly access those properties within the function body.

## Q.9 How can you define default parameter values in ES6 functions?

- In ES6 (ECMAScript 2015) and later versions of JavaScript, you can define default parameter values for function parameters. Default parameter values allow you to specify default values that will be used if the corresponding argument is not provided or is `undefined` when the function is called. Here's how you can define default parameter values in ES6 functions:

```javascript
function greet(name = "Anonymous", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet();
greet("John");
greet("Jane", "Hi");
greet(undefined, "Welcome");
```

- In the `greet` function above, the `name` parameter has a default value of `'Anonymous'`, and the `greeting` parameter has a default value of `'Hello'`. If the corresponding arguments are not provided or are `undefined`, the default values will be used instead.

- It's important to note that default parameter values are assigned when the function is called with `undefined` or without any argument. They do not override values that are explicitly passed as `null` or `undefined`. Here's an example to illustrate this:

```javascript
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5, 3));
console.log(multiply(5, undefined));
console.log(multiply(5, null));
console.log(multiply(5));
```

- In the `multiply` function above, the `b` parameter has a default value of `2`. When explicitly passing `undefined` for `b`, the default value of `2` is used. However, when passing `null`, the value is not treated as `undefined`, and the default value is not applied.

- It's worth noting that default parameter values are evaluated at the time the function is called, not at the time of function definition. This means that if the default value is an expression or a function call, it will be evaluated each time the function is called without providing a value for that parameter. Here's an example:

```javascript
function generateId() {
  return Math.floor(Math.random() * 1000);
}
function createUser(name, id = generateId()) {
  console.log(`Creating user: ${name}, ID: ${id}`);
}

createUser("John");
createUser("Jane");
```

- the `createUser` function defines a default value for the `id` parameter using the `generateId` function. Each time `createUser` is called without providing an `id`, a new ID will be generated by invoking `generateId()`.

- By using default parameter values, you can make your functions more flexible and provide sensible fallback values when certain arguments are omitted or `undefined`.

## Q.10 What is the purpose of the spread operator (...) in ES6?

- The spread operator (`...`) in ES6 (ECMAScript 2015) and later versions of JavaScript is a powerful feature that allows you to expand iterable objects, such as arrays or strings, into individual elements. It provides a concise and versatile way to manipulate arrays, create copies, merge arrays, and pass arguments to functions. Here are some common use cases of the spread operator:

1. `Copying Arrays`:

   ```javascript
   const originalArray = [1, 2, 3];
   const copiedArray = [...originalArray];
   console.log(copiedArray); // [1, 2, 3]
   ```

   - the spread operator is used to create a shallow copy of the `originalArray` by expanding its elements into a new array `copiedArray`. Modifying `copiedArray` will not affect the original array.

2. `Merging Arrays`:

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const mergedArray = [...array1, ...array2];
   console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
   ```

   - The spread operator can merge multiple arrays into a single array. In this example, the elements of `array1` and `array2` are expanded using the spread operator and concatenated into the `mergedArray`.

3. `Spreading String into Characters`:

   ```javascript
   const str = "Hello";
   const characters = [...str];
   console.log(characters); // ['H', 'e', 'l', 'l', 'o']
   ```

   - The spread operator can be used to split a string into an array of individual characters by expanding it with `...`.

4. `Function Arguments`:

   ```javascript
   function sum(a, b, c) {
     return a + b + c;
   }

   const numbers = [1, 2, 3];
   console.log(sum(...numbers)); // 6
   ```

   - The spread operator can be used to pass elements of an array as individual arguments to a function. It expands the array elements and matches them to the function parameters.

5. `Object Literal`:

   ```javascript
   const person = { name: "John", age: 30 };
   const modifiedPerson = { ...person, city: "New York" };
   console.log(modifiedPerson);
   // { name: 'John', age: 30, city: 'New York' }
   ```

   - The spread operator can be used to create a new object literal by merging properties from an existing object with new properties. In this example, a new property `city` is added to the `person` object using the spread operator.

6. `Cloning Objects`:
   ```javascript
   const originalObj = { x: 1, y: 2 };
   const clonedObj = { ...originalObj };
   console.log(clonedObj); // { x: 1, y: 2 }
   ```
   - Similar to copying arrays, the spread operator can be used to create a shallow copy of an object. It expands the properties of the original object into a new object.
