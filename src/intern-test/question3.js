class question3 {
  inputPrice = 22.5;
  inputCashReceived = 100;

  cashRegister = () => {
    const parentEl = document.querySelector(".p2q3");
    let markup = `
        <div>Question 3b):</div>
        <label for="inputPrice">Input price</label>
        <input
          type="number"
          id="inputPrice"
          name="inputPrice"
          value="${this.inputPrice}"
        />
        <br>
        <label for="inputCashReceived">Input amount of cash received</label>
        <input
          type="number"
          id="inputCashReceived"
          name="inputCashReceived"
          value="${this.inputCashReceived}"
        />
      `;

    const change = (this.inputCashReceived - this.inputPrice).toFixed(2);
    let denomination = change;
    let denominationAmount = 0;
    const money = [200, 100, 50, 20, 10, 5, 2, 1, 0.5];

    // prettier-ignore
    markup += `<div>Change = ${
        change >= 1 ? 
        `R${change}` : 
        `${change * 100}c`
      }</div>`;
    markup += `<div>Denomination of change:</div>`;

    if (change < money[money.length - 1]) {
      denomination = 0;
      markup += `<div>No change needed</div>`;
    }

    money.forEach((money, _, arr) => {
      if (denomination >= money) {
        denominationAmount = Math.trunc(denomination / money);
        denomination -= denominationAmount * money;
        markup += `${
          money >= 1
            ? `<div>R${money} x ${denominationAmount}</div>`
            : `<div>${money * 100}c x ${denominationAmount}</div>`
        }`;
      }
    });

    markup += `<input type="button" id="p2q3Button" value="Try new input"></input>`;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("beforeend", markup);

    const p2q3ButtonEl = document.querySelector("#p2q3Button");
    p2q3ButtonEl.addEventListener("click", this.p2q3ClickHandler);
  };

  p2q3ClickHandler = () => {
    const priceEl = document.getElementById("inputPrice");
    const cashEl = document.getElementById("inputCashReceived");

    this.inputPrice = +priceEl.value;
    this.inputCashReceived = +cashEl.value;

    this.cashRegister();
  };

  renderP2Q3 = () => {
    const parentEl = document.querySelector(".p2q3");
    const markup = `
        <div>Question 3a) refer to Question 1 </div>
      `;
    parentEl.insertAdjacentHTML("afterbegin", markup);
  };
}

export default new question3();
