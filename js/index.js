// Iteration 1: Names and Input
let hacker1 = "Eva"
console.log ("The driver's name is", hacker1)

let hacker2 = "Chrome"
console.log ("The navigator's name is", hacker2)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" +  hacker1.lenght  + "characters");
}else if
    (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" haracters");
}else{
if (hacker1.length = hacker2.length) 
  console.log("Wow, you both have equally long names," +  hacker1.length  + "characters!");
}

// Iteration 3: Loops
letters = hacker1;{
    console.log(letters.toUpperCase())
  }
  
  //3.2
    function reverse(lettersn){
    return lettersn.split('').reverse().join("");
    }
    var lettersn = reverse (hacker2);
    console.log(lettersn)
  //3.3
  
  console.log(hacker1.localeCompare(hacker2))
  
  let driver= (hacker1.localeCompare(hacker2))
  let navigator= (hacker2.localeCompare(hacker1))
    
  if (driver < navigator) {
      console.log("The driver's name goes first.");
  } else if (driver > navigator) {
      console.log("Yo, the navigator goes first definitely.");
  } else if (driver == navigator){
    console.log("What?! You both have the same name?");
  }

  let caracter = "et"
let word = [];
let contador = 0
let items = text.toLowerCase().split(' ')
for(let i = 0; i < text.length; i++) {
	if (text[i].toLowerCase() === "et"){
    contador++
  }
}

console.log("How many times 'et' appears in the text: "+ contador)