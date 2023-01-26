/* To reverse a given string*/

let x = "w3resource"
let text = ""
let len = x.length
for(var i=len-1; i>=0 ; i--) {
    text = text + x[i]
    
}
console.log(text)