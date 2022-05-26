//// Intern Technical Test
console.log("###Intern Technical Test");
// Question 1
const array = [];

const digital = "Digital";
const dynamic = "Dynamic";

for (let i = 1; i <= 100; i++) {
  //   if (i % 5 === 0 && i % 3 === 0) {
  if (i % (5 * 3) === 0) {
    array.push(digital + dynamic);
  } else if (i % 5 === 0) {
    array.push(dynamic);
  } else if (i % 3 === 0) {
    array.push(digital);
  } else {
    array.push(i);
  }
}

const consoleFriendly = array
  .map((item, index) => `  ${index + 1}: ${item}`)
  .join("\n");

console.log("#Question 1");
console.log(consoleFriendly);

function renderP1Q1() {
  const parentEl = document.querySelector(".p1q1");
  const markup = array
    .map((item, index) => `<text>${index + 1}: ${item}</text>`)
    .join("");

  parentEl.insertAdjacentHTML("afterbegin", markup);
  document
    .querySelector(".p1q1-comment")
    .insertAdjacentHTML("afterbegin", `<h3>Is that a pattern I see? </h3>`);
}

renderP1Q1();

// interesting optimization array.push([first 15]) results and pop 5 to get to 100
////////

// Question 2
let inputQ2 = "aa4zzz123sss8ahh6ggg9";

console.log("#Question 2 input:", inputQ2);

function question2(question, appearsOnce) {
  const inputArray = Array.from(inputQ2);
  const trimmedArray = inputArray.reduce((accumulate, current) => {
    if (accumulate.includes(current)) return accumulate;

    const currentAppearsOnce =
      inputQ2.length - inputQ2.replaceAll(current, "").length === 1;

    if (currentAppearsOnce === appearsOnce)
      return accumulate.toString() + current;

    return accumulate;
  }, "");

  console.log(`#Question ${question}: `, trimmedArray);

  return `${trimmedArray}`;
}

// Question 2 a)
// question2("2a", true);

// Question 2 b)
// question2("2b", false);

function renderP1Q2() {
  const parentEl = document.querySelector(".p1q2");
  const markup = `        
    <form id="form-q2">
      <label for="inputQ2">Input Text</label>
      <input
        type="text"
        id="inputQ2"
        name="inputQ2"
        value="${inputQ2}"
      />
      <br />
      <div>Question 2a once: ${question2("2a", true)}</div>
      <div>Question 2b many: ${question2("2b", false)}</div>
      <input type="button" onclick="formQ2()" value="Try new input">
    </form>
    `;

  parentEl.innerHTML = ""; //clear previous markup
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
renderP1Q2();

function formQ2() {
  const formEl = document.getElementById("inputQ2");
  if (inputQ2 == formEl.value) return;

  inputQ2 = formEl.value;

  console.log("#Question 2 input:", inputQ2);

  renderP1Q2();
}

////////

////Intern Test
console.log("###Intern Test");
// Question 1
function question1Fn(numberOfRows, string) {
  console.log("#Question 1 Row No:", numberOfRows);
  const array = [];
  const reversedData = [];

  for (let i = 0; i < numberOfRows; i++) {
    const str = string;
    let spaceAmount = numberOfRows + i;
    const stringAmount = str.repeat(i * 2 + 1);
    const paddedString = stringAmount.padStart(spaceAmount);
    array.push(paddedString);

    // conditional to not double log the middle value in the reversedData Array
    if (i !== numberOfRows - 1) reversedData.unshift(paddedString);
    console.log(paddedString);
  }

  reversedData.forEach((iterator) => {
    array.push(iterator);
    console.log(iterator);
  });

  return array;
}
// question1Fn(8, "*");
let diamondAmount = 8;
let diamondChar = "*";

function renderP2Q1() {
  const parentEl = document.querySelector(".p2q1");
  // where should I type check?
  const diamondMarkup = question1Fn(+diamondAmount, diamondChar.toString())
    .map((item) => `<pre style="margin: auto">${item}</pre>`)
    .join("");
  const markup = `
    <label for="diamondAmount">Input No of rows</label>
    <input
      type="text"
      id="diamondAmount"
      name="diamondAmount"
      value="${diamondAmount}"
    />
    <br>

    <label for="diamondChar">Input wanted Integer</label>
    <input
      type="text"
      id="diamondChar"
      name="diamondChar"
      value="${diamondChar}"
    />
  <br>

  <input type="button" onclick="p2q2ClickHandler()" value="Try new input">
  <div style="margin-top: 12px;">
  ${diamondMarkup}
  </div>
  `;

  parentEl.innerHTML = ""; //clear previous markup
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
renderP2Q1();

function p2q2ClickHandler() {
  const rowAmountEl = document.getElementById("diamondAmount");
  const rowCharEl = document.getElementById("diamondChar");

  diamondAmount = rowAmountEl.value;
  diamondChar = rowCharEl.value;

  renderP2Q1();
}
////////

// Question 2
function renderP2Q2() {
  const parentEl = document.querySelector(".p2q2");
  const markup = `
    <div>I designed the database in excel to visualize it in a way I'm more comfortable with</div>
    <div>I used DBeaver as my database administration tool and used SQLite as my relational database</div>
  `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
}
renderP2Q2();
////////

// Question 3
function renderP2Q3() {
  const parentEl = document.querySelector(".p2q3");
  const markup = `
    <div>Question 3a) refer to Question 1 </div>
  `;
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
renderP2Q3();
////////

// Question 4
console.log("Question 4");

let a = 10;
let b = 5;

// I have to call the function here to keep the original a and b values
renderP2Q4();

console.log("a =", a, "b =", b);
a = a * b;
console.log("a = a * b =", a);
b = a / b;
console.log("b = a / b =", b);
a = a / b;
console.log("a = a / b =", a);
console.log("a =", a, "b =", b);

function renderP2Q4() {
  const parentEl = document.querySelector(".p2q4");
  const aO = a;
  const bO = b;

  const aN = a;

  const markup = `
    <div>Original a=${aO} b=${bO}</div>
    <div>Flipped a=${bO} b=${aO}</div>
  `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
}
////////

// Question 5
/////sql parameters
/////entity framework
/// what is a SQL injection in asp .net web forms
/// example of sql injection attack
/// how to prevent sql injection attack
function renderP2Q5() {
  const parentEl = document.querySelector(".p2q5");
  const markup = `
    <ul>
      <li>Google search: "what is a SQL injection in asp .net web forms"</li>
      <li>Google search: what ever I learn while reading through the previous and feel I need more knowledge</li>
      <li>Google search: "example of sql injection attack"</li>
      <li>Google search: "how to prevent sql injection attack"</li>
    </ul>
    <div>##Unfinished answer</div>
  `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
}
renderP2Q5();

////////
