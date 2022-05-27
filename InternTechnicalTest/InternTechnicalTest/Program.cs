using InternTechnicalTest;

var question1 = new Question1();
var question2 = new Question2();    

while (true)
{
    Console.WriteLine("press q to quit");
    Console.WriteLine("press 1 for question 1 answer");
    Console.WriteLine("press 2 for question 2 answer");
    var input = Console.ReadLine();
    if (input == "1")
        question1.Answer();
    if (input == "q")
        break;
    if (input == "2")
        question2.Answer(); 
}

