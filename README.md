# Assertions

Basic assertions examples with many JS frameworks including `ChaiJS`, `ShouldJS`, `Assert` (from NodeJS) and `ExpectJS`

## Assert.js for testing (Node built-in)

Assert module provides a way of testing expressions - to 0, false, assertion failure caused and the program is terminated, some methods are:

  - assert() - check if a value is true, same as assert.ok()
  - deepEqual() - check if two values are equal
  - deepStrictEqual() - check if two values are equal using the strict equal operation (===)
  - equal() - Check if two values are equal, using the equal operator (==)
  - fail() - throws an assertion error
  - ifError() - throws a specified error, if the specified error evaluates to true
  - notDeepEqual() - check if two values are not equal

## ExpectJS for testing

Expect lets you write better assertions

When you use expect, you write assertions similarly to how you would say them.

  - Example: I expect this value to be equal to 3
  - Example: I expect this array to contain 3

Expect is a more compact alternative to Chai

## ShouldJS

Should is an expressive, readable, framework agnostic assertion library. The main goal of this library are to be expressive and to be helpful.

It helps your test code clean and your error messages helpful

## ChaiJS

Chai is a BDD/TSS assertion library for node and the browser
 - that can be delightfully paired with any JS testing framework

Chai has several interfaces that allow the developer to choose the most comfortable

The chain-capable BDD styles provide an expressive language and readable style, while the TDD assert style
provides a more classical feel

## Usage

Run the `npm test` command

## Credits

 - [David E Lares](https://twitter.com/davidlares3)

## License

 - [MIT](https://opensource.org/licenses/MIT)
