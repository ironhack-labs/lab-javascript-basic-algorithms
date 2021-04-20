//Iteration 1

//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Grecia";

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Alejandra";

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`);

//Iteration 2

/* console.log(hacker1.length);
console.log(hacker2.length);*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

console.log(hacker1.toUpperCase().split('').join(' '));


/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

console.log(hacker2.split('').reverse().join(''));


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

let hacker1name = hacker1.toLowerCase().split('').sort().join('');

let hacker2name = hacker2.toLowerCase().split('').sort().join('');

console.log(hacker1name)
console.log(hacker2name)


if (hacker1name < hacker2name) {
  console.log("The driver's name goes first.");
}

else if (hacker1name > hacker2name) {
  console.log("Yo, the navigator goes first definitely.");
}

else {
  console.log("What?! You both have the same name?");
}


/* BONUS 2 */

function phraseToCheck(string) {
  
  let re = /[\W_]/g;
  
  let lowString = string.toLowerCase().replace(re, '');
  
  let reverseString = lowString.split('').reverse().join('');
  
 
  let respuesta = '';
  
  if (lowString === reverseString)
  {
    
   
      respuesta = "It's a palindrome!";
  }
    
   if (lowString !== reverseString)
   {
             
        respuesta = "This is not a Palindrome. Try again!";

   }
  
 return respuesta;
}

const string = prompt("Write your prompt here");

const check = phraseToCheck(string);

console.log(check);