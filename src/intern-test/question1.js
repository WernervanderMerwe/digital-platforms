class Question1 {
  diamondAmount = 8;
  diamondChar = "*";

  question1Fn = (numberOfRows, string) => {
    console.log("#Question 1 Row amount:", numberOfRows);
    const array = [];
    const reversedData = [];

    for (let i = 0; i < numberOfRows; i++) {
      const str = string.toString();
      let spaceAmount = +numberOfRows + i;
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
  };

  renderP2Q1 = () => {
    const parentEl = document.querySelector(".p2q1");
    const diamondMarkup = this.question1Fn(this.diamondAmount, this.diamondChar)
      .map((item) => `<pre style="margin: auto">${item}</pre>`)
      .join("");
    const markup = `
          <label for="diamondAmount">Input No of rows</label>
          <input
            type="number"
            id="diamondAmount"
            name="diamondAmount"
            value="${this.diamondAmount}"
          />
          <br>
      
          <label for="diamondChar">Input wanted Integer</label>
          <input
            type="text"
            id="diamondChar"
            name="diamondChar"
            value="${this.diamondChar}"
          />
          <br>
      
          <input type="button" id="p2q1Button" value="Try new input">
          <div style="margin-top: 12px;">
            ${diamondMarkup}
          </div>
        `;

    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);

    const p2q1ButtonEl = document.querySelector("#p2q1Button");
    p2q1ButtonEl.addEventListener("click", this.p2q2ClickHandler);
  };

  p2q2ClickHandler = () => {
    const rowAmountEl = document.getElementById("diamondAmount");
    const rowCharEl = document.getElementById("diamondChar");

    this.diamondAmount = rowAmountEl.value;
    this.diamondChar = rowCharEl.value;

    this.renderP2Q1();
  };
}

export default new Question1();
