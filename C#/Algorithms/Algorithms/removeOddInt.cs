using System;
using System.Collections;

namespace Algorithms
{
    public class removeOddInt
    {

       public static int removeOdd(int[] seq)
       {
           int num = 0;
           
           for(int i = 0; i < seq.Length; i++)
           {
               for(int j = 0; j < seq.Length; j++)
                {
                    if(seq[i] == seq[j])
                    {
                        num++;
                    }
                }
                if(num % 2 != 0)
            {
                    return seq[i];
                }

            }

           
           return num;
       }
   }
}
