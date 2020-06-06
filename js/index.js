// Iteration 1: Names and Input
var hacker1="Jelena";
console.log("The driver's name is "+hacker1)
var hacker2="Navigator";
console.log("The navigator's name is "+ hacker2)


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }


// Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let hacker1up="";

for(i=0; i<hacker1.length; i++) {
  hacker1up += hacker1[i].toUpperCase() + " ";

}
console.log(hacker1up);
// Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker1rev="";

for(i=hacker1.length-1; i>=0; i--) {
  hacker1rev += hacker1[i];
}
console.log(hacker1rev);
/*Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
if (hacker1 < hacker2) {console.log("The driver's name goes first.")}
else if (hacker1 > hacker2) {console.log('Yo, the navigator goes first definitely.')}
else {console.log('What?! You both have the same name?')}
