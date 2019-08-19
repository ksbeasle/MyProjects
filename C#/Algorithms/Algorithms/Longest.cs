using System;
using System.Collections;

namespace Algorithms
{
    public class Longest
    {
        ArrayList list = new ArrayList();

        public static string longestStr(string s1, string s2)
        {
            int s1Count = 0;
            int s2Count = 0;

            for(int i = 0; i < s1.Length; i++)
            {
                var tmp = s1[i];
                if (s1.IndexOf(tmp) < 0)
                {
                    s1Count++;
                }
            }
            return "";
        }
    }
}
