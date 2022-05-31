using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternTechnicalTest
{
    internal class Question2
    {
        public void Answer()
        {
            Console.WriteLine("question 2");
            Console.WriteLine("give random string");
            var inputQ2 = Console.ReadLine();
            if (string.IsNullOrEmpty(inputQ2))
            {
                inputQ2 = "aa4zzz123sss8ahh6ggg9";
            }
            var appearsOnce = Method(true, inputQ2);
            var appearsMoreThanOnce = Method(false, inputQ2);
            Console.WriteLine($"string = {inputQ2}");
            Console.WriteLine($"Output once: {appearsOnce}");
            Console.WriteLine($"Output more than once: {appearsMoreThanOnce}");
        }
        public string Method(bool appearsOnce, string inputQ2)
        {
            var trimmedArray = inputQ2.Aggregate("", (accumulate, current) => {
                if (accumulate.Contains(current)) return accumulate;

                var currentAppearsOnce =
                  inputQ2.Count() - inputQ2.Replace(current.ToString(), "").Count() == 1;

                if (currentAppearsOnce == appearsOnce)
                    return accumulate.ToString() + current;

                return accumulate;
            });

            return trimmedArray;
        }
    }
}
