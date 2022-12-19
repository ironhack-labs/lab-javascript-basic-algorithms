// Iteration 1: Names and Input
let hacker1 = "Paul";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Romain";
console.log(`The navigotaor's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let newHacker1 = "";
for (i = 0; i < hacker1.length; i++) {
  newHacker1 += `${hacker1[i].toUpperCase()} `;
  /*console.log(newHacker1) --> si on met à l'intérieur, chaque lettre va être affichée et on veut tout le nom d'un coup. Le console.log est donc à l'extérieur*/
}

console.log(newHacker1);

let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
  /*console.log(newHacker2) --> même principe que ci-dessus*/
}

console.log(newHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definetly");
} else {
  console.log("What?! You both have the same name?");
}

/*let order = hacker1.localeCompare(hacker2);
order < 0
  ? console.log("The driver's name goes first")
  : order > 0
  ? console.log("Yo, the navigator goes first definetly")
  : console.log("What?! You both have the same name?"); */

// Bonus 1 - Count the words in a string
longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

// Count the words of a string
const countWords = (longText) => {
  const newCount = longText.split(' '); // Return longText in an array
  const myNewCount = newCount.filter(e => e !== ''); // Return the array without its spaces
  return myNewCount.length // Return the array length
}
console.log(countWords(longText))

// Count one word in particular in a string
const countOneWord = (longText) => {
  let howManyTimes = []
  const arr = longText.split(' ')
  for (let i = 0; i < longText.length; i++) {
    if (arr[i] === 'Ipsum') {
      howManyTimes.push(arr[i])
    }
  }
  return howManyTimes.length
}
console.log(countOneWord(longText))


// Bonus 2 - Check if the string is a Palindrome
string = ''

const palindrome = (string) => {
  let newString = string.split(' ').join('')
  let stringBackward = ''
  
  for (let i = newString.length - 1; i >= 0; i--) {
    stringBackward += newString[i]
  }

  if (newString === stringBackward) {
    console.log(`"${string}" is a palindrome`)
  } else {
    console.log(`"${string}" is not a palindrome`)
  }
}

palindrome('race car')