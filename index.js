// Iteration 1: Names and Input
let driversName = {
    hacker1: "XXXX"
  };
  console.log(driversName.hacker1);
  
  let navigatorsName = {
    hacker2: "YYYY"
  };
  console.log(navigatorsName.hacker2);
  
  // Iteration 2: Conditionals
  function compareNames(driversName, navigatorsName) {
    if (driversName.length > navigatorsName.length) {
      console.log(`${driversName} is longer than ${navigatorsName}`);
    } else if (navigatorsName.length > driversName.length) {
      console.log(`${navigatorsName} is longer than ${driversName}`);
    } else {
      console.log(`${driversName} and ${navigatorsName} have the same length`);
    }
  }
  
  compareNames("driversName", "navigatorsName");
  
  // Iteration 3: Loops
  let word = "John";
  let spacedUppercaseWord = word
    .split("")
    .map((letter) => letter.toUpperCase())
    .join(" ");
  
  console.log(spacedUppercaseWord);
  
  let word2 = "John";
  let reversedWord = word2.split("").reverse().join("");
  console.log(reversedWord);
  
  let str1 = "John";
  let str2 = "John";
  
  let result = str1.localeCompare(str2);
  if (result < 0) {
    console.log(`${str1} comes before ${str2} in lexicographic order`);
  } else if (result > 0) {
    console.log(`${str2} comes before ${str1} in lexicographic order`);
  } else {
    console.log(`${str1} and ${str2} are the same in lexicographic order`);
  }
  
  // Bonus 1
  let longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue sem non accumsan venenatis. Morbi quis venenatis mauris, vel auctor mi. Pellentesque eu ullamcorper nibh. Duis sagittis felis quis velit interdum, non tempus risus vulputate. Sed in nisi non justo varius ultricies. Sed tortor sapien, maximus in posuere et, lacinia eget erat. Donec maximus convallis nunc, et bibendum neque iaculis eget. Cras in blandit felis, quis mattis mi. Nullam tempor ligula vel enim pharetra ultricies. Mauris sed justo porttitor ipsum congue faucibus. Mauris eros metus, pellentesque laoreet nisi id, blandit convallis sem. Aenean aliquet dui eros. Donec gravida mollis quam. Nam eget justo sagittis, sollicitudin nunc fringilla, egestas augue. In sit amet odio libero. Vivamus eget nulla eu lorem lobortis eleifend ut eget dolor. \n Etiam massa purus, egestas quis fringilla quis, pretium eget ligula. In laoreet dui ac hendrerit lobortis. Nam in commodo est, et hendrerit diam. Suspendisse potenti. Cras purus elit, malesuada eget lorem ac, scelerisque tempus felis. Nunc eget mattis massa. Pellentesque et arcu nunc. Morbi feugiat, turpis non consectetur tempor, diam purus bibendum lectus, ut varius odio velit at est. Proin auctor gravida velit eget sodales. Nunc viverra vestibulum bibendum. Vestibulum laoreet erat dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n Donec sit amet leo faucibus, mollis eros quis, dictum lectus. Mauris volutpat ligula felis, id consectetur tortor cursus id. Donec in commodo velit. Nunc at sem finibus, convallis nunc ut, rhoncus sem. Duis sit amet leo tristique, varius ligula vitae, vulputate ex. Sed ac condimentum ante. Maecenas fringilla libero libero, eget euismod lacus luctus quis. Aliquam interdum diam ex, non porta nisl gravida sed. Sed pharetra tincidunt purus, nec auctor augue sagittis a. Nullam blandit elit sit amet odio consequat rhoncus eu ut sem. In hac habitasse platea dictumst.";
  
  let words = longText.split(" ");
  let wordCount = words.length;
  
  console.log(wordCount);
  
  let text = "longText";
  let specificWord = "et";
  
  let wordsArray = longText.split(" ");
  let count = 0;
  
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === specificWord) {
      count++;
    }
  }
  
  console.log(`The word "${specificWord}" appears ${count} times.`);
  
  // Bonus 2
  function isPalindrome(str) {
    let cleanStr = str.replace("/[^A-Za-z0-9]/g, ").toLowerCase();
    let reversedStr = cleanStr.split("").reverse().join("");
  
    if (cleanStr === reversedStr) {
      console.log(`"${str}" is a palindrome.`);
    } else {
      console.log(`"${str}" is not a palindrome.`);
    }
  }
  
  isPalindrome("racecar");
  isPalindrome("How are you doing");
  