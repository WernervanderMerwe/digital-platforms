console.log("###Intern Technical Test");

let digitalDevisible = 3;
let dynamicDevisible = 5;
let sumDevisibles = 0;

function getArray(digitalDevisible, dynamicDevisible) {
  sumDevisibles = digitalDevisible * dynamicDevisible;
  const array = [];

  const digital = "Digital";
  const dynamic = "Dynamic";

  for (let i = 1; i <= 100; i++) {
    //   if (i % 5 === 0 && i % 3 === 0) {
    if (i % (digitalDevisible * dynamicDevisible) === 0) {
      array.push(digital + dynamic);
    } else if (i % dynamicDevisible === 0) {
      array.push(dynamic);
    } else if (i % digitalDevisible === 0) {
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

  return array;
}

export default function renderP1Q1() {
  let returnedArray = getArray(digitalDevisible, dynamicDevisible);
  const parentEl = document.querySelector(".p1q1");
  let markup = `
    <p>Try more combinations to see something cool👀</p>
    <label for="digitalDevisible">Input smaller value for "Digital"</label>
    <input type="number" id="digitalDevisible" name="digitalDevisible" value="${digitalDevisible}" />
    <br />

    <label for="dynamicDevisible">Input bigger value for "Dynamic"</label>
    <input type="number" id="dynamicDevisible" name="dynamicDevisible" value="${dynamicDevisible}" />
    <br />
    <input type="button" id="p1q1Button" value="Try new input" />

    <ul
      style="
        display: grid;
        grid-template-rows: repeat(${sumDevisibles}, 1fr);
        grid-auto-flow: column;
      "
    >
  `;

  returnedArray
    .map((item, index) => (markup += `<text>${index + 1}: ${item}</text>`))
    .join("");

  markup += `</ul>`;

  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);

  const p1q1ButtonEl = document.querySelector("#p1q1Button");
  p1q1ButtonEl.addEventListener("click", p1q1ClickHandler);
}

function p1q1ClickHandler() {
  const digitalDevisibleEl = document.getElementById("digitalDevisible");
  const dynamicDevisibleEl = document.getElementById("dynamicDevisible");
  console.log(+digitalDevisibleEl.value, typeof +digitalDevisibleEl.value);
  console.log(+dynamicDevisibleEl.value, typeof +dynamicDevisibleEl.value);

  if (+digitalDevisibleEl.value * +dynamicDevisibleEl.value >= 75) {
    renderP1Q1();

    document.querySelector(".p1q1").insertAdjacentHTML(
      "afterbegin",
      `
    <div>Try values with a product of less than 75</div>
    `
    );
  } else if (+digitalDevisibleEl.value > +dynamicDevisibleEl.value) {
    renderP1Q1();

    document.querySelector(".p1q1").insertAdjacentHTML(
      "afterbegin",
      `
    <div>Digital needs to be smaller than Dynamic</div>
    `
    );
  } else {
    digitalDevisible = +digitalDevisibleEl.value;
    dynamicDevisible = +dynamicDevisibleEl.value;
    renderP1Q1();
  }
}
