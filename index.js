// Iteration 1: Names and Input
const hacker1 = "Lucia";
const hacker2 = "Laia";
console.log("The driver's name is " +  hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if(hacker1Length > hacker2Length){
 console.log(`The driver has the longest name, it has ${hacker1Length} characters.`); 
}
  else if (hacker1Length < hacker2Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
  }
else{
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
let driverUpper = "";

for (let i = 0; i < hacker1Length; i++) {
  const char = hacker1[i].toUpperCase();
  driverUpper += char + " ";
}
console.log(driverUpper);

let navigatorReverse = "";

for (let i = hacker2Length - 1; i >= 0; i--) {
  const char = hacker2[i];
  navigatorReverse += char;
}
console.log(navigatorReverse)

const order = hacker1.localeCompare(hacker2);

if (order === -1) {
  console.log("The driver's name goes first.")
}
else if (order === 1) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}


// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut diam ut nisl blandit dapibus id aliquet magna. Etiam dictum et felis vel sollicitudin. Praesent accumsan, ex at pretium gravida, enim purus sodales ex, nec rhoncus leo libero ut nibh. Etiam vehicula orci eu leo molestie, vitae porttitor urna posuere. Nullam auctor maximus tellus, egestas pharetra odio imperdiet non. Nam laoreet ligula ac sapien maximus sagittis. Quisque sed tincidunt odio. Nunc lobortis luctus arcu ut fermentum. Vivamus pretium metus eget ante congue condimentum. Pellentesque justo turpis, pellentesque in sapien sed, feugiat varius turpis. Morbi eget arcu ut est malesuada dictum. Etiam vel sem volutpat, consequat lacus vitae, consectetur felis.

Quisque ultricies dolor eu metus interdum cursus. Morbi sodales turpis quam, vel tincidunt sapien fermentum id. Morbi eu massa a arcu finibus congue id eget massa. Pellentesque porttitor eget orci quis suscipit. In laoreet quam a luctus condimentum. Quisque iaculis elementum molestie. Ut pretium tellus sit amet faucibus volutpat. Morbi nisl justo, aliquet non dignissim vitae, consequat eget urna. Ut mi ipsum, gravida at posuere eget, malesuada sit amet justo.

Quisque aliquam laoreet eleifend. Phasellus ornare, nulla luctus eleifend pulvinar, magna ante congue neque, quis interdum enim ante id metus. Aliquam varius massa sit amet massa fringilla ornare. Quisque elementum turpis libero, vel aliquet augue faucibus id. Nullam varius nibh nec facilisis aliquet. Nullam rhoncus dolor sed tellus cursus ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis diam ante, luctus eget nunc et, ultrices mollis dui. Maecenas augue nisl, pellentesque sit amet orci ac, dictum blandit sem. Mauris ac eros lacinia ex interdum mollis vitae nec purus. Fusce tempus in justo in ultrices. Maecenas porttitor lorem et nibh egestas hendrerit. Pellentesque tincidunt, tellus sed aliquam hendrerit, neque eros vehicula elit, a congue magna lorem id nisl. Aliquam erat volutpat. Sed porttitor mi quis justo lobortis fringilla. Aliquam vehicula erat a justo vehicula malesuada.`;

function countWords (text) {
  let wordsArray = [];

  wordsArray = text.trim().split(/\s+/)

  return wordsArray.length;
}

const words = countWords(longText);

console.log("Number of words: " + words);

let countEt = 0;

for (let i = 0; i < longText.length; i++) {
  const word = longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];
  
  if (word === " et ") {
    countEt += 1;
  }
}

console.log("Number of times et appears: " + countEt)


// Bonus 2
const phraseToCheck = "hello";

let fullPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  switch (phraseToCheck[i]) {
    case " ":
    case ".":
    case ",":
    case "!":
    case "?":
      continue;
    default:
      fullPhrase += phraseToCheck[i];
      break;
  }
}

fullPhrase = fullPhrase.toLowerCase()

const strLength = fullPhrase.length;

let phrase1 = fullPhrase.slice(0, strLength/2);
let phrase2 = fullPhrase.slice(strLength/2);

let phrase2Reverse = "";
for(let i = phrase2.length - 1 ; i >= 0; i--){
  const char = phrase2[i];
  phrase2Reverse += char;
}

if (fullPhrase.length % 2 !== 0) {
  phrase2Reverse = phrase2Reverse.slice(0, phrase2Reverse.length - 1)
}

const comp = phrase1.localeCompare(phrase2Reverse);

if (comp === 0) {
  console.log("Palindrome")
}
else {
  console.log("Not a palindrome")
}