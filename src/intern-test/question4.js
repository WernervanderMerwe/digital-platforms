class Question4 {
  constructor() {}

  a = 10;
  b = 5;

  renderP2Q4 = () => {
    console.log("Question 4");
    let a = this.a;
    let b = this.b;
    const parentEl = document.querySelector(".p2q4");
    let markup = `
        <label for="q4a">Input value of a</label>
        <input
          type="number"
          id="q4a"
          name="a"
          value="${a}"
        />
        <br>
        
        <label for="q4b">Input value of b</label>
        <input
          type="number"
          id="q4b"
          name="b"
          value="${b}"
        />
        <br>
        <input type="button" id="p2q4Button" value="Try new input">
      `;
    markup += `<div style="margin-top: 12px;">Original a=${a} b=${b}</div>`;

    console.log("a =", a, "b =", b);
    a = a * b;
    console.log("a = a * b =", a);
    markup += `<div>&nbsp; a = a * b = ${a}</div>`;
    b = a / b;
    console.log("b = a / b =", b);
    markup += `<div>&nbsp; b = a / b = ${b}</div>`;
    a = a / b;
    console.log("a = a / b =", a);
    console.log("a =", a, "b =", b);

    markup += `<div>&nbsp; a = a / b = ${a}</div>`;
    markup += `<div>Flipped a=${a} b=${b}</div>`;

    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);

    const p2q4ButtonEl = document.querySelector("#p2q4Button");
    p2q4ButtonEl.addEventListener("click", this.p2q4ClickHandler);
  };

  p2q4ClickHandler = () => {
    const aEl = document.getElementById("q4a");
    const bEl = document.getElementById("q4b");

    this.a = aEl.value;
    this.b = bEl.value;
    this.renderP2Q4();
  };
}
export default new Question4();
