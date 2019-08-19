using System;
namespace Algorithms
{
    public class FandB
    {
        public static void FnB(string str)
        {
            var splitMe = str.Split(" ");
            int length = Int32.Parse(splitMe[0]);
            int firstMultiple = Int32.Parse(splitMe[1]);
            int secMultiple = Int32.Parse(splitMe[2]);

            for(int i = 1; i <= length; i++)
            {
                if(i % firstMultiple == 0)
                {
                    Console.WriteLine("F");
                }else if(i % secMultiple == 0)
                {
                    Console.WriteLine("B");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }

        }
    }
}
