function pairElement(str) {
    let arr = []
    /* split it into an array of individual DNA letters */
    str = str.split("")
    /* loop through and match the letter to its pair and push it as an array onto arr */
    for(let i = 0; i < str.length; i++){
      if(str[i] == "A"){
        arr.push([str[i],"T"])
      }else if(str[i] == "C"){
        arr.push([str[i],"G"])
      }else if(str[i] == "T"){
        arr.push([str[i],"A"])
      }else if(str[i] == "G"){
        arr.push([str[i],"C"])
      }
    }
    console.log(arr)
    return arr
  }
  
  pairElement("GACG");
  pairElement("ATCGA");
  pairElement("TTGAG")
  pairElement("CTCTA")
  
  /*
  A->T
  C->G
  T->A
  G->C
  
  
  ("ATCGA")-[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
  ("TTGAG")-[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
  ("CTCTA")-[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
  */
  