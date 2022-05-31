using System;
using System.Text;
using System.Threading.Tasks;

namespace InternTechnicalTest
{
    internal class Question1Diamond
    {
        public void Question1Fn (int numberOfRows, string character) {
            Console.WriteLine("#Question 1 Row amount:", numberOfRows);
            var array = new List<string>();
            var reversedData = new List<string>();

            for (var i = 0; i < numberOfRows; i++)
            {
                var str = character.ToString();
                var spaceAmount = +numberOfRows + i;
                var sum = i * 2 + 1;
                var stringAmount = new StringBuilder(str.Length * sum).Insert(0, str, sum).ToString();
                var paddedString = stringAmount.PadLeft(spaceAmount);
                array.Add(paddedString);

                // conditional to not double write the middle value in the reversedData Array
                if (i != numberOfRows - 1) 
                {
                    reversedData.Insert(0, paddedString);
                };
                Console.WriteLine(paddedString);
            }

            reversedData.ForEach((iterator) => {
                array.Add(iterator);
                Console.WriteLine(iterator);
            });
        }
        public void Answer()
        {
            Console.WriteLine("question 1 Diamond");
            Console.WriteLine("give row amount");
            var userNumberOfRows = Console.ReadLine();
            var numberOfRows = 8;

            if (string.IsNullOrEmpty(userNumberOfRows) == false)
            {
                numberOfRows = int.Parse(userNumberOfRows);
            };
            Console.WriteLine("give character for body of diamond");
            var userChar = Console.ReadLine();
            var bodyChar = "*";

            if (string.IsNullOrEmpty(userChar) == false)
            {
                bodyChar = userChar;
            };

            Question1Fn(numberOfRows, bodyChar);
        }
    }
}
