# JavaScript
This style guide follows the [general](./general.md) format and rules.

This style guide can be implemented using [eslint-config-unicorn-science](https://github.com/justinlettau/eslint-config-unicorn-science).

1. [General](#general)
1. [Naming](#naming)
1. [Formatting](#formatting)
1. [Language Features](#language-features)
1. [Other](#other)

## General

### File Names

**Do** use all lowercase file names with a `.js` extension.

### File Encoding

**Do** encode all files in UTF-8.

### JSDoc

**Do** use [JSDoc](http://usejsdoc.org/) on all all classes, fields, and methods.

## Naming

### Use of Restricted Names

**Avoid** shadowing restricted names.
(eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names))

```js
// avoid
let undefined = 'hello';
```

### Renaming Assignments

**Avoid** renaming import, export, and destructured assignments to the same name.
(eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename))

```js
// do
import { config } from './config';
```

```js
// avoid
import { config as config } from './config';
```

### Constructor Names

**Do** begin constructor names with a capital letter.
(eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap))

```js
// do
function Animal () {}
var dog = new Animal();
```

```js
// avoid
function animal () {}
var dog = new animal();
```

### Names

**Do** give descriptive names.

**Do** name local variables, packages, methods, and parameters as `lowerCamelCase`.
(eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase))

**Do** name classes, interfaces, enums, and typedef names as `UpperCamelCase`.

**Do** name enums as singular nouns.

**Do** name enums items and constants items as `CONSTANT_CASE`.

**Do** name non-constant field names (static or otherwise) as `lowerCamelCase`.

```js
// do
function myFunction () { }
var myVar = 'hello';
```

```js
// avoid
function my_function () { }
var my_var = 'hello';
```

**Avoid** using abbreviations ambiguous or unfamiliar to readers outside your project, and do not
abbreviate by deleting letters within a word.

**Why?** it's more important to make your code immediately understandable by a new reader.

```js
var priceCountReader;   // no abbreviation
var numErrors;          // "num" is a widespread convention
var numDnsConnections;  // most people know what "DNS" stands for
```

```js
// avoid
var n;                     // meaningless
var nErr;                  // ambiguous abbreviation
var wgcConnections;        // only your group knows what this stands for
var pcReader;              // lots of things can be abbreviated "pc"
var cstmrId;               // eletes internal letters
var kSecondsPerDay;        // do not use Hungarian notation
```

## Formatting

### Quotes

**Do** use single quotes for strings, except to avoid escaping.
(eslint: [`quotes`](http://eslint.org/docs/rules/quotes))

```js
// do
console.log('hello world');
```

**Avoid** mixing quoted and unquoted keys.

```js
// avoid
{
  a: 82,
  'b': 83,
}
```

### Multiline Strings

**Avoid** using multiline strings.
(eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str))

```js
// avoid
const message = 'Hello \
                world';
```

### Semicolons

**Do** always use semicolons.
(eslint: [`semi`](http://eslint.org/docs/rules/semi))

```js
// do
window.alert('hi');
```

```js
// avoid
window.alert('hi')
```

### Block Padding

**Avoid** padding within blocks.
(eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks))

```js
// do
if (user) {
    const name = getName();
}
```

```js
// avoid
if (user) {

    const name = getName();

}
```

### Object Properties Newlines

**Do** maintain consistency of newlines between object properties.
(eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline))

```js
// do
const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' };

const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
};
```

```js
// avoid
const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'
};
```

### Function Expression Parentheses

**Avoid** unnecessary parentheses around function expressions.
(eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens))

### Line Wrapping

**Do** wrap code and comments at 80 characters.

**Do** place breaks after the symbol  when a line is broken. This does not apply to the dot (.),
which is not actually an operator. A method or constructor name stays attached to the open
parenthesis (() that follows it. A comma (,) stays attached to the token that precedes it.

```js
// do
this.foo =
    foo(
        firstArg,
        1 + someLongFunctionName()
    );
```

```js
// avoid
this.foo = foo(firstArg, 1 +
    someLongFunctionName());
```

### Function Arguments

**Do** put all function arguments on the same line when doing so would not exceed the 80-column limit.

**Do** put each argument on its own line, indented with four spaces, in a multiline setting.

```js
// do
doSomething(arg1, arg2, arg3);

doSomething(
    veryDescriptiveArgumentNumberOne,
    veryDescriptiveArgumentTwo,
    tableModelEventHandlerProxy,
    artichokeDescriptorAdapterIterator
) {
    // ...
}
```

### Blank Lines

**Avoid** multiple blank lines.
(eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines))

```js
// do
var value = 'hello world';
console.log(value);
```

```js
// avoid
var value = 'hello world';


console.log(value);
```

### Variable Declarations

**Do** write each declaration in its own statment.
(eslint: [`one-var`](http://eslint.org/docs/rules/one-var))

```js
// do
var silent = true;
var verbose = true;
```

```js
// avoid
var silent = true, verbose = true;

var silent = true,
    verbose = true;
```

### Commas

**Avoid** trailing commas.
(eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle))

```js
// avoid
var obj = {
    message: 'hello',
};
```

**Do** place commas at the end of the current line.
(eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style))

```js
// do
var obj = {
    foo: 'foo',
    bar: 'bar'
};
```

```js
// avoid
var obj = {
    foo: 'foo'
    ,bar: 'bar'
};
```

### Dot

**Do** place the dot on the same line as the property.
(eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location))

```js
// do
console
    .log('hello');
```

```js
// avoid
console.
    log('hello');
```

### Conditional Assignments

**Do** wrap conditional assignments with additional parentheses.
(eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign))


```js
// do
while ((m = text.match(expr))) {
    // ...
}
```

```js
// avoid
while (m = text.match(expr)) {
    // ...
}
```

### Ending Line

**Do** end all files with a newline.
(elint: [`eol-last`](http://eslint.org/docs/rules/eol-last))

## Formatting - Braces

### Braces

**Do** use curly braces.
(eslint: [`curly`](http://eslint.org/docs/rules/curly))

```js
// do
if (options.quiet !== true) {
    console.log('done');
}
```

```js
// avoid
if (options.quiet !== true) console.log('done');

if (options.quiet !== true)
    console.log('done');
```

**Do** keep else statements on the same line as their curly braces.
(eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style))

```js
// do
if (condition) {
    // ...
} else {
    // ...
}
```

```js
// avoid
if (condition) {
    // ...
}
else {
    // ...
}
```

## Formatting - Whitespace

### Whitespace.

**Avoid** using tabs.
(eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs))

**Do** use 4 spaces for indentation.
(eslint: [`indent`](http://eslint.org/docs/rules/indent))

**Avoid** mixing spaces and tabs for indentation.
(eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs))

```js
// do
function hello (name) {
    console.log('hi', name);
}
```

**Do** add a space between the `*` in `yeild` expressions.
(eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing))

```js
// do
yield * increment();
```

```js
// avoid
yield* increment();
```

**Do** add a space after keywords.
(eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing))

```js
// do
if (condition) { ... }
```

```js
// avoid
if(condition) { ... }
```

**Do** add a space before a function declaration's parentheses.
(eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren))

```js
// do
function name (arg) { ... }
run(function () { ... });
```

```js
// avoid
function name(arg) { ... }
run(function() { ... });
```

**Do** add a space between infix operators.
(eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops))

