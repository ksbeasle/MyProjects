using System;

namespace stuff
{
    class Program
    {
        static void Main(string[] args)
        {
            String str = "HelloWorld";
            Console.Write(reverseString(str));
        }
        public static String reverseString(String str)
        { 

            String revStr = "";
            for (int i = str.Length - 1; i >= 0; i--)
            {
                revStr += str[i];
            }
            return revStr;
        }
    }
}
