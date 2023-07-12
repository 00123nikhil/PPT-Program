# Web Development Assignment 5 | Javascript

## Q.1 What’s difference between Synchronous and Asynchronous?

In JavaScript, the terms "synchronous" and "asynchronous" refer to different ways of executing code and handling tasks.

1. Synchronous Execution:

   - In synchronous execution, tasks are performed sequentially, one after another.
   - When a synchronous task is executed, the program waits until that task is completed before moving on to the next task.
   - Synchronous operations can block the execution of code, as they halt the program until the task is finished.
   - Synchronous operations are predictable and easier to understand, as they follow a linear flow.

2. Asynchronous Execution:
   - In asynchronous execution, tasks are performed concurrently or in the background, allowing the program to continue executing other tasks without waiting for the completion of the asynchronous task.
   - Asynchronous operations utilize callbacks, promises, or async/await functions to handle the results of the asynchronous task once it completes.
   - Asynchronous operations do not block the execution of code, which means other operations can proceed while waiting for the asynchronous task to finish.
   - Asynchronous operations are commonly used for tasks that involve waiting for external resources, such as fetching data from a server, reading files, or making API calls.

In JavaScript, asynchronous operations are crucial for building responsive and non-blocking applications, especially when dealing with tasks that might take a significant amount of time, such as network requests or file operations. By using asynchronous operations, JavaScript can continue executing other tasks while waiting for the asynchronous task to complete, improving the overall performance and user experience of the application.

## Q.2 Explain Web APIs ?

Web APIs (Application Programming Interfaces) are sets of rules and protocols that allow different software applications to communicate and interact with each other over the web. They provide a way for developers to access and utilize the functionality of other systems, services, or platforms, enabling the creation of powerful and integrated web applications.

1. **HTTP APIs**: These APIs define a set of rules and conventions for sending and receiving data over the web using the HTTP protocol. They enable communication between web servers and clients, allowing clients to retrieve data or perform actions on the server.

2. **RESTful APIs**: REST (Representational State Transfer) is an architectural style used for designing web services. RESTful APIs follow specific principles and conventions to provide access to resources using standard HTTP methods (GET, POST, PUT, DELETE). They are widely used for building scalable and interoperable web services.

3. **JSON-RPC and SOAP APIs**: These APIs facilitate remote procedure calls (RPC) over the web. They allow applications to invoke methods or functions on remote servers and retrieve the results. JSON-RPC uses JSON (JavaScript Object Notation) for data encoding, while SOAP (Simple Object Access Protocol) relies on XML (eXtensible Markup Language).

4. **WebSocket APIs**: WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. WebSocket APIs enable real-time, bidirectional communication between clients and servers, making them suitable for applications that require instant updates or chat functionality.

5. **Third-party APIs**: These APIs are provided by external services or platforms, allowing developers to access specific functionalities or data. Examples include social media APIs (e.g., Facebook, Twitter), mapping APIs (e.g., Google Maps), payment gateway APIs (e.g., PayPal), and weather data APIs (e.g., OpenWeatherMap).

Web APIs are typically accessed using HTTP requests, where the client sends a request to a specific endpoint URL provided by the API, and the server responds with the requested data or performs the requested action. APIs often require authentication using API keys, tokens, or other authentication mechanisms to ensure secure access to the resources.

Developers can integrate web APIs into their applications by making HTTP requests, parsing the responses, and utilizing the received data to enhance their own services or build new functionalities.

## Q.3 Explain SetTimeOut and setInterval

`setTimeout` and `setInterval` are JavaScript functions that allow you to schedule the execution of code after a certain delay or at regular intervals. They are commonly used for adding time-based behavior and creating timers in web applications.

1. **setTimeout**:

   - The `setTimeout` function is used to execute a specified function or code snippet after a specified delay (in milliseconds).
   - It takes two arguments: the function or code to be executed and the delay (in milliseconds) before execution.
   - Example:
     ```javascript
     setTimeout(() => {
       console.log("Delayed message");
     }, 2000);
     ```
     In this example, the code inside the arrow function will be executed after a delay of 2000 milliseconds (2 seconds).