```js
// do
var x = 2;
var message = 'hello, ' + name + '!';
```

```js
// avoid
var x=2;
var message = 'hello, '+name+'!';
```

**Do** add a space after commas.
(eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing))

```js
// do
var list = [1, 2, 3, 4];
function greet (name, options) { ... }
```

```js
// avoid
var list = [1,2,3,4];
function greet (name,options) { ... }
```

**Do** add spaces inside single line blocks.
(eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing))

```js
// do
function foo () { return true; }
```

```js
// avoid
function foo () {return true;}
```

**Avoid** spaces between function identifiers and their invocations.
(eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing))

```js
// do
console.log('hello');
```

```js
// avoid
console.log ('hello');
```

**Do** add a space between colon and value in key value pairs.
(eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing))

```js
// do
var obj = { 'key': 'value' };
```

```js
// avoid
var obj = { 'key' : 'value' };
var obj = { 'key' :'value' };
var obj = { 'key':'value' };
```

**Avoid** adding a variable number of additional spaces the goal of making certain tokens appear
directly below certain other tokens on previous line.

```js
// avoid
var obj = {
    tiny:   42,
    longer: 435,
};
```

**Avoid** irregular whitespace.
(eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace))

```js
// avoid
function myFunc () /*<NBSP>*/{}
```

