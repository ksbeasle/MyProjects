using System;
namespace stuff
{
    public class reverseString
    {
        public reverseString()
        {
            String str = "HelloWorld";

            String revStr = "";
            for(int i = 0; i < str.Length; i++)
            {
                Console.WriteLine(str[i]);
            }

        }
    }
}