2. **setInterval**:
   - The `setInterval` function is used to repeatedly execute a specified function or code snippet at a fixed interval.
   - It takes two arguments: the function or code to be executed and the interval duration (in milliseconds) between each execution.
   - Example:
     ```javascript
     setInterval(() => {
       console.log("Interval message");
     }, 1000);
     ```
     In this example, the code inside the arrow function will be executed repeatedly every 1000 milliseconds (1 second).

Both `setTimeout` and `setInterval` return a unique identifier (a numeric value) that can be used to stop/cancel the scheduled execution. The `clearTimeout` and `clearInterval` functions can be used to cancel the execution of the corresponding timer.

```javascript
const timeoutId = setTimeout(() => {
  console.log("Delayed message");
}, 2000);

clearTimeout(timeoutId);

const intervalId = setInterval(() => {
  console.log("Interval message");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
```

## Q.4 What are the ways we have to handle Async Code in JS?

In JavaScript, there are several ways to handle asynchronous code and ensure that it executes correctly. Here are some common techniques and patterns:

1. **Callbacks**: Callbacks are functions that are passed as arguments to asynchronous functions. They are invoked once the asynchronous operation completes. Callbacks can be used to handle the result or perform additional actions. However, nesting multiple callbacks can lead to callback hell and make the code difficult to read and maintain.

Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello pw wale ";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
```

2. **Promises**: Promises provide a more structured way to handle asynchronous operations. A promise represents the eventual completion (or failure) of an asynchronous operation and allows chaining of operations. Promises can be resolved with a value or rejected with an error, and you can attach callbacks using `.then()` and `.catch()` methods to handle the resolved value or error.

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Skillsets are important";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

3. **Async/await**: Async/await is a modern approach for handling asynchronous code. It allows you to write asynchronous code in a more synchronous-looking style, making it easier to read and reason about. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to pause the execution and wait for a promise to resolve.

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Good data is good or bad?";
      resolve(data);
    }, 1000);
  });
}

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
```

4. **Event-driven programming**: In event-driven programming, you can use event listeners and callbacks to handle asynchronous code. You define event handlers that are triggered when specific events occur. This approach is commonly used in browser APIs, such as handling button clicks or AJAX responses.

Example:

```javascript
document.getElementById("myButton").addEventListener("click", function () {});
```

## Q.5 What are Callbacks & Explain Callback Hell ?

Callbacks are functions that are passed as arguments to other functions and are executed at a later time, usually after an asynchronous operation completes. They allow you to define what should happen once a certain task is finished.

Callback Hell, also known as the Pyramid of Doom, is a term used to describe a situation where callbacks are nested inside each other in a way that results in deeply indented and hard-to-read code. This occurs when you have multiple asynchronous operations that depend on each other or need to be executed in a specific order.

```javascript
asyncFunction1(function (error, result1) {
  if (error) {
    console.error(error);
  } else {
    asyncFunction2(result1, function (error, result2) {
      if (error) {
        console.error(error);
      } else {
        asyncFunction3(result2, function (error, result3) {
          if (error) {
            console.error(error);
          } else {
          }
        });
      }
    });
  }
});
```

each asynchronous function requires a callback to handle its result or error. As more operations are added, the code becomes deeply nested, making it difficult to read and maintain. It becomes challenging to understand the flow of execution, debug errors, and add new functionality.

Callback Hell can lead to several issues:

1. **Readability and maintainability**: The deeply nested structure makes the code hard to follow, leading to reduced readability. It becomes challenging to modify or extend the codebase, increasing the likelihood of introducing bugs.

2. **Error handling**: Error handling becomes complex as each nested callback needs its own error-checking and error-handling logic. It's easy to miss or mishandle errors, resulting in unexpected behavior.

3. **Code reuse**: Code reuse becomes difficult due to the tight coupling between functions and the callbacks. The callbacks often contain specific logic tailored to a particular context, making it harder to reuse the code in other scenarios.

To mitigate Callback Hell, several patterns and techniques have emerged, such as using Promises, async/await syntax, or modularization. These alternatives provide more structured and readable ways to handle asynchronous code, reducing the nesting and improving code maintainability.

Here's an example using Promises to avoid Callback Hell:

```javascript
asyncFunction1()
  .then((result1) => {
    return asyncFunction2(result1);
  })
  .then((result2) => {
    return asyncFunction3(result2);
  })
  .then((result3) => {})
  .catch((error) => {
    console.error(error);
  });
```

In this example, Promises are used to chain the asynchronous operations in a more linear and readable manner. Each `.then()` represents the next step in the sequence, and errors are handled with `.catch()`. This approach avoids excessive nesting and improves the readability and maintainability of the code.

## Q.6 What are Promises & Explain Some Three Method of Promise

Promises are objects in JavaScript that represent the eventual completion (or failure) of an asynchronous operation and allow you to handle the result or error once the operation finishes. Promises provide a more structured and flexible way to handle asynchronous code compared to traditional callback-based approaches.

Promises have three states:

1. **Pending**: The initial state of a promise. It means that the asynchronous operation is still in progress and has not yet been fulfilled or rejected.

2. **Fulfilled**: The state of a promise when the asynchronous operation is successfully completed. It means that the promise has resolved with a value, and you can access that value using the `.then()` method.

3. **Rejected**: The state of a promise when the asynchronous operation encounters an error or fails. It means that the promise has been rejected with an error, and you can handle that error using the `.catch()` method.

Promises have several methods to handle the resolution or rejection of the asynchronous operation. Here are three important methods:

1. **`.then()`**: The `.then()` method is used to handle the fulfillment (successful completion) of a promise. It takes one or two callback functions as arguments: the first one is the fulfillment handler, which is executed when the promise is fulfilled, and the second one is the optional rejection handler, which is executed if the promise is rejected.

Example:

```javascript
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

2. **`.catch()`**: The `.catch()` method is used to handle the rejection (failure) of a promise. It takes a single callback function as an argument, which is executed when the promise is rejected. It is commonly used to catch and handle any errors that occur during the asynchronous operation.

Example:

```javascript
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

3. **`.finally()`**: The `.finally()` method is used to specify a callback function that should be executed regardless of whether the promise is fulfilled or rejected. It allows you to perform cleanup tasks or finalize operations.

Example:

```javascript
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise completed");
  });
```

## Q.7 What’s Async & Await Keyword in JavaScript

The `async` and `await` keywords are part of the modern JavaScript syntax introduced in ECMAScript 2017 (ES8) and are used for handling asynchronous code in a more synchronous-like manner. They provide a cleaner and more readable approach to working with Promises.

1. **Async Functions**:

   - An async function is a function that returns a Promise implicitly. It allows you to write asynchronous code using a more synchronous style, making the code easier to understand and maintain.
   - To define an async function, you prepend the `async` keyword before the function declaration.
   - Example:
     ```javascript
     async function fetchData() {
       return result;
     }
     ```

2. **Await Expression**:

   - The `await` keyword can only be used inside an async function. It pauses the execution of the async function until the Promise is resolved and returns the resolved value.
   - By using `await`, you can write asynchronous code in a sequential and blocking manner, as if it were synchronous.
   - Example:

     ```javascript
     async function processData() {
       const result1 = await fetchData1();
       const result2 = await fetchData2(result1);
       return result2;
     }
     ```

   - In the example above, `fetchData1` and `fetchData2` are functions that return Promises. The `await` keyword is used to pause the execution of `processData` until each Promise is resolved, ensuring that the subsequent lines of code are executed in the correct order.

   - If a Promise is rejected when using `await`, an error will be thrown. You can handle this using try-catch blocks or by using `.catch()` on the Promise itself.

Async/await offers several benefits:

- **Readability**: The code looks more synchronous and easier to understand, as it follows a linear flow, reducing the nesting and indentation levels.
- **Error handling**: Errors can be handled using try-catch blocks, making it simpler to manage and respond to exceptions.
- **Variable scoping**: Variables declared with `await` have a limited scope within the async function, reducing the potential for naming conflicts and accidental reassignment.
- **Sequential and parallel execution**: You can control the order of execution by using `await`, ensuring that asynchronous operations are performed one after another. Additionally, you can execute multiple asynchronous operations in parallel by storing multiple Promises and awaiting them together using `Promise.all()`.

## Q.8 Explain Purpose of Try and Catch block

The `try` and `catch` blocks are used in JavaScript for handling and managing exceptions or errors that may occur during the execution of code. They provide a way to gracefully handle and recover from errors, preventing the program from abruptly terminating.

1. **Error Handling**: The primary purpose of the `try` and `catch` blocks is to catch and handle errors or exceptions that might occur during the execution of code. When an error occurs within the `try` block, the execution is immediately transferred to the corresponding `catch` block.

2. **Preventing Program Termination**: By wrapping potentially error-prone code within a `try` block, you can prevent the program from crashing or terminating unexpectedly. Instead of the entire program stopping, the error is caught and managed, allowing the program to continue its execution.

3. **Graceful Recovery**: The `catch` block provides an opportunity to handle the error in a controlled manner. It allows you to log the error, display error messages to users, perform alternative actions, or take any necessary steps to recover from the error condition.

4. **Stack Tracing**: When an error is caught in the `catch` block, it often includes a stack trace. The stack trace provides information about the sequence of function calls and execution flow that led to the error. It can be useful for debugging and identifying the root cause of the error.

Here's an example that demonstrates the use of `try` and `catch` blocks:

```javascript
try {
  const result = someFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error);
}
```

In this example, any error that occurs within the `try` block will be caught by the corresponding `catch` block. You can provide custom error-handling logic within the `catch` block, such as logging the error message or taking appropriate actions based on the error type.

## Q.9 Whats fetch in JavaScript?

- Fetch is a built-in function that allows you to make network requests to fetch resources from a server. It is a modern alternative to the older XMLHttpRequest object for making HTTP requests.

- The fetch function returns a Promise that resolves to the Response object representing the response to the request. The Response object provides several methods and properties to handle the response data.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

In this example, we fetch data from the "https://api.example.com/data" URL. The response is checked for errors using the `ok` property of the Response object. If the response is not successful, an error is thrown. If the response is OK, we parse the response as JSON using the `json()` method, and then the data is logged to the console.

Fetch supports various HTTP methods like GET, POST, PUT, DELETE, etc. You can also customize the request headers, send data in the request body, and handle different types of responses (JSON, text, blobs, etc.) using the options available with the fetch function.

**Use Cases of Fetch**

1. Making API Requests: Fetch is commonly used to make API requests to fetch data from servers. It can handle various types of requests such as GET, POST, PUT, DELETE, etc. You can specify the URL, request headers, request body, and handle the response data accordingly.

2. Data Retrieval: Fetch can be used to retrieve data from remote servers and incorporate it into your application. For example, you can fetch data from a JSON API and display it on a webpage, or fetch data from a backend server to update the state of a client-side application.

3. File Downloads: Fetch can be used to download files from servers. By specifying the URL of a file, you can fetch it and save it locally using techniques like Blob objects or the FileReader API.

4. Image Loading: Fetch can be used to load images from a server. By fetching image files, you can dynamically update the source of an image element in your web application.

5. Form Submission: Fetch can handle form submissions by sending data to a server. You can fetch a URL with the appropriate request method (e.g., POST) and include form data in the request body to submit it to the server.

6. Error Handling: Fetch allows you to handle errors and network-related issues gracefully. You can use the `catch()` method on the Promise returned by fetch to catch and handle errors that may occur during the request, such as network failures, server errors, or malformed responses.

7. Authentication and Authorization: Fetch can be used to send authentication tokens or cookies along with requests, allowing you to authenticate and authorize user actions with the server.

8. Real-Time Updates: Fetch can be used in combination with other techniques like setInterval or WebSocket to create real-time updates in your application. You can periodically fetch data from the server to keep your application synchronized with the latest information.

## Q.10 How do you define an asynchronous function in JavaScript using async/await?

To define an asynchronous function in JavaScript using the `async/await` syntax, you need to use the `async` keyword before the function declaration. This indicates that the function will contain asynchronous code and will return a Promise. Within the function body, you can use the `await` keyword to pause the execution of the function until a Promise is resolved.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

- In this example, the `fetchData()` function is defined as an asynchronous function using the `async` keyword. Inside the function, we use `await` to pause the execution and wait for the Promises to resolve.

- The `fetch` function is awaited, which means the execution of `fetchData()` will pause until the response is received from the server. If the response is not successful (`response.ok` is false), an error is thrown.

- Next, the `response.json()` method is awaited to parse the response data as JSON. The parsed data is then logged to the console.

- If any errors occur during the execution of the `async` function, they can be caught using a `try/catch` block. The `catch` block will handle any errors that occur within the `try` block, including errors thrown in the `await` statements.

- Using `async/await` syntax can make asynchronous code more readable and easier to understand, as it allows you to write asynchronous logic in a more synchronous-looking manner.
