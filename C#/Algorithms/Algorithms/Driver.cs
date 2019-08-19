using System;
using static Algorithms.removeOddInt;
using static Algorithms.FandB;
using static Algorithms.isTriangle;
using static Algorithms.squaredDigits;
namespace Algorithms
{
    class Driver
    {
        static void Main(string[] args)
        {
            int[] seq = { 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 };
            removeOdd(seq);

            /* FizzBuzz reworked Algorithm */
            string str = "10 3 5";
            FnB(str);

            /* Triangle validation algorithm */
            int a = 12;
            int b = 10;
            int c = 9;
            Console.WriteLine(validTriangle(a, b, c));


            /* Squared Digits algorithm */
            int n = 9119;
            squaredInt(n);

        }
    }
}
