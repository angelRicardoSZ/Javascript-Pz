# Notes

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

