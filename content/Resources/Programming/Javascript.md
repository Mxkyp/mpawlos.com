---
  title: JavaScript
  tags: 
    - Technical
---

## Simply
Lightweight interpreted multi-paradigm language with functions that are treated like variables with Lexical scope. 

## important stuff
1. fetch() to make api calls.
2. 
## weird things
1. using **let** makes the variable **block scoped**
2. White spaces are recognized as text in strings. **For example this will store a newline**.
```js
  let email = `
`
```
3. We can add a variable to a string by using ${variable}}
4. We have **first class functions** meaning that we can store them in a variable

```js
  let helloWorld = function() {
    console.log("Hello World!")
  };
  helloWorld(); // prints hello world
```
5. You can call a function before declaring it, but ya can't if you want to store it in a variable.

```js
// 1. Perfectly fine
helloWorld(); 
function helloWorld(){...}

// 2. Absolutely illegal 
helloWorld(); 
let helloWorld = function(){...};
```
6. There is something called arrow function for shortening the declaration of a function using statements.
```js
  const hello = somebody => `Hello ${sombody}`;
  hello(Mark); // Hello Mark!

  const computeRectangle = (a, b) => {
    if(a >= 0 && b >= 0){
      return a * b;
    }
  };
```
7. If you want to return an object you need to put the expression in a parentheses
```js
  const person = (name, surname) => ({
    name: name,
    surname: surname
  });
```
8. **using this in a arrow method is complicated**
9. You can **destructurize** an object, turning **its member variable** into local variables.
```js
  const sandwich => ({
    ham: 'big',
    cheese: 'orange',
    topings: ['tomato','cucumber']
  });

  let { ham, cheese } = sandwich;
  console.log(ham); // big

  ham = 'small'
  console.log(sandwich.ham); // big
  console.log(ham); // small
```
10. There is also the reverse
```js
  const name = 'Annapurna';
  const height = 8091;

  const peak = { name, height };
  
  console.log(peak); // { name: 'Annapurna', height: 8091 }
```
11. There is a **seperation operator(...)** 
