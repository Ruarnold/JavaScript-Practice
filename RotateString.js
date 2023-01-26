/*to rotate the string 'w3resource' in right direction by periodically 
removing one letter from the end of the string and attaching it to the front.*/

let text = "ruchi"
let text1 =""
let text2= ""
let len = text.length
for(i=len;i>=0 ; i--) {
    text1= text.slice(i)
    text2 = text.slice(0,i)
    console.log(text1+text2) 
}
