# Money Helpers

Use these **patterns** and **formatters** to help you manage money in your code.

## Installation

```bash
$ npm install --save money-helpers
# or
$ yarn add money-helpers
```

## Usage

### Pattern example

- Use patterns in your inputs

```js
const input = "a1f2as5123f6fh...515..5.1,5.25";
const patterned = pattern(input);
// => "1,251,236.25"
```

- Options for patterns

```js
const inputOptions = "a1f2as51..23f6fh,,,515,,5,15,25";
const patternedWithOptions = pattern(inputOptions, {
  lenght: 7,
  separator: ".",
});
// => "1.251.236,25"
```

### Formatter example

- Use formatters for show your money in your views

```js
const money = 1234567.89;
const formatted = format(money);
// => "$1,234,567.89"
```

- Options for formatters

```js
const formattedWithOptions = format(money, "PEN");
// => "S/ 1,234,567.89"
```

### Parser example

- Use parsers for parse your money into float number

```js
const parsed = parse("1,251,236.25");
// => 1251236.25
```

- Options for parsers

```js
const parsedWithOptions = parse("1.251.236,25", ".");
// => 1251236.25
```

## License

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)