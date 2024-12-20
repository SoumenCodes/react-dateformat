# React DateFormat - A Simple Date Formatting Utility for React & Next.js 🎉✨📅

`react-dateformat` is a lightweight and easy-to-use utility for formatting dates in React and Next.js applications. It supports both short and full month names and allows custom date formats. 🌟📆🎈

## Installation 🚀�️📦

Install the package using npm:

```bash
npm install react-dateformat
```

Or with yarn:

```bash
yarn add react-dateformat
```

## Features 🌟🎯📋

- Supports various placeholders for formatting dates.
- Provides both short and full month names.
- Works seamlessly with React and Next.js.
- Lightweight and easy to use.

## Usage 📘🖋️💡

### Import the Function 📥📤✨

In your React or Next.js project, import the `formatDate` function:

```typescript
import { formatDate } from "react-dateformat";
```

### Examples 🌈📆⚡

#### Format with Short Month Name 🗓️✂️🧩

```typescript
const formattedDate = formatDate(new Date("2024-12-17"), "DD-month-YYYY");
console.log(formattedDate); // Output: 17-Dec-2024
```

#### Format with Full Month Name 📖📅🌕

```typescript
const formattedDate = formatDate(new Date("2024-12-17"), "DD-fullMonth-YYYY");
console.log(formattedDate); // Output: 17-December-2024
```

#### Format with Time ⏰🕒🔧

```typescript
const formattedDate = formatDate(
  new Date("2024-12-17T15:30:45Z"),
  "DD-MM-YYYY HH:mm:ss"
);
console.log(formattedDate); // Output: 17-12-2024 15:30:45
```

#### Custom Format ✨📅🔧️

You can combine any placeholders to create your own custom formats:

```typescript
const formattedDate = formatDate(new Date(), "YYYY/MM/DD - HH:mm");
console.log(formattedDate); // Output: 2024/12/17 - 15:45 (based on current date/time)
```

#### Format with Two-Digit Year (YY) ✂️⌐⏳

```typescript
const formattedDate = formatDate(new Date("2024-12-17"), "DD-MM-YY");
console.log(formattedDate); // Output: 17-12-24
```

#### Format with 12-Hour Time (hh) 🕑⏳🔄

```typescript
const formattedDate = formatDate(
  new Date("2024-12-17T15:30:45Z"),
  "DD-MM-YYYY hh:mm"
);
console.log(formattedDate); // Output: 17-12-2024 03:30
```

#### Format with AM/PM (at) ⌐☀️🌙

```typescript
const formattedDate = formatDate(
  new Date("2024-12-17T15:30:45Z"),
  "DD-MM-YYYY hh:mm at"
);
console.log(formattedDate); // Output: 17-12-2024 03:30 PM
```

## Placeholders 📖🔤🔑

| Placeholder | Description                    | Example Value |
| ----------- | ------------------------------ | ------------- |
| `YYYY`      | Full year                      | `2024`        |
| `YY`        | Two-digit year                 | `24`          |
| `MM`        | Month (zero-padded)            | `12`          |
| `DD`        | Day of the month (zero-padded) | `17`          |
| `HH`        | Hour (24-hour format)          | `15`          |
| `hh`        | Hour (12-hour format)          | `03`          |
| `mm`        | Minutes                        | `30`          |
| `ss`        | Seconds                        | `45`          |
| `at`        | AM/PM                          | `PM`          |
| `month`     | Short month name               | `Dec`         |
| `fullMonth` | Full month name                | `December`    |

## Contributing 🤝💡🔧

We welcome contributions! If you have suggestions, feature requests, or bug reports, please feel free to create an issue or open a pull request on [GitHub](https://github.com/your-username/react-dateformat). 📝💻🎉

## License 📜✔️🌍

This project is licensed under the MIT License. 🎓📜🔓

---

### Star the Repository ⭐🌟✨

If you find this package useful, please consider starring the repository on GitHub to help others discover it! 🌍📢💫

---

Happy Coding! Remember Your Developer Soumen 🎉💻✨
