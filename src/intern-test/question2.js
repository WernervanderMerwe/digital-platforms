export default function renderP2Q2() {
  const parentEl = document.querySelector(".p2q2");
  const markup = `
      <p>I designed the database in excel to visualize it in a way I'm more comfortable with</p>
      <p>I used DBeaver as my database administration tool and used SQLite as my relational database</p>
      <p>Database file: "employeeDatabase.sqlite" </p>
      <p>Scripts file: "DBQueries.sql" </p>
    `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
}
