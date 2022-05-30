import renderP1Q1 from "./src/intern-technical-test/question1.js";
import p1q2 from "./src/intern-technical-test/question2.js";
import p2q1 from "./src/intern-test/question1.js";
import renderP2Q2 from "./src/intern-test/question2.js";
import p2q3 from "./src/intern-test/question3.js";
import p2q4 from "./src/intern-test/question4.js";
import renderP2Q5 from "./src/intern-test/question5.js";

//// Intern Technical Test
console.log("###Intern Technical Test");
// Question 1
renderP1Q1();
// interesting optimization array.push([first 15]) results and pop 5 to get to 100
////////

// Question 2
p1q2.renderP1Q2();
////////

//// Intern Test
console.log("###Intern Test");
// Question 1
p2q1.renderP2Q1();
////////

// Question 2
renderP2Q2();
////////

// Question 3
p2q3.cashRegister();
p2q3.renderP2Q3();
////////

// Question 4
p2q4.renderP2Q4();
////////

// Question 5
renderP2Q5();
////////
