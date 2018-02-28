# evaluation-functional-js-3

Exercises to evaluate students about basic functional programming in JavaScript.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

## Exercises

### Exercise 1

Implement the function `sortProduct(input)` in file **_src/exercise1.js_** where the input is an array of products with a property with the property dateAdded in UNIX timestamp (milliseconds) format.

The function should filter product before year 2000, sort by date and group by product.

You don't understand what you need to do ?

Don't stress tests are written in file **_test/exercise1.test.js_** to explain the behaviour of the function.

To implement the function, you should do in a functional way WITHOUT using Lodash or any another FP library.

But you cloud use the moment library to manipulate dates.

- :point_right: [`moment()`](https://momentjs.com/docs/#/parsing/unix-timestamp-milliseconds/)
- :point_right: [`year()`](https://momentjs.com/docs/#/get-set/year/)
- :point_right: [`month()`](https://momentjs.com/docs/#/get-set/month/)

All tests describe in file **_test/exercise1.test.js_** should pass with success, and it's forbidden to change this file.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 1"