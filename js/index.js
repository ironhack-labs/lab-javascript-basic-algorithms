// Iteration 1: Names and Input
var hacker1 = "Naomi";
console.log(hacker1);

var hacker2 = "Mathieu";
console.log(hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name,it has ${hacker1.length} characters`);}
    
    else if (hacker1.length < hacker2.length) {
      console.log (`The driver has the longest name,it has ${hacker2.length} characters`);}
    
    else {console.log (`Wow, you both have equally long names, ${hacker1.length}characters!`);}

// Iteration 3: Loops

//3.1
let i = 0;
let str = hacker1.charAt(i).toUpperCase();
for (let i = 1; i <= hacker1.length -1 ; i++) {
  str += " " + hacker1.charAt(i).toUpperCase();
}
console.log(str);

//3.2
function reverse(hacker2){
    let reversed = "";    
    for (let y = hacker2.length -1 ; y >= 0; y--){        
      reversed += hacker2[y];
    }    
    return reversed;
  }
  
  console.log(reverse(hacker2))

  //3.3


/* //if(){
    console.log("The driver's name goes first.")
  }
  
  else if (){
    console.log(`Yo, the navigator goes first definitely.` )
  }
  
  else{
    console.log(`What?! You both have the same name?`)
  } */
