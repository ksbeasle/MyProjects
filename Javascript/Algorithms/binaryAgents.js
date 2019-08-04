function binaryAgent(str) {
    /* split the string so we can get an array  */
    str = str.split(" ")
    let message = ""
    for(let i = 0; i < str.length; i++){
        /* convert from binary to decimal */
      let convertMe = parseInt(str[i], 2)
      /* Now we convert the decimal into a character */
      let pushMe = String.fromCharCode(convertMe)
      /* concat the character onto our message string */
      message += pushMe
    }
    console.log(message)
    return message
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")