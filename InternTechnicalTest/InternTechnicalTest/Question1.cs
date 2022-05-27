using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternTechnicalTest
{
    public class Question1
    {
        public void Answer ()
        {
            var array = new List<string>();

            var digital = "Digital";
            var dynamic = "Dynamic";

            for (var i = 1; i <= 100; i++)
            {
                //   if (i % 5 == 0 && i % 3 == 0) {
                if (i % (5 * 3) == 0)
                {
                    array.Add(digital + dynamic);
                }
                else if (i % 5 == 0)
                {
                    array.Add(dynamic);
                }
                else if (i % 3 == 0)
                {
                    array.Add(digital);
                }
                else
                {
                    array.Add(i.ToString());
                }
            }

            var consoleFriendly = string.Join("\n", array.Select((item, index) => $"{index + 1}: {item}"));

            Console.WriteLine("#Question 1");
            Console.WriteLine(consoleFriendly);
        }
    }
}
