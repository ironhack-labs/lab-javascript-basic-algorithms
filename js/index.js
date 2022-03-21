// Iteration 1: Names and Input

const hacker1 = 'Takyoung';
console.log("The driver's name is " + hacker1);
const hacker2 = 'Nevi';
console.log("The nevigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`)
  }
  
// Iteration 3: Loops

let letter = '';
for (let i=0; i < hacker1.length; i++) {
  letter += hacker1[i] + " ";
}
 console.log(letter.toUpperCase());

let reverse ='';
for (let i=hacker2.length-1; i>=0; i--){
  reverse += hacker2[i];
}
  console.log(reverse)

if ( hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("The driver's name goes first.")
} else if ( hacker1.toUpperCase() === hacker2.toUpperCase()) {
  console.log('What?! You both have the same name?')
}  else if ( hacker1.toUpperCase() > hacker2.toUpperCase() ) {
  console.log('Yo, the navigator goes first definitely.')
} 
