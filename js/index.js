// Iteration 1: Names and Input
//node js/index.js
let hacker1 = "Nico";
let hacker2 = "Ignacio";
console.log(`The driver's name is ${hacker1}`)
console.log(`the navigatos's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length ) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else if (hacek) {
    console.log (`Wow, tou both have equally long names, ${hacker1.length}`)
  }

// Iteration 3: Loops
//3.1

let separatedHacker= '';

for ( let i = 0 ; i < hacker1.length; i++ ) {
    separatedHacker += hacker1[i].toUpperCase() + ' ';

}
console.log (separatedHacker)

//3.2

let reverseHacker = '';

for ( let i = hacker2.length - 1 ; i >= 0; i--) {
   reverseHacker += hacker2[i]
}
console.log (reverseHacker)

//3.3 To see if one string is greater than another javaScript uses the "dictionary or Lexicogram" order.

if (hacker1 < hacker2) {
    console.log ("The driver's name goes firts.")
} else if (hacker2 < hacker1) {
    console.log ("Yo, the navigator goes firts definitely.")
} else  {
    console.log ("What?! You both have the same name")
}

//Bonus 1

let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada pretium ligula, quis molestie est elementum lacinia. Aenean ullamcorper, mauris in convallis convallis, sem purus volutpat tortor, non efficitur est odio vel lectus. Vivamus et rutrum erat, a accumsan elit. Aliquam varius consequat hendrerit. Mauris ac justo in tortor dictum ornare. Ut aliquet cursus tortor et aliquam. Aliquam pretium nunc aliquet rhoncus porttitor. Donec urna sem, bibendum at tincidunt in, scelerisque at ipsum. Nullam suscipit aliquet quam, sed placerat odio imperdiet sed. Duis nec laoreet diam."

let numbersOfWord = 0;

for (let i= 0; i<loremText.length; i++) {
  if (loremText[i] === ' '){
    numbersOfWord  = numbersOfWord + 1;
  }
}
console.log (numbersOfWord)

//Bonus 2

let phraseToCheck = "Amor, Roma";

let checkPalimdrome = '';

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  checkPalimdrome += phraseToCheck[i]
}
if ( checkPalimdrome.toLowerCase() === phraseToCheck.toLowerCase()) {
  console.log ('Palindrome')
} else  {
  console.log ('Not Palindrome')
}
  

