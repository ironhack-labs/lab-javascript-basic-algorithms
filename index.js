// Iteration 1: Names and Input
const hacker1 = "Ryan";
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = "Computer";
console.log(`The navigator´s name is ${hacker2}`);

const longText = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Suspendisse tellus mauris, semper non turpis eget`;
const palindromeWord = "A man, a plan, a canal, Panama!";

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`);
}

const city1 = "FCB"
const city2 = "RealMadrid"

const FCBarcelona = city1.length
const RealMadrid = city2.length

if (RealMadrid > FCBarcelona) {
    console.log("Real is greater than Barça!")

} else if (RealMadrid < FCBarcelona) {
    console.log("Barça is greater than Real Madrid!s")
}

else {
    console.log("They are both equally great teams")
}

// Iteration 3:
// Function to print out str in capital and reverse order
const stringManipulation = (str) => {
    const driversName = str.toUpperCase().split(" ").join(" ");
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
      return "the navigator goes first.";
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
  console.log(lexicographicComparison(hacker1, hacker2));
  console.log(countWords(longText));
  console.log(countWordsWithEt(longText));
  console.log(phraseToCheck(palindromeWord));