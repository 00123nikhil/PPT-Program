# MOCK TEST

## Question 3 | explain execution context in detail with diagram

Execution context is a fundamental concept in JavaScript that helps us understand how JavaScript code is executed. It consists of three main components: the Variable Environment, the Lexical Environment, and the "this" value.


1. `Variable Environment`: It is a place where variables and function declarations are stored during the execution of a JavaScript code block. The Variable Environment is represented by an object that contains two important parts:

   - Environment Record: It is an actual record of all the variables and function declarations in the current scope. It stores the identifier names and their corresponding values.

   - Outer Environment Reference: It is a reference to the parent or outer scope's Variable Environment. It is used to resolve variables in higher or outer scopes when they are not found in the current scope.

2. `Lexical Environment`: It is similar to the Variable Environment and contains similar components. It holds the information about the scope's variables and function declarations. The Lexical Environment is slightly different from the Variable Environment in how it handles the scope chain. It is represented by an object that contains two parts:

   - Environment Record: It is the same as the Environment Record in the Variable Environment, storing the variables and function declarations.

   - Outer Lexical Environment Reference: It is a reference to the parent or outer scope's Lexical Environment. It is used to resolve variables in higher or outer scopes when they are not found in the current scope.

3. `"this" value`: It refers to the context in which a function is called and provides access to the object on which a method is being invoked. The value of "this" is determined based on how a function is called. It can vary depending on the function invocation context, such as whether it is a regular function call, a method call, or an event handler.

`DIAGRAM AND EXPLAINATION`
![execution context](https://github.com/00123nikhil/PPT-Program_062023/assets/95076182/49d70bf5-2af4-4c6c-bbb8-61612c50e621)



In the diagram,  an Execution Context with the Variable Environment and the Lexical Environment. Each environment contains the Environment Record, which stores the variables and function declarations, and the Outer Environment Reference or Outer Lexical Environment Reference, which refers to the parent or outer scope's environment. The "this" value is also a part of the Execution Context, representing the context in which a function is called.

During the execution of JavaScript code, the JavaScript engine creates and manages multiple execution contexts, maintaining a stack-like structure called the "Execution Context Stack" or "Call Stack". Each time a function is called, a new execution context is created and pushed onto the stack.