**Avoid** using multiple spaces, except for indentation.
(eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces))

```js
// do
const id = 1234;
```

```js
// avoid
const id =    1234;
```

**Avoid** multiple spaces in regular expression literals.
(eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces))

```js
// do
const regexp = /test {3}value/;
const regexp = /test value/;
```

```js
// avoid
const regexp = /test   value/;
```

**Avoid** whitespace at the end of a line.
(eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces))

**Avoid** whitespace before properties.
(eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property))

```js
// do
user.name;
```

```js
// avoid
user .name;
```

**Avoid** whitespace between spread operators and their expressions.
(eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing))

```js
// do
fn(...args);
```

```js
// avoid
fn(... args);
```

**Do** add a space after semicolons.

**Avoid** adding a space before semicolons.
(eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing))

```js
// do
for (let i = 0; i < items.length; i++) {...}
```

```js
// avoid
for (let i = 0 ;i < items.length ;i++) {...}
```

**Do** add a space before blocks.
(eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks))

```js
// do
if (admin) {...}
```

```js
// avoid
if (admin){...}
```

**Avoid** spaces inside parentheses.
(eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens))

```js
// do
getName(name);
```

```js
// avoid
getName( name );
```

**Do** add a space after unary operators.
(eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops))

```js
// do
typeof !admin;
```

```js
// avoid
typeof!admin;
```

**Do** use spaces inside comments.
(eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment))

```js
// do

// comment
/* comment */
```

```js
// avoid

//comment
/*comment*/
```

**Avoid** spacing in template strings.
(eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing))

```js
// do
const message = `Hello, ${name}`;
```

```js
// avoid
const message = `Hello, ${ name }`;
```

## Language Features

### Variables

**Do** declare all local variables with `const` or `let`, not `var`.

**Do** prefer `const`, unless a variables needs to be reassigned.

**Avoid** unused variables.
(eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars))

```js
// avoid
function myFunction () {
    var result = something();
}
```

### Error Parameter

**Do** handle the the `err` function parameter.
(eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err))

```js
// do
run(function (err) {
    if (err) throw err;
    window.alert('done');
})
```

```js
// avoid
run(function (err) {
    window.alert('done');
})
```

### Ternary Operator

**Do** place `?` and `:` on their own lines, in a multi-line setting.
(eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak))

```js
// do
var location = env.development ? 'localhost' : 'www.api.com';

var location = env.development
    ? 'localhost'
    : 'www.api.com';
```

```js
// avoid
var location = env.development ?
    'localhost' :
    'www.api.com';
```

### Constant Expressions

**Avoid** using constant expressions in conditions (except loops).
(eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition))

```js
// do
if (x === 0) {
    // ...
}

while (true) {
    // ...
}
```

```js
// avoid
if (false) {
    // ...
}
```

### Arguments

**Avoid** duplicate arguments in function definitions.
(eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args))

```js
// do
function sum (a, b, c) {
    // ...
}
```

```js
// avoid
function sum (a, b, a) {
    // ...
}
```

### Class members

**Avoid** duplicate name in class members.
(eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members))

```js
// avoid
class Dog {
    bark () {}
    bark () {}
}
```

### Exceptions

**Avoid** reassigning exceptions in `catch` clauses.
(eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign))

```js
try {
    // ...
} catch (e) {
    const newVal = 'new value';
}
```

```js
// avoid
try {
    // ...
} catch (e) {
    e = 'new value';
}
```

### Boolean Casts

**Avoid** unnecessary boolean casts.
(eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast))

```js
// do
const result = true;
if (result) {
    // ...
}
```

