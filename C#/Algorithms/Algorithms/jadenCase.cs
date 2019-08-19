using System;
namespace Algorithms
{
    public class jadenCase
    {

        
        //How can mirrors be real if our eyes aren't real
        public static String jaden(string str)
        {

            string jadenStr = "";
            var x = str.Split();
            //Console.WriteLine(x.Length);
            
            
            for(int i = 0; i < x.Length; i++)
            {
                var tmp = x[i];
                tmp.ToCharArray();
                Console.WriteLine(tmp[0]);
            }

            return jadenStr;
        }
    }
}
