# TypeScript
This style guide follows the [general](./general.md) format and rules, and extends the
[JavaScript](./javascript.md) styleguide.

This style guide can be implemented using [tslint-config-unicorn-science](https://github.com/justinlettau/tslint-config-unicorn-science).

1. [General](#general)
2. [Naming](#names)
2. [Types](#types)

## General

### File Names

**Do** use all lowercase file names with a `.ts` extension.

## Names

**Do** name classeses, interfaces, enums names as `UpperCamelCase`.
(tslint: [class-name](https://palantir.github.io/tslint/rules/class-name/))

**Do** name interfaces with a capital letter I prefix.
(tslint: [interface-name](https://palantir.github.io/tslint/rules/interface-name/))

```js
// do
interface IPerson {
    // ...
}
```

**Avoid** adding protected and private members to interfaces.

**Avoid** prefixing private properties with `_`.

```js
// avoid
class Animal {
    private _move(): void {
        // ..
    }
}
```

## Types

**Do** prefer explicit type delcarations over infered types.

```js
// avoid
let collection = [3, 6, 9];
```

**Do** explicitly define the return type of functions.

```js
// avoid
function myFn() {
    // ...
}
```

**Do** type arrays as `type[]`, instead of `Array<type>`.

```js
// do
let collection: string[] = ['first', 'second'];
```

```js
// avoid
let collection: Array<string> = ['first', 'second'];
```

**Avoid** use of `any` type.
(tslint: [no-any](https://palantir.github.io/tslint/rules/no-any/))

```js
// avoid
let hello: any = 'world';
```

**Do** type class method modifiers.

```js
// do
class Animal {
    public walk(): void {
        /// ...
    }
}
```

```js
// avoid
class Animal {
    walk(): void {
        /// ...
    }
}
```
