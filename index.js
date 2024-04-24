// Public declaration of variables
const hacker1 = "Kim";
const hacker2 = "Johnatan";
const palindromeWord = "A man, a plan, a canal, Panama!";
const longText = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Suspendisse tellus mauris, semper non turpis eget`;

// Iteration 1:
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2:
// Function for checking length of the string
const longestNameMessage = (hacker1, hacker2) => {
  if (hacker1.length > hacker2.length) {
    const hacker1Formatted = hacker1.toUpperCase().split("").join(" ");
    return `The driver has the longest name, it has ${hacker1Formatted} characters.`;
  } else if (hacker1.length < hacker2.length) {
    const hacker2Formatted = hacker2.split("").reverse().join("");
    return `It seems that the navigator has the longest name, it has ${hacker2.length} characters and the name is ${hacker2Formatted} with reversed order.`;
  } else {
    return `Wow, you both have equally long names, ${hacker1.length} characters!`;
  }
};

// Iteration 3:
// Function to print out str in capital and reverse order
const stringManipulation = (str) => {
  const driversheyName = str.toUpperCase().split(" ").join(" ");
  const navigatorName = str.split("").reverse().join(" ");
  return driversName, navigatorName;
};

// Function for checking if the string is in lexicographic order
const lexicographicComparison = (hacker1, hacker2) => {
  if (hacker1 === hacker2) {
    return "What?! You both have the same name?";
  } else if (hacker1 < hacker2) {
    return "The driver's name goes first.";
  } else {
    return "Yo, the navigator goes first, definitely.";
  }
};

// Bonus 1:
// Function for counting the words in a text/paragraph
const countWords = (text) => {
  const words = text.split(" ");
  return words.length;
};

// Function for checking the text/paragraph if it includes the word "et"
const countWordsWithEt = (text) => {
  const words = text.split(" ").filter((word) => word.includes("et"));
  return words.length;
};

// Bonus 2:
// Function for checking if the string is a palindrome
const phraseToCheck = (str) => {
  // used regex for remove non alphabet characters and make all chars to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let len = cleanStr.length;

  // Reverse the cleaned string and compare with the original
  // const reversedStr = cleanStr.split("").reverse().join("");
  // Itteration through the original string and compare with the
  // original string backwards
  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Call to console for action
console.log(stringManipulation(hacker1, hacker2));
console.log(longestNameMessage(hacker1, hacker2));
console.log(lexicographicComparison(hacker1, hacker2));
console.log(countWords(longText));
console.log(countWordsWithEt(longText));
console.log(phraseToCheck(palindromeWord));
