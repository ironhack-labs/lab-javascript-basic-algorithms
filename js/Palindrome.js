/* Bonus 2 - Palindrome
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if 
the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

Sample values to be verfied:
- "A man, a plan, a canal, Panama!"
- "Amor, Roma"
- "race car"
- "stack cats"
- "step on no pets"
- "taco cat"
- "put it up"
- "Was it a car or a cat I saw?" and "No 'x' in Nixon". */

/*Logic to check if a string is palindrome or not:
1. Get a string without any spaces/special characters i.e. string with only letters (lets say original string)
2. Reverse a string (lets say reversed string)
3. Compare original string and reversed string, if both are equal, string is a palindrome.
*/

//Gets the string without any special characters.
function getStringWithoutSpecialChars(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= "a" && inputString[i] <= "z") {
      result += inputString[i];
    }
  }
  return result;
}

//Gets the reversed string.
function reverseString(inputString) {
  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }
  return result;
}

//Checks whether a string is palindrome or not
function checkPalindrome(text) {
  let plainText = getStringWithoutSpecialChars(text.replace(" ", ""));

  let reversedString = reverseString(plainText);

  if (text.localeCompare(reversedString)) {
    console.log("Yes, It is palindrome!" + " " + text);
  } else {
    console.log("Oh, not a palindrome one!" + " " + text);
  }
}

//Test Input samples
checkPalindrome("A man, a plan, a canal, Panama!");
checkPalindrome("Amor, Roma");
checkPalindrome("race car");
checkPalindrome("stack cats");
checkPalindrome("step on no pets");
checkPalindrome("taco cat");
checkPalindrome("put it up");
checkPalindrome(`Was it a car or a cat I saw?" and "No 'x' in Nixon`);
