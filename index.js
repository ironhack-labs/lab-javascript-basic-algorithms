// Iteration 1: Names and Input
const hacker1 = "Rick";
const hacker2 = "Morty";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName + hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navName = "";

for(let j = hacker2.length - 1; j >= 0; j--) {
  navName += hacker2[j];
}

console.log(navName);

//3.3 Depending on the lexicographic order of the strings

const hackerLower1 = hacker1.toLowerCase();
const hackerLower2 = hacker2.toLowerCase();

const length1 = hacker1.length;
const length2 = hacker2.length;

if (hackerLower1 === hackerLower2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < length1 && i < length2; i++) {
    if (hackerLower1.localeCompare(hackerLower2[i]) < 0) {
      console.log("The driver's name goes first.")
      break;
    } else if (hackerLower1.localeCompare(hackerLower2[i]) > 0) {
      console.log("Yo, the navigator goes first, definitely.")
      break;
    } else {
      continue;
    }
  }
}


//Bonus 1

//1. Generate 3 paragraphs. Store the text in a new string variable named longText.

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis enim sagittis, feugiat augue et, commodo lacus. Maecenas ullamcorper augue metus, ut ultricies quam tempor quis. Pellentesque rhoncus aliquet cursus. Fusce egestas venenatis arcu, non rhoncus metus tempor vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec risus vel libero pharetra elementum. Suspendisse turpis urna, pulvinar quis faucibus ut, consequat nec diam. Curabitur non erat ac metus facilisis luctus sit amet a leo. Proin eu dictum purus, quis aliquet enim. Phasellus pellentesque, dui a interdum blandit, nulla ligula tempus arcu, cursus ullamcorper leo dolor mattis dolor. Mauris luctus lacus blandit, eleifend orci eget, egestas risus.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed suscipit tincidunt massa sed fermentum. Proin mollis neque at odio porttitor sagittis. Maecenas efficitur pretium hendrerit. Nullam mattis at tortor vitae posuere. Sed nibh mauris, suscipit a egestas quis, tempor vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, feugiat quis tellus non, accumsan egestas odio. Ut porttitor lectus ut leo feugiat volutpat. Sed non nulla cursus, semper purus ac, porttitor nisl.

Proin id commodo odio. Nulla facilisi. Duis non quam tincidunt, lobortis ipsum ac, lacinia purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas, risus et fermentum ultricies, tellus mi tempus dui, in posuere neque nibh aliquam augue. Vivamus id mauris est. Vestibulum fermentum, lorem eget sodales tempor, lacus felis feugiat felis, sed iaculis augue arcu ac diam. Aenean quis nunc lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate neque non sagittis eleifend. Pellentesque dui dui, posuere sit amet nisi vel, dictum pretium erat. Cras iaculis orci elit, quis vulputate mauris blandit ac. Phasellus ac rutrum nulla.`


//2. Make your program count the number of words in the string.

function WordCount(msg) { 
    return msg.split(" ").length;
}
  
let result = WordCount(longText);
console.log(result);


//3. Make your program count the number of times the Latin word et appears.

let etCount = 0;

for (let i = 0; i < longText.length; i ++) {
  if (longText[i] + longText[i+1] === "et") {
    etCount ++;
  }
}

console.log(etCount)


//Bonus 2

let phraseToCheck = "ewi./w.e ";
let phraseArr = [];
let length = phraseArr.length;

for (let i = 0; i < phraseToCheck.length; i ++) {
  if (phraseToCheck[i].match(/[a-z]/i)) {
    phraseArr.push(phraseToCheck[i]);
  } else {
    continue;
  }
}

let newPhraseToCheck = phraseArr.join('');
let reversedPhrase = phraseArr.reverse().join('');

if (newPhraseToCheck === reversedPhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("Not a palindrome")
}