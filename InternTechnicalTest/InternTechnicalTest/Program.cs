using InternTechnicalTest;

var question1 = new Question1();
var question2 = new Question2();
var question1Diamond = new Question1Diamond();

while (true)
{
    Console.WriteLine("press q to quit");
    Console.WriteLine("press 1 for question 1 answer");
    Console.WriteLine("press 2 for question 2 answer");
    Console.WriteLine("press 3 for question 1 Diamond answer");
    var input = Console.ReadLine();
    if (input == "1")
        question1.Answer();
    if (input == "q")
        break;
    if (input == "2")
        question2.Answer();
    if (input == "3")
        question1Diamond.Answer();
}