```js
// avoid
const result = true;
if (!!result) {
    // ...
}
```

### Nested Blocks

**Avoid** unnecessary nested blocks.
(eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks))

```js
// do
function myFunc () {
    myOtherFunc();
}
```

```js
// avoid
function myFunc () {
{
    myOtherFunc();
}
}
```

### New

**Avoid** `new` without assigning object to a variable.
(eslint: [`no-new`](http://eslint.org/docs/rules/no-new))

```js
// do
const character = new Character();
```

```js
// avoid
new Character();
```

### Constructors

**Avoid** using the `Function` constructor.
(eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func))

```js
// avoid
var sum = new Function('a', 'b', 'return a + b');
```

**Avoid** using the `Object` constructor.
(eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object))

```js
// avoid
let config = new Object();
```

**Avoid** using the `Symbol` constructor.
(eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol))

```js
// avoid
const foo = new Symbol('foo');
```

**Avoid** using primitive wrapper instances.
(eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers))

```js
// avoid
const message = new String('hello');
```

**Avoid** using `new require`.
(eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require))

```js
// avoid
const myModule = new require('my-module');
```

## Other

**Avoid** calling global object properties as functions.
(eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls))

```js
// avoid
const math = Math();
```

**Avoid** octal literals.
(eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal))

```js
// do
const num = '042';
```

```js
// avoid
const num = 042;
```

**Avoid** octal escape sequences in string literals.
(eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape))

```js
// avoid
const copyright = 'Copyright \251';
```

**Avoid** redeclaring variables.
(eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare))

```js
// do
let name = 'John';
name = 'Jane';
```

```js
// avoid
let name = 'John';
let name = 'Jane';
```

**Do** surrounded assignments in return statements with parentheses.
(eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign))

```js
// do
function sum (a, b) {
    return (result = a + b);
}
```

```js
// avoid
function sum (a, b) {
    return result = a + b;
}
```

**Avoid** assigning a variable to itself.
(eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign))

```js
// avoid
name = name;
```

**Avoid** comparing a variable to itself.
(esint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare))

```js
// avoid
if (score === score) {}
```

**Avoid** using the comma operator.
(eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences))

```js
// avoid
if (doSomething(), !!test) {}
```

**Avoid** sparse arrays.
(eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays))

```js
// avoid
let fruits = ['apple',, 'orange'];
```

**Avoid** template literal placeholders inside regular strings.
(eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string))

```js
// do
const message = `Hello ${name}`;
```

```js
// avoid
const message = 'Hello ${name}';
```

**Avoid** negating the left operand of relational operators.
(eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation))

```js
// avoid
if (!key in obj) {}
```

**Avoid** unnecessary use of escape.
(eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape))

```js
// avoid
let message = 'Hell\o';
```

**Avoid** using `with` statements.
(eslint: [`no-with`](http://eslint.org/docs/rules/no-with))

```js
// avoid
with (val) { ... }
```

**Do** use `isNaN()` when checking for `NaN`.
(eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan))

```js
// do
if (isNaN(price)) { }
```

```js
// avoid
if (price === NaN) { }
```

**Do** use a valid string to compare `typeof`.
(eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof))

```js
// do
typeof name === 'undefined';
```

```js
// avoid
typeof name === 'undefimed';
```

**Do** wrap Immediately Invoked Function Expressions (IIFEs).
(eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife))

```js
// do
const getName = (function () { }());
const getName = (function () { })();
```

```js
// avoid
const getName = function () { }();
```

**Avoid** Yoda conditions.
(eslint: [`yoda`](http://eslint.org/docs/rules/yoda))

```js
// do
if (age === 42) { }
```

```js
// avoid
if (42 === age) { }
```

**Avoid** starting a line with `(`, `[`, or `` ` ``.
(eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline))

```js
// do
;(function () {
    window.alert('ok');
}());

;[1, 2, 3].forEach(bar);

;`hello`.indexOf('o');
```

```js
// avoid
(function () {
    window.alert('ok');
}());

[1, 2, 3].forEach(bar);

`hello`.indexOf('o');
```
