/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/
function humanReadable(seconds) {
    let HH = 0
    let MM = 0
    let SS = 0
    while(HH < 99 && seconds >= 3600){
      seconds = seconds - 3600
      HH++
    }
    while(MM < 59 && seconds > 59){
    seconds = seconds - 60
    MM++
    }
    SS = seconds
    if(HH < 10){
      HH.toString()
      HH = "0" + HH
    }
    if(MM < 10){
      MM.toString()
      MM = "0" + MM
    }
    if(SS < 10){
      SS.toString()
      SS = "0" + SS
    }
    
    return HH.toString() + ":" + MM.toString() + ":" + SS.toString()
    
  }

  console.log(humanReadable(5))
  console.log(humanReadable(21341))
  console.log(humanReadable(60))
  console.log(humanReadable(359999))