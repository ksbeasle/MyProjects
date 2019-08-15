using System;
using static Algorithms.removeOddInt;
namespace Algorithms
{
    class Driver
    {
        static void Main(string[] args)
        {
            int[] seq = { 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 };
            removeOdd(seq);
        }
    }
}
