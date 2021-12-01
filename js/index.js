// Iteration 1: Names and Input
// Driver
const hacker1 = "Tom";
console.log(`The driver's name is ${hacker1}`);
// Navigator
const hacker2 = "Anne";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
// 3.1
let printName1 = "";
for (const character of hacker1) {
  printName1 += character.toUpperCase() + ' ';
}
printName1 = printName1.trim();
console.log(printName1);

// 3.2
let printName2 = "";
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
  printName2 += hacker2[i];
}
console.log(printName2);

// 3.3
const isSameName = (name1, name2) => {
  return name1 === name2;
}
const isDriverNameLonger = (driver, navigator) => {
  return driver.length > navigator.length;
}
const getFirstLexicographicMsg = (driver, navigator) => {
  if (isSameName(driver, navigator)) {
    return `What?! You both have the same name?`;
  }
  else {
    let indexMax = hacker1.length < hacker2.length ? hacker1.length : hacker2.length;
    for (let i = 0 ; i < indexMax ; i++) {
      if (driver[i] === navigator[i]) {
        continue;
      }
      else {
        if (!(driver[i] > navigator[i])) {
          return `The driver's name goes first.`;
        }
        else {
          return `Yo, the navigator goes first definitely.`;
        }
      }
    }
    if (!isDriverNameLonger(driver, navigator)) {
      return `The driver's name goes first.`;
    }
    else {
      return `Yo, the navigator goes first definitely.`;
    }
  }
};
console.log(getFirstLexicographicMsg(hacker1, hacker2));


// Bonus 1

// counting paragraphs
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum tincidunt ultricies. Etiam ornare egestas posuere. Cras et rutrum mi. Aliquam ac nisi dolor. Curabitur nunc nulla, porttitor at mauris pharetra, commodo ultrices nisl. Nulla quis leo lobortis, iaculis sem ut, molestie purus. Suspendisse neque ligula, placerat eget tellus eu, fermentum auctor neque. Cras et volutpat quam. Fusce mattis condimentum metus, sit amet placerat mi. Nulla eleifend eu justo vel tristique. Donec turpis purus, pretium id sapien id, luctus molestie metus. Nam et ipsum aliquam, dapibus turpis sit amet, congue dui. Nunc sed rhoncus ex. In hac habitasse platea dictumst. Maecenas egestas placerat viverra. Donec auctor tincidunt eros ac dictum. Integer interdum risus aliquet justo ullamcorper, sit amet venenatis augue hendrerit. Nulla vel tincidunt magna. Quisque vel lacus eu velit hendrerit finibus at vel nisi. Quisque tincidunt auctor ipsum, quis ornare turpis molestie sit amet. Aenean lacus est, fermentum ac dui sit amet, rhoncus egestas felis. Ut quis aliquet mauris. In hendrerit bibendum malesuada. Praesent et porta libero. Aliquam purus mi, scelerisque et leo sit amet, gravida porta lorem. Quisque ac iaculis urna. Nunc finibus mattis vulputate. Suspendisse lacinia rutrum leo at porttitor. Integer sed lacus iaculis, finibus metus eget, dictum ex. In sodales id ipsum accumsan aliquet. Sed ligula nisi, consectetur eget vehicula pulvinar, congue eu felis. Vivamus non convallis justo. Fusce auctor, nunc eu malesuada tempor, lorem nunc eleifend sem, eget dignissim augue lorem eget justo. Cras in metus ante. Nulla eros ligula, rutrum eu nisi sit amet, pharetra consectetur purus. Sed ullamcorper, lorem eu semper venenatis, mi lorem interdum magna, at suscipit dui nisi et est.";

const countWords = (theString) => {
  if (theString) {
    return `The text contains ${theString.split(' ').length} words.`;
  }
  else {
    return `There is 0 word to count. Sorry!`;
  }
};
console.log(countWords(lorem));
console.log(countWords(''));
console.log(countWords("The red fox is very smart."));

const countOccurrences = (theString, sampleString) => {
  return `The text contains ${theString.split(sampleString).length - 1} occurrences of "${sampleString}".`;
};
console.log(countOccurrences(lorem, 'et'));
console.log(countOccurrences('', 'et'));


// detecting loose palindrome (discarding punctuation characters)
console.log("--- Bonus 2 ---")
const notPalindrome = 'The red fox is very smart.';
const palindrome1 = 'A man, a plan, a canal, Panama!';
const palindrome2 = 'Amor, Roma';
const palindrome3 = 'race car';
const palindrome4 = 'stack cats';
const palindrome5 = 'step on no pets';
const palindrome6 = 'taco cat';
const palindrome7 = 'put it up';
const palindrome8 = `Was it a car or a cat I saw?" and "No 'x' in Nixon`;

// function cleaning th string to keep only a to z characters
const cleanString = theString => {
  const regex = /[a-z]/g;
  const cleanStringArray = theString.toLowerCase().match(regex);
  let cleanedString = "";
  for (let i = 0 ; i < cleanStringArray.length ; i++) {
    cleanedString += cleanStringArray[i];
  }
  return cleanedString;
};
// function to check if a string is a palindrome
const isPalindrome = (theString) => {
  const cleanedString = cleanString(theString);
  console.log(cleanedString);
  // evaluate maxIndex as half the length of the string
  // the middle character, if present, can be ignored hence the Math.floor()
  const indexMax = Math.floor(cleanedString.length / 2);

  // looping from the start of the string
  for (let i = 0 ; i < indexMax ; i++) {
    // looping from the end of the string
    let j = cleanedString.length - 1 - i;
    // testing the string
    // console.log(`left char: ${cleanedString[i]} --- right char: ${cleanedString[j]}`);
    if (cleanedString[i] !== cleanedString[j]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(notPalindrome));
console.log(isPalindrome(palindrome1));
console.log(isPalindrome(palindrome8));

