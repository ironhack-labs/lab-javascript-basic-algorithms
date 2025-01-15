// Iteration 1: Names and Input

const hacker1= 'Olga';
console.log(`The drivers name is ${hacker1}` );
const hacker2= 'Oscar';
console.log(`The navigator name is ${hacker2}` );

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
     console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops

// // 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let result = "";

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        result += " "; 
    }
}
console.log(result);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let result2 = "";

for (let i = hacker2.length -1; i >= 0 ; i--) {
    result2 += hacker2[i]
    }
console.log(result2);

// Lexicographic order

let comparison = hacker1.localeCompare(hacker2);

if (comparison < 0) {
    console.log(`${hacker1} The driver's name goes first.`);
} else if (comparison > 0) {
    console.log(`${hacker1} Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1
let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//Make your program count the number of words in the string.

const words = longText.split(" "); 
console.log(words.length);
let currentWord;
let etAmount = 0;
for (let i = 0; i < words.length; i++) {
    currentWord = words[i]; 
    if (currentWord === 'et') {
        etAmount += 1;
    }
}
console.log(etAmount)

// BONUS 2 PALINDROMOS

const phraseToCheck = "A man, a plan, a canal, Panama";
let esPal = '';
for (let i = phraseToCheck.length -1; i >= 0 ; i--) {
    esPal += phraseToCheck[i].toLowerCase().replace(',','').replace(' ','')
    }
    console.log(phraseToCheck.toLowerCase().replace(',','').replace(' ',''))

  if ( phraseToCheck.toLowerCase().replace(',','').replace(' ','') == esPal.toLowerCase()){
    console.log(`${esPal} is Palindrome`);
  } else {
    console.log(`${esPal} is not Palindrome`);
  }

