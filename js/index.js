// Iteration 1: Names and Input
let hacker1 = 'John Doe'
console.log("The driver's name is", hacker1) 
let hacker2 = 'Siobhan Doe' 
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`); 
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log("Wow, you both have equally long names, same characters!");
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" 
for (let i = 0; i < hacker1.length; i++) { 
    splittedStr = hacker1.split(''); 
    withSpaces = splittedStr.join(' '); 
    upperCaseWithSpaces = withSpaces.toUpperCase(); 
}
console.log(upperCaseWithSpaces);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigator = hacker2.split("");
console.log(navigator.reverse().join("")); 

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/  
if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely."); 
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time 
// Bonus 1 - Lorem Ipsum 
let loremIps = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, sagittis sed semper ut, lacinia vitae tortor. Ut efficitur convallis orci, id aliquam tellus rhoncus porta. Morbi porta et quam sit amet fringilla. Suspendisse venenatis vel neque eu hendrerit. Nulla eu rhoncus ex. Nunc at hendrerit arcu. Proin eget vulputate justo. Aliquam pretium risus vitae odio egestas gravida. Nulla felis eros, sodales eget metus ut, porttitor vehicula justo. Ut nulla ipsum, rutrum mollis mi ut, congue vulputate leo. Nunc dui ex, pulvinar quis congue gravida, eleifend eu purus. Cras ultricies massa lorem, eu porttitor nisi cursus vitae. Integer ut ante sed sem vehicula tincidunt. Integer quis erat ut ligula efficitur finibus a vel ante. Etiam et dui eu tellus commodo eleifend. Maecenas nunc dui, dapibus id accumsan vitae, blandit eget neque. Cras elementum est leo, non venenatis odio malesuada vitae. Praesent nec ipsum nisl. Vivamus mattis pulvinar nisl, ut bibendum mauris euismod a. Nulla rhoncus arcu sed tellus varius, sed viverra lacus sagittis. Nulla eros massa, finibus ut rutrum et, venenatis a metus. Pellentesque eu venenatis urna. Sed in pellentesque mauris. Nullam blandit erat semper viverra commodo. Quisque ex ligula, tincidunt quis fringilla nec, tincidunt eu libero. Cras semper fringilla quam vitae tempor. Quisque ultrices ut mi vel imperdiet. Aliquam erat volutpat. Quisque at lectus tempus, vestibulum tortor vel, accumsan metus. Suspendisse tempor diam ac enim varius pulvinar. Nulla faucibus a ante eget rhoncus. Nunc finibus quam diam, sit amet eleifend mauris pharetra sed. Phasellus rutrum lorem nec elit venenatis, at aliquet tellus maximus. Suspendisse a euismod sapien. Curabitur a dolor finibus, faucibus augue eget, pretium nunc. Nunc placerat, erat id iaculis pellentesque, mauris est tristique diam, at auctor odio justo vitae orci. Sed sagittis placerat tortor ut tristique. Quisque sed felis porttitor, ornare purus ac, feugiat nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
const wordCount = loremIps.split(" "); 
console.log(`The lorem ipsum word count is: ${wordCount.length}`); 

let etQty = 0
wordCount.forEach((element) => {
  if (element === "et") {
    etQty++;
  }
}); 
console.log(`et appears ${etQty} times`);

// Bonus 2 - Palindrome 
let phraseToCheck = "taco cat"; 
let noSpaceString = ""; 
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " ") 
    noSpaceString += phraseToCheck[i];
}
console.log(`noSpaceString: ${noSpaceString}`); 

let reversedStr = ""; 

for (let i = noSpaceString.length-1; i >= 0; i--) {
  reversedStr += noSpaceString[i];
}

if (reversedStr === noSpaceString) {
  console.log(`${phraseToCheck} is a palindrome`);
} else {
  console.log(`${phraseToCheck} is not a palindrome`);
} 
