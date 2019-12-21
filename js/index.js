/*
Marc Serra
First Javascript Exercice
19/12/2019
/*

// ITERATION 1
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Marc";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Serra";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`);

// ITERATION 2
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters.
 - It seems that the navigator has the longest name, it has XX characters. or
 - Wow, you both have equally long names, XX characters!.
*/

shortest = hacker1; // For exercice3
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  shortest = hacker2; // For exercice3
} else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

// ITERATION 3
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1CapsSpaced = "";
for(let i = 0; i < hacker1.length ; i++){
  hacker1CapsSpaced += `${hacker1[i]} `;
};
console.log(hacker1CapsSpaced.toUpperCase())


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker2Reversed = "";
for(let i = hacker2.length-1; i >= 0 ; i--){
  hacker2Reversed += `${hacker2[i]}`;
};
console.log(hacker2Reversed)


/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

Test cases supported:
- a vs b --> a
- aa vs b --> aa
- aa vs a --> a
- a vs a --> equals
*/

for (let i = 0;i < shortest.length; i++){

  // Primero iteramos segun la longitud del mas corto. Si concluimos algo, ya lo tenemos.
  if(hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first.")
    break;
  }else if(hacker1[i] > hacker2[i]){
    console.log("Yo, the navigator goes first definitely.")
    break;
  };

  // Si es la ultima iteracion y no hemos concluido nada, antes ira el mas corto.
  if(i == shortest.length-1){
    if(hacker1.length < hacker2.length){
      console.log("The driver's name goes first.")
    } else if(hacker2.length < hacker1.length){
      console.log("Yo, the navigator goes first definitely.")
    } else{
      console.log("What?! You both have the same name")
    }
  }
  
}

/*
Bonus 1:
Go to lorem ipsum generator and:
- Generate 3 paragraphs. Store the text in a variable type of string.
*/
let paragraph = "Lorem ipsum Latin Latin";

// - Make your program count the number of words in the string.
console.log(`Words: ${paragraph.split(' ').length}`);

// - Make your program count the number of times the Latin word et appears.
// Method 1, graciosa:
console.log(`Latin first method: ${paragraph.split('Latin').length-1}`);
// Method 2, mas logica:
paragraphWordsArr = paragraph.split(' ');
findedTimes = 0;
for(let i = 0; i < paragraphWordsArr.length; i++){
  if (paragraphWordsArr[i] == "Latin"){
    findedTimes += 1;
  }
}
console.log(`Latin second method: ${findedTimes}`);

/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = "step on no pets";
phraseToCheckCleaned = phraseToCheck.replace(/ /g, '').toLowerCase()// Remove string spaces - Needs to improve for remove all special characters.

// Method 1 - simplest
// Reverse second part
let phraseReversed = "";
for(var i = phraseToCheckCleaned.length-1; i >= 0; i--){
  phraseReversed += phraseToCheckCleaned[i];
};
if(phraseReversed == phraseToCheckCleaned){
  console.log(`"${phraseToCheck}" is a palindrom`)
} else{
  console.log(`"${phraseToCheck}" isn't a palindrom`)
}


// Method 2 - complicated
// From first char to half or half+1 if is it odd
firstPart = phraseToCheckCleaned.slice(
  0,
  (phraseToCheckCleaned.length/2)
  +
  phraseToCheckCleaned.length%2
);

// From half to end
secondPart = phraseToCheckCleaned.slice(
  (phraseToCheckCleaned.length/2)
);

// Reverse second part
let secondPartReversed = "";
for(var i = secondPart.length-1; i >= 0; i--){
  secondPartReversed += secondPart[i];
};

if(firstPart == secondPartReversed){
  console.log(`"${phraseToCheck}" is a palindrom`)
} else{
  console.log(`"${phraseToCheck}" isn't a palindrom`)
}
