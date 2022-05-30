class Question2 {
  inputQ2 = "aa4zzz123sss8ahh6ggg9";

  trimString = (question, appearsOnce) => {
    const inputArray = Array.from(this.inputQ2);
    const trimmedArray = inputArray.reduce((accumulate, current) => {
      if (accumulate.includes(current)) return accumulate;

      const currentAppearsOnce =
        this.inputQ2.length - this.inputQ2.replaceAll(current, "").length === 1;

      if (currentAppearsOnce === appearsOnce)
        return accumulate.toString() + current;

      return accumulate;
    }, "");

    console.log(`#Question ${question}: `, trimmedArray);

    return `${trimmedArray}`;
  };

  p1q2ClickHandler = () => {
    const formEl = document.getElementById("inputQ2");
    if (this.inputQ2 === formEl.value) return;

    this.inputQ2 = formEl.value;

    console.log("#Question 2 input:", this.inputQ2);

    // console.log(this.renderP1Q2());
    this.renderP1Q2();
  };

  renderP1Q2 = () => {
    const parentEl = document.querySelector(".p1q2");
    const markup = `        
      <form id="form-q2">
      <label for="inputQ2">Input Text</label>
      <input
          type="text"
          id="inputQ2"
          name="inputQ2"
          value="${this.inputQ2}"
      />
      <br />
      <div>Question 2a once: ${this.trimString("2a", true)}</div>
      <div>Question 2b many: ${this.trimString("2b", false)}</div>
      <input type="button" id="p1q2Button" value="Try new input">
      </form>
    `;

    parentEl.innerHTML = ""; //clear previous markup on rerender
    parentEl.insertAdjacentHTML("afterbegin", markup);

    // cannot declare this variable above the insertAdjacentHTML method because it doesn't exist before.
    const p1q2ButtonEl = document.querySelector("#p1q2Button");
    p1q2ButtonEl.addEventListener("click", this.p1q2ClickHandler);
  };
}

export default new Question2();
