// Iteration 1: Names and Input
let hacker1= 'Agostina';
console.log("The driver's name is" + hacker1)

let hacker2= 'Maria';
console.log("The navigator's name is" + hacker2)
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has  ${hacker1.length}characters.`)
} else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
var newcadena=''
for (i=0; i< hacker1.length; i++) {
    newcadena= hacker1[i].toUpperCase();
  console.log(newcadena);
}
//
var newcadena2= '';
for(i=hacker1.length-1; i>=0; i--){
    newcadena2= hacker1[i]
    console.log(newcadena2)
}
//

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 
