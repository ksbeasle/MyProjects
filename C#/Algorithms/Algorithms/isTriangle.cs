using System;
namespace Algorithms
{
    public class isTriangle
    {
        public static bool validTriangle(int a, int b, int c)
        {
            int ab = a + b;
            int ac = a + c;
            int bc = b + c;
            if (a < 0 || b < 0 || c < 0) { return false; }
            if (ab > c && ac > b && bc > a)
            {
                return true;
            }
            else { return false; }
        }
    }
}
