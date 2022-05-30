/////sql parameters
/////entity framework
/// what is a SQL injection in asp .net web forms
/// example of sql injection attack
/// how to prevent sql injection attack
export default function renderP2Q5() {
  const parentEl = document.querySelector(".p2q5");
  const markup = `
      <ul>
        <li>Google search: "what is a SQL injection in asp .net web forms"</li>
        <li>Google search: what ever I learn while reading through the previous and feel I need more knowledge on</li>
      <li>Google search: "example of SQL injection attack"</li>
        <li>Google search: "how to prevent SQL injection attack"</li>
      </ul>
  
      <p>SQL Injection is based on 1=1 is always true <br> So if the input has "OR 1=1" in his input it will return all the table values for instance "userdata"<br> What if that table contains sensitive information like usernames and passwords? <br> You can use SQL parameters for to combat this <br>for example:</p>
      <ul>    
        <div>txtUserId = getRequestString("UserId")</div>
        <div>txtSQL = "SELECT * FROM Users WHERE UserId = @0"</div>
        <div>db.Execute(txtSQL,txtUserId)</div>
      </ul>
      <br>
      <div>The SQL engine checks each parameter to ensure that it is correct for its column and are treated literally, and not as part of the SQL to be executed.</div>
    `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
}
