/*program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number.*/ 

 function guess(input) {
    let ranNum = Math.floor(Math.random()*10)+1
    return (ranNum == input) ?
       console.log("Right guess the random Number was: " ,ranNum)
    :
       console.log("Guess again the number was ",ranNum)
    
 }
 guess(9)