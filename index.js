// Iteration 1: Names and Input

const hacker1 = "Angel";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Priscilla";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters

let hacker1WithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase();
  
  if(i < hacker1.length - 1) {
    hacker1WithSpaces += " ";
  }
}

console.log(hacker1WithSpaces);

// 3.2 Print all the characters of the navigator's name in reverse order

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

// 3.3 Depending on the lexicographic order of the strings, print

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

//We use the split(" ") method to split the string into an array of words based on the space character as the separator. Each word in the sentence is treated as a separate element in the resulting array

const longTextWords = longText.split(" ");
let longTextWordsCount = 0;

for (let i = 0; i < longTextWords.length; i++) {
  
  // we check if the string is not a number nor can be coverted into a number
  
  if (isNaN(longTextWords[i])) {
     longTextWordsCount++;
  } else {
    continue;
  }
}

console.log(longTextWordsCount);

//  count the number of times the Latin word et appears

let longTextWordsEtCount = 0;

for (let i = 0; i < longText.length; i++) {
    if(longText[i] + longText[i+1] === "et") {
        longTextWordsEtCount++
    }
}

console.log(`how many times 'et' appears is: ${longTextWordsEtCount}`)

// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
let reversedPhrase = "";
let reReversedPhrase = "";

  for (let i = phraseToCheck.length - 1; i >= 0; i--) {
      reversedPhrase += phraseToCheck[i];
  }

  for (let i = reversedPhrase.length - 1; i >= 0; i--) {
      reReversedPhrase += reversedPhrase[i];
  }

if (phraseToCheck === reReversedPhrase) {
  console.log("This is a palindrome!");
} else {
  console.log("This is not a palindrome!");
}