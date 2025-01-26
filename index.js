// Iteration 1: Names and Input
const hacker1 = "daniel";
const hacker2 = "miguel";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters. or`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let upperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  upperCase += hacker1[i].toUpperCase() + " ";
}

console.log(upperCase);

// 3.2

let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

// 3.3

console.log(hacker1.localeCompare(hacker2));
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
} else {
  console.log(`Yo, the navigator goes first, definitely.`);
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et congue nulla, vel euismod velit. In interdum tempus sem, in scelerisque orci dapibus sed. Phasellus pharetra, nunc viverra dignissim volutpat, quam enim pellentesque erat, ac bibendum magna tortor nec justo. Cras purus dolor, rhoncus vel ex a, imperdiet scelerisque sapien. Mauris quis magna velit. Suspendisse dapibus vestibulum dui a lobortis. Duis in scelerisque ligula, at vulputate sem. Integer id scelerisque justo, nec porttitor neque.

Integer dapibus risus at quam condimentum convallis. Nam consequat dui quis mauris bibendum dapibus. Suspendisse lacinia orci sapien, eget bibendum erat posuere at. Praesent vel urna tristique, auctor leo non, aliquet massa. Quisque vehicula at eros id tincidunt. Phasellus ac cursus enim. Nunc nisl elit, scelerisque sit amet nisi quis, convallis venenatis nulla. Curabitur ac nibh aliquet, fringilla mauris sed, ultricies sem. Nunc auctor lorem ante, non ullamcorper felis consectetur sit amet. Donec tincidunt efficitur rutrum. Pellentesque eu aliquet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna nibh, efficitur eu pretium nec, efficitur non magna. Duis vel sem at elit iaculis mollis.

Nulla laoreet velit turpis, vel interdum nibh sagittis in. Nullam porta ut diam quis ultricies. Fusce id interdum lacus, maximus vestibulum nisi. Nullam ac iaculis tellus, eget aliquam ex. Sed porta erat ut nulla congue tempor. Donec quis maximus diam, nec interdum dolor. Etiam tellus leo, vulputate ac mollis nec, pellentesque eget turpis. Maecenas et vehicula dui, in dictum purus. Quisque at enim et dui tempor hendrerit vel at orci. Aliquam in dui nisl. Sed non orci maximus, vestibulum erat nec, placerat odio. Integer vehicula vitae eros scelerisque consectetur. Proin ante lectus, scelerisque ut auctor gravida,elementum eget nisl.`;

let wordCount = 0;
let inWord = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n") {
    inWord = false;
  } else if (!inWord) {
    inWord = true;
    wordCount++;
  }
}

console.log(wordCount);

/*let latinWord = "et"
let isEt = true

for (let i = 0; i < longText.length; i++){
    if (longText[i] == "et") {
      isEt = true;
      wordCount++
    } else if (!isEt) {
        isEt = false;
        
    }
}*/

let countEt = 0;

for (let i = 0; i < longText.length; i++) {
  //these check 4 and three characters in a row. so i and the next character i+1, next which is 2 positions from the first i so i+2 and so on...
  searchLowerEt =
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];
  searchUpperEt = longText[i] + longText[i + 1] + longText[i + 2];

  if (searchLowerEt === " et " || searchUpperEt === "Et ") {
    countEt++;
  }
}

console.log("so many ets: ", countEt);

/*let spaceCount = 0
for (let i = 0; i < longText.length; i++){
    if(longText[i] === " " || longText[i] === "\n"){
        spaceCount++
    }
} 

console.log("spacecount", spaceCount)

console.log("REGEX VERSION", longText.match(/\b\w+\b/g).length)
*/

//Bonus 2 Palindrome

let phraseToCheck = "A man, a plan, a canal, Panama!";
let forwardString = "";
let backwardString = "";

function checkIfPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char !== " " &&
      char !== "," &&
      char !== "!" &&
      char !== "'" &&
      char !== '"' &&
      char !== '"' &&
      char !== '"' &&
      char !== "?"
    ) {
      forwardString += char.toLowerCase();
    }
  }

  for (let i = forwardString.length - 1; i >= 0; i--) {
    const char = forwardString[i];
    backwardString += char;
  }

  if (forwardString === backwardString) {
    console.log("It's a palindrome!!!");
  } else {
    console.log("Not a palindrome");
  }
}

checkIfPalindrome(phraseToCheck);
