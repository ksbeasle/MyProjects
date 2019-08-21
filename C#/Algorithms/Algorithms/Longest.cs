using System;
using System.Collections;

namespace Algorithms
{
    public class Longest
    {
        ArrayList list = new ArrayList();

        public static string longestStr(string s1, string s2)
        {
            ArrayList al = new ArrayList();
            

            foreach(var item in s1)
            {
                if (!al.Contains(item))
                {
                    al.Add(item);
                }
            }

            foreach (var item in s2)
            {
                if (!al.Contains(item))
                {
                    al.Add(item);
                }
            }
            al.Sort();
            string newSortedStr = "";
            foreach(var item in al)
            {
                newSortedStr += item;
            }

            return newSortedStr;
        }
    }
}
