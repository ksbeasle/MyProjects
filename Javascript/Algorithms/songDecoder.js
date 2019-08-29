function songDecoder(song){
    //search for WUB and replace with a space
    song = song.replace(/(WUB)/g, ' ')
    //search for extra white space
    song = song.replace(/\s\s/g, ' ')
    //search for double white spaces
    song = song.replace(/^\s+|\s+/g, ' ')
    //trim ends of the string
    song = song.trim()
    console.log(song)
return song
}

songDecoder("AWUBBWUBC")
songDecoder("AWUBWUBWUBBWUBWUBWUBC")
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")