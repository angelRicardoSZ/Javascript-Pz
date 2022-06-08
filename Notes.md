# Notes

## Basics

### Variables

- Var: Is used in all JavaScript code from 1995 to 2015.  Optionally initializing it with a value. 

  Variable declaration

  ```javascript
  var nameOfVariable;
  ```

  initialization

  ```javascript
  nameOfVariable = someValue;
  ```

  ```javascript
  var elements = ["item1", "item2"];
  var person = {
      name: "name1",
      age: 22
  }
  ```

- const: declare variables that will never be modified. A const variable must be assigned when it is declared. As a general rule, always declare a variable with `const` unless you know that the value will change.

  ```javascript
  const name = value;
  ```

- let: declares a block scope variable, which can optionally be initialized with some value. Allows you to declare variables by limiting their scope to the block, declaration, or expression where it is being used.a unlike the var keyword which defines a global or local variable in a function regardless of the scope of the block.	

Var vs let

```javascript
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // ¡same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
// llamamos a las funciones
varTest();
letTest();
```

## Functions

- Declarative Functions: We use the reserved word function at the beginning to be able to declare the function

```javascript
console.log('Person')  // hoisiting is applied 
function nameFunction(name) {
	console.log(`Hola ${name}`);
}
nameFunction('Person');
```

- Function expression: the declaration starts with the reserved word var, where a variable will be generated that will save an anonymous function.

  ```javascript
  console.log(nameOfFunction("asda")) // hoisiting is not applied 
  var nameOfFunction = function(name){
      console.log(`Hola ${name}`)
  }
  nameOfFunction(‘Angel’);
  ```

Differences: 

To declarative functions hoisting is applied, and to the expression of function, no. Since hoisting only applies in the reserved words var and function.

## Arrow functions

Is a compact alternative function, but is limited and can´t be used in all situations

```javascript
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
```

Main differences

- Arrow functions don't have their own bindings to [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method)
- Arrow functions don't have access to the [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target) keyword.
- Arrow functions aren't suitable for [`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods, which generally rely on establishing a [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- Arrow functions cannot be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor).
- Arrow functions cannot use [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield), within its body

When arrow functions improve code

Transforming an array

```javascript
const words = ['word1', 'word2', 'word3'];
const downcasedWords = words.map(word => word.toLowerCase());
```

Promise

```javascript
this.someFunction()
    .then((result) => {
    	this.storeResult(result);
});
```

Object transformations

```javascript
export default {
  computed: {
    ...mapState({
      results: state => state.results,
      users: state => state.users,
    });
  }
}
```

## Loops

- for loop

```javascript
for (var i=0; i < stop; i++) {
	/* code */
}
```

- For ... of

```javascript
for (var item of array) {
	/* code */
}
```

- while

```javascript
while (condition)
  sentencia
```

## Objects

```javascript
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020,
detail: function(){
    /*code*/
}
}
```

generating function

```javascript
function SomeObject(property1, property2){
	this.property1 = property1;
	this.property2 = property2;
}
```

instance of generation function

```javascript
var Object1 = new SomeObject(property1, property2)
```

## Arrays

- **Filter**: creates a new array with all the elements that meet the condition implemented by the given function

```javascript
var newArray = array.filter(callback)
```

Example

```javascript
function cb(elemento) {
  return elemento >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(cb);
// result [12, 130, 44]
```

- **map**: creates a new array with the results of the indicated function call applied to each of its elements.

```javascript
var new_array = new_array.map(cb);
```

Example

```javascript
var someArticles = articles.map(function(article){
	return article.name;
})
```

- Find: 

  returns the value of the first element that passes a test.

  executes a function for each array element.

  returns `undefined` if no elements are found.

  Does not execute the function for empty elements.

  Does not change the original array.

  ```javascript
  array.find(condition)
  ```

- foreach: Executes the function one time for each element of the array

  ```javascript
  array.forEach()
  ```

- some: tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

  ```javascript
  some((element, index, array) => { /* ... */ } )
  some((element) => { /* ... */ } )
  some(function(element, index, array){ /* ... */ })
  ```

  Example

  ```javascript
  function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true
  ```

- Push: 

  Adds new items **to the end** of an array.

  Changes the length of the array.

  returns the new length.

  ```javascript
  array.push()
  ```

- shift:

  Removes **the first item** of an array.

  Changes the original array.

  Returns the shifted element

  ```javascript
  array.shift()
  ```

  pop: removes (pops) **the last element** of an array.

  changes the original array.

   returns the removed element.

  ```javascript
  array.pop()
  ```

## Callbacks

A callback is a function passed as an argument to another function.

```javascript
function DisplayerContent(content) {
  document.getElementById("SomeId").innerHTML = content;
}
function SumTwoNumbers(x, y, callback) {
  let sum = x + y;
  callback(sum);
}
SumTwoNumbers(5, 5, DisplayerContent);
```

We use callback in asynchronous functions

## Promise

A promise is used for asynchronous functions. The object can be: pending, fulfilled or reject

```javascript
let myPromise new Promise(function(resolve, reject) { 
    resolve()
    reject()
});
```

the we can consume the promise

```javascript
myPromise
	.then(
		function(value) {
			/* Succesfully*/
		}
	)
	.then(
		function(error) {
			/* Some error */
		}
	)
	.catch( error => {
		conole.error("error "+error)
	})
```

## Async - await

```javascript
async function asyncFunction(param) {
   /**/
}
```

Use the async function

```javascript
async function main() {
	await asyncFunction(param)
}
main()
```

