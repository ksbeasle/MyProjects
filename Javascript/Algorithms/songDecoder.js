function songDecoder(song){
    song = song.replace(/(WUB)/g, ' ')
    song = song.replace(/\s\s/g, ' ')
    song = song.replace(/^\s+|\s+/g, ' ')
    song = song.trim()
return song
}

songDecoder("AWUBBWUBC")
songDecoder("AWUBWUBWUBBWUBWUBWUBC")
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")