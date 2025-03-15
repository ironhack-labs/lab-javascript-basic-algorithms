console.log("I'm ready");

//Iteration 1
const hacker1 = "Samanta";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Barbara";	
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if(hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if(hacker1Length < hacker2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else if(hacker1Length == hacker2Length) {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

//Iteration 3
let hacker1UpperCase = hacker1.toUpperCase();
let hacker2UpperCase = hacker2.toUpperCase();
let hacker1UpperCaseArray = hacker1UpperCase.split("");
let hacker2UpperCaseArray = hacker2UpperCase.split("");
console.log(hacker1UpperCaseArray);
console.log(hacker2UpperCaseArray);

let hacker2Array = hacker2.split("");
console.log(hacker2Array.reverse());

if(hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver's name goes first.`);
} else if(hacker1.localeCompare(hacker2) === -1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if(hacker1.localeCompare(hacker2) === 0) {  
  console.log( `What?! You both have the same name?`);
}

//Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui orci, tempus id ante ac, interdum ultrices nunc. Aenean dictum tortor sem, nec efficitur dui consectetur id. Nunc vel gravida est. Quisque metus metus, ultricies vel vulputate ut, malesuada id eros. Duis posuere varius euismod. Fusce sed nisl rhoncus, sodales metus quis, accumsan mi. In hac habitasse platea dictumst.\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut tempus semper eros, nec luctus ipsum suscipit nec. Vivamus dictum tristique turpis in laoreet. Nunc laoreet ornare velit, vel feugiat mi feugiat nec. Suspendisse pretium eleifend consequat. Vivamus imperdiet bibendum dui, non mattis urna iaculis sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi commodo pharetra velit sed accumsan. Cras maximus, lectus ut ultricies ornare, urna elit finibus augue, faucibus aliquet sem felis eu eros.\nNulla eleifend, metus nec faucibus elementum, massa elit elementum mi, id lobortis ex augue ornare eros. Phasellus ultricies felis viverra ligula maximus commodo. Pellentesque quis mattis justo, et accumsan tortor. Morbi at diam fringilla purus pharetra pretium. Sed at arcu id leo dignissim posuere. Nam libero tortor, tincidunt et eros non, tincidunt tempus urna. Nunc at ultrices odio. Nam et ornare velit. Phasellus finibus ante mauris, a consequat ligula fringilla sodales.";

let numberOfWords = longText.split(" ").length;
console.log(numberOfWords);

let countEt = 0;

longTextArray = longText.split(" ");
longTextArray.forEach(word => {
  if(word === "et") {
    countEt++;
  }
});

console.log(countEt);

//Bonus 2
const phraseToCheck = "Was it a car or a cat I saw?";

const phraseToCheckLowercase = phraseToCheck.toLocaleLowerCase();
const phraseToCheckArray = phraseToCheckLowercase.split("")

phraseToCheckArray.forEach((letter) =>{
  if(letter === " " || letter === "," || letter === "!" || letter === "?") {
    phraseToCheckArray.splice(phraseToCheckArray.indexOf(letter), 1);
  }
});

const phraseToCheckArrayReverse = phraseToCheckArray.toReversed();

const phrase = phraseToCheckArray.join("");
const phraseReversed = phraseToCheckArrayReverse.join("");

if(phrase === phraseReversed) {
   console.log("Palindrome");
} else {
  console.log("not a palindrome");
}
