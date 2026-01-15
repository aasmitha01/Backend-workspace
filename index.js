import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
  })
);

// SingleDouble style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble",
  })
);

// Round style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
  })
);
