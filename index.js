// Iteration 1: Names and Input
let hacker1 = "Hernani";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Franzi";
console.log(`The navigators's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
else if (hacker2.length > hacker1.length)
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );

// Iteration 3: Loops
//3.1
let hacker1Caps = "    ";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Caps += hacker1[i].toUpperCase() + " ";
  // if (i < hacker1.length - 1) hacker1Caps += " "; //Alternative: trim-Method!!
}
hacker1Caps = hacker1Caps.trim(); //trim-method RETURNS A NEW STRING !!!!
// hacker1Caps += ".";
console.log(hacker1Caps);

//3.2
let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

//3.3
console.log([hacker1, hacker2].sort());
let indexAlphabet1 = hacker1.charCodeAt(0);
let indexAlphabet2 = hacker2.charCodeAt(0);
if (indexAlphabet1 < indexAlphabet2)
  console.log(`The driver's name goes first`);
else if (indexAlphabet2 < indexAlphabet1)
  console.log(`Yo, the navigator goes first, definitely.`);
else console.log(`What?! You both have the same name?`);

//Other way to compare: localeCompare()
//just compare strings with hacker1 > hacker2

//Bonus
//Bonus 1
const longText = `Et lorem ipsum dolor sit et amet, consectetur adipiscing elit. Quisque vel nulla porttitor, tempor erat ut, cursus ex. Maecenas lacinia diam vitae quam ornare molestie vel a justo. Fusce quam neque, finibus quis dolor sed, laoreet feugiat lorem. Duis ac purus at ex cursus blandit quis nec tortor. Vivamus ut egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean blandit malesuada pulvinar.

Aenean fermentum risus ut sem commodo, ut facilisis nisi laoreet. Nunc leo felis, pulvinar vitae commodo vel, condimentum nec turpis. Cras nunc est, vestibulum nec aliquam at, sollicitudin sit amet nunc. Aliquam facilisis metus a semper egestas. Praesent fermentum consectetur sapien at dapibus. Proin et lectus lacinia, dictum ante ac, dapibus libero. Etiam quis orci sed nunc varius auctor sed ut orci. Nulla sem elit, mollis quis suscipit eget, accumsan vulputate sapien. In sagittis nunc eu risus placerat semper. Nam vitae metus scelerisque, tempor tellus sed, faucibus massa. Pellentesque quis velit odio. Nam tristique ex elit, laoreet pharetra leo varius sit amet. Vestibulum ac neque libero. Aliquam tortor mi, commodo id facilisis vel, mattis ac lorem. Mauris sodales, nulla nec vehicula gravida, nisi lorem iaculis ex, ac vulputate nulla sapien id nisi. Ut ex erat, pulvinar vel massa et, mattis dapibus magna.

Integer cursus porttitor nibh, id pharetra urna. Donec id convallis mi. Cras non dapibus augue. Aenean eleifend felis in pellentesque accumsan. Nulla eu ante et libero sagittis dignissim. Suspendisse augue lectus, fermentum vitae nunc nec, porta ultricies neque. Cras cursus, metus non vulputate tincidunt, orci turpis tristique ligula, id iaculis velit lectus vel quam. Mauris condimentum commodo augue egestas elementum. Proin luctus metus id maximus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque gravida tortor nec condimentum ornare. Proin consequat pulvinar fermentum. Vestibulum blandit interdum turpis, ac consequat arcu pharetra nec. Maecenas pretium felis urna et.`;

let countWords = 1;
let countEt = 0;
let textLength = longText.length;
for (let i = 0; i < textLength - 1; i++) {
  
  //check if its a new word
  if (longText[i] === " ") {
    countWords++;

    //String 'et' or 'Et' found
    if (
      (longText[i + 1] === "e" || longText[i + 1] === "E") &&
      longText[i + 2] === "t"
    ) {
      
      //its not just the beginning of a word starting with 'et'
      if (
        longText[i + 3] === " " ||
        longText[i + 3] === "." ||
        longText[i + 3] === ","
      ) {
        countEt++;
      }
    }
  }
}

//checking the first word, as it is not preceeded by a space
if (longText[0] === "E" && longText[1] === "t" && longText[2] === " ")
  countEt++;

console.log(`Number of words in longText: ${countWords}`);
console.log(`Number of et or Et in longText: ${countEt}`);

//Alternative for word count
const longArray = longText.split(" ");
console.log(`Number of words (alternative way): ${longArray.length}`);

//Bonus 2
let phraseToCheck = `No 'x' in Nixon`;
phraseClean = phraseToCheck;
let i = 0;
while (i < phraseClean.length) {
  if (
    phraseClean[i] === " " ||
    phraseClean[i] === `.` ||
    phraseClean[i] === `,` ||
    phraseClean[i] === `!` ||
    phraseClean[i] === `?` ||
    phraseClean[i] === `'`
  ) {
    phraseClean = phraseClean.slice(0, i) + phraseClean.slice(i + 1);
    i--;
  }
  //   phraseClean = phraseClean.replace(".", "");
  //   phraseClean = phraseClean.replace(",", "");
  //   phraseClean = phraseClean.replace("!", "");
  //   phraseClean = phraseClean.replace("?", "");
  //   phraseClean = phraseClean.replace(`'`, "");
  //   phraseClean = phraseClean.replace(` `, "");
  i++;
}
phraseClean = phraseClean.toLowerCase();

let phraseReverse = "";
for (let i = phraseClean.length - 1; i >= 0; i--) {
  phraseReverse += phraseClean[i];
}
if (phraseClean === phraseReverse)
  console.log(`Yes, '${phraseToCheck}' is a palindrome.`);
else console.log(`Nope, '${phraseToCheck}' isn't a palindrome!`);