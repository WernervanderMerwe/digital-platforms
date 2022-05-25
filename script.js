//// Intern Technical Test
console.log("Intern Technical Test");
// Question 1
const question1El = document.querySelector(".p1q1");
const array = [];

const digital = "Digital";
const dynamic = "Dynamic";

for (let i = 1; i <= 100; i++) {
  //   if (i % 5 === 0 && i % 3 === 0) {
  if (i % (3 * 5) === 0) {
    array.push(digital + dynamic);
  } else if (i % 5 === 0) {
    array.push(dynamic);
  } else if (i % 3 === 0) {
    array.push(digital);
  } else {
    array.push(i);
  }
}

console.log(
  "Question 1",
  array.map((item, index) => `${index + 1}: ${item}`).join("\n")
);

// interesting optimization array.push([first 15]) results and pop 5 to get to 100
////////

// Question 2
const input = "aa4zzz123sss8ahh6ggg9";
const inputArray = Array.from(input);

function question2(question, appearsOnce) {
  const trimmedArray = inputArray.reduce((accumulate, current) => {
    if (accumulate.includes(current)) return accumulate;

    const currentAppearsOnce =
      input.length - input.replaceAll(current, "").length === 1;

    if (currentAppearsOnce === appearsOnce)
      return accumulate.toString() + current;

    return accumulate;
  }, "");

  console.log(`Question ${question}: `, trimmedArray);
}

// Question 2 a)
question2("2a", true);

// Question 2 b)
question2("2b", false); // false
////////

////Intern Test
console.log("Intern Test");
// Question 1
function question1Fn(numberOfRows, string) {
  console.log("Question 1:");
  const reversedData = [];

  for (let i = 0; i < numberOfRows; i++) {
    const str = string;
    let spaceAmount = numberOfRows + i;
    const stringAmount = str.repeat(i * 2 + 1);
    const paddedString = stringAmount.padStart(spaceAmount);

    // conditional to not double log the middle value in the reversedData Array
    if (i !== numberOfRows - 1) reversedData.unshift(paddedString);
    console.log(paddedString);
  }

  reversedData.forEach((iterator) => console.log(iterator));
}
question1Fn(8, "*");
////////

// Question 2
// 4th dot = hints

// Question 4
console.log("Question 4");
// Make a = 5
// Make b = 10

let a = 10;
let b = 5;

console.log("a =", a, "b =", b);

a = a * b;
b = a / b;
a = a / b;

// (a * b)/a

a;
b;
////////

// Question 5
/////sql parameters
/////entity framework
/// what is a SQL injection in asp .net web forms
/// example of sql injection attack
/// how to prevent sql injection attack
