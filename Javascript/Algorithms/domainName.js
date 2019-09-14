/* 
Grab the domain name of the url
*/

function domainName(url){
    //console.log(url)
     let protocol = /(http|https):\/\//g
     let www = /(www.)/g
     let everythingElse = /\.(.*)/g
     let str = url.replace(protocol, "")
     str = str.replace(www,"")

     //if we want to include the '/com' --> console.log(str.slice(0,url.indexOf('.com')))
     str = str.replace(everythingElse, "")
     return str
    }


    console.log(domainName("http://google.com"))