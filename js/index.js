// Iteration 1: Names and Input
const hacker1 = 'Irma';
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = 'Adrián';
console.log(`The navigator´s name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

// Iteration 3.1: Loops
function getAllCharacters(string) {
  let characters = ''
  for (let index = 0; index < string.length; index++) {
    const characterFounded = string.charAt(index).toUpperCase()
    if(index+1 == string.length) {
      characters += `${characterFounded}`
    } else {
      characters += `${characterFounded} `      
    }
  }
  console.log(characters);
}

function getCharacterReverse(character) {
  let reversedName = '';
  for(let i = character.length - 1; i >= 0; i--) {
    reversedName+= character.charAt(i);
  }
  console.log(reversedName);
}

//getAllCharacters(hacker1)
​
//getCharacterReverse(hacker1);

