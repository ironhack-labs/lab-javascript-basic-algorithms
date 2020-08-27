// Iteration 1: Names and Input

// refer to Jonas's commit

// Iteration 2: Conditionals

// refer to Laurence's commit

// Iteration 3: Loops

let hacker1 = "Tina";
let hacker2 = "Laurence";
let hacker3 = "Jonas";

//console.log(`The driver's name is ${hacker1}`);

// 3.1 Letters in upper case

let hacker1UpperCase = hacker1.toUpperCase();
//console.log(hacker1UpperCase);
let newHacker = "";
for (let i = 0; i < hacker1.length; i++) {
  //console.log(hacker1UpperCase[i]);
  newHacker = newHacker + hacker1UpperCase[i] + " ";
  //console.log(newHacker);
}
console.log(newHacker);

// 3.2 Print letters in reverse

let reverseHacker = "";
for (let i = hacker1.length-1; i >= 0; i--) {
  reverseHacker = reverseHacker + hacker1[i];
}
console.log(reverseHacker);

// 3.3 lexicographic order

if (hacker1 === hacker2) {
    console.log("It seems that you have the same name");
  } else {
    for (i = 0; i <= hacker1.length; i++) {
      if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first")
        break
      } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigators name goes first");
        break
      } 
  }
  }

  // Bonus 1: Lorem Ipsum
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et nunc ligula. Pellentesque in euismod massa. Ut maximus scelerisque risus, eget facilisis tortor sodales a. Sed rutrum nisi eu lacinia luctus. Maecenas ligula tellus, hendrerit ut cursus at, bibendum in diam. Proin enim lacus, ullamcorper eget nunc sit amet, lobortis bibendum odio. Nulla facilisi. Cras aliquet accumsan erat et commodo. Nullam lobortis purus eros, vel pharetra tellus ultricies ut. Sed vehicula, lectus et dignissim dictum, urna lorem lacinia turpis, id ultricies lorem mauris vel nunc. Proin convallis aliquet elit, sit amet blandit tellus vestibulum lobortis. Aenean vel tincidunt enim. Nulla tristique dignissim viverra. Morbi laoreet libero congue aliquam posuere. In mauris ante, gravida id lectus non, faucibus vestibulum arcu. Mauris vitae ligula turpis. Sed ultricies quis mauris a convallis. Praesent at est et magna tincidunt ultricies non in augue. In id rutrum nisl, nec eleifend urna. Nunc lacinia fermentum sapien ac facilisis. Nam bibendum lacinia lectus a vestibulum. Nam non fringilla nibh. Pellentesque consectetur sed enim interdum fermentum. Morbi at libero finibus nunc dignissim aliquam vel in velit. In venenatis sed augue tempor elementum. Nam imperdiet pellentesque convallis. Integer sollicitudin ultrices urna eget vulputate. Aenean vulputate finibus quam. Pellentesque vestibulum mollis mauris, non fringilla ante porta et. Praesent porta eget mauris et pulvinar. Donec euismod tempus tincidunt. Nulla ut venenatis neque, quis ultrices ante. Nullam condimentum, dolor vitae consequat placerat, augue ipsum lacinia lacus, nec accumsan odio turpis eget dolor. Suspendisse potenti. Nullam non placerat quam. Phasellus fringilla quis augue id posuere. Pellentesque faucibus pellentesque convallis."

let wordCount = 1

for (i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    wordCount++;
  } else {
    continue;
  }
}

console.log(wordCount);

let countEt = 0

for (i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    if (lorem.slice(i, i+4) === " et ") {
      countEt++;
    } else if (lorem.slice(i, i+4) === " et.") {
      countEt++;
    } else {
      continue;
    }
  } else {
    continue;
  }
}

console.log(countEt);

// palindrome checker
// Add a function to clean phrases

let phraseToCheck = "tacocat";
let reversePhrase = "";

for (i = phraseToCheck.length-1; i >= 0; i--) {
  reversePhrase = reversePhrase + phraseToCheck[i];
}

if (reversePhrase === phraseToCheck) {
  console.log(`${phraseToCheck} is a palindrome`)
} else {
  console.log(`${phraseToCheck} is not a palindrome`)
}

//console.log(reversePhrase);