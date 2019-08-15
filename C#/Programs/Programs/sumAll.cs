using System;

namespace Programs
{
    class Program
    {



        public static int sumAll(int a, int b)
        {
            int sum = 0;
            int start = a;
            int end = b;
            if (a > b)
            {
                start = b;
                end = a;
            }

            for (int i = start; i <= end; i++)
            {
                sum += i;
            }
            return sum;
        }



        static void Main(string[] args)
        {

            /* The integers can be in any order */
            int a = 1;
            int b = 10;
            /* Call method */
            Console.WriteLine(sumAll(a, b));
            Console.ReadKey();
        }
    }
}
