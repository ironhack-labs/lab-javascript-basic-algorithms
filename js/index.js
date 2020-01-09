// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Driver123'

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver\'s name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Driver123';//'Navigator1';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

switch (true) {
  case hacker1.length > hacker2.length :
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
    break;
  case hacker1.length < hacker2.length :  
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    break;  
  default :
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let word1 = "";

for (let i=0; i < hacker1.length; i++ ){
 word1 = word1.concat(hacker1[i].toUpperCase());
 if (i !== (hacker1.length -1 )){
   word1 = word1.concat(" ");
  }
}
console.log(`"${word1}"`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
word1 = "";

for (i = (hacker2.length - 1); i >= 0 ; i--){
  word1 = word1.concat(hacker2[i]);
}
console.log(`"${word1}"`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let hacker1Big = false;
let hacker2Big = false;

for (i = 0; (i < hacker1.length || i < hacker2.length); i++){
 if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
   hacker2Big = true;
   break;
  } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
    hacker1Big = true;
    break;
    } else if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)){ 
     continue;
     }
}
 switch (true){
   case hacker1Big :
       console.log("Yo, the navigator goes first definitely.");
       break;
   case hacker2Big :
       console.log("The driver's name goes first.");
       break;
   case (hacker1.length < hacker2.length) :
       console.log("The driver's name goes first.");
       break;
   case (hacker1.length > hacker2.length) :
       console.log("Yo, the navigator goes first definitely.");
       break;
   case (hacker1.length === hacker2.length) :
       console.log("What?! You both have the same name?");
       break;
 }

