console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

const driverChar = hacker1.length; // 4
const navigatorChar = hacker2.length; // 5
const sameLength = driverChar === navigatorChar;

// Iteration 2: Conditionals

if (driverChar > navigatorChar) {
  console.log(
    `The ${hacker1} has the longest name, it has ${driverChar} characters.`,
  );
} else if (driverChar < navigatorChar) {
  console.log(
    `It seems that the ${hacker2} has the longest name, it has ${navigatorChar} characters.`,
  );
} else if (driverChar === navigatorChar) {
  console.log(
    `Wow, you both have equally long names, ${sameLength} characters!`,
  );
}

// Iteration 3: Loops

let driverNameWithSpaces = ""; // empty so it can be filled with cenas

for (let i = 0; i < hacker1.length; i++) {
  driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(`Driver's name with caps & spaces: ${driverNameWithSpaces}`);

let lastIndex = hacker1.length - 1;
let nameReverse = ""; // empty so it can be filled with cenas

for (let i = lastIndex; i >= 0; i--) {
  nameReverse += hacker1[i];
}

console.log(`Reversed name: ${nameReverse}`);

let lexiOrder = hacker1.localeCompare(hacker2);

if (lexiOrder < 0) {
  console.log("The driver's name goes first.");
} else if (lexiOrder > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sapien aliquam, sodales metus eu, scelerisque quam. Praesent aliquet ipsum vitae elit viverra venenatis. Donec sodales elementum volutpat. Aenean in dui consequat, tristique libero non, condimentum lorem. Proin lorem elit, mollis eget rhoncus ut, elementum sit amet odio. Praesent non euismod metus, vitae bibendum nisl. Vestibulum posuere venenatis nibh id tincidunt. Suspendisse eleifend libero velit, at tristique nisi consequat eget. Cras condimentum, dolor id pulvinar hendrerit, ligula libero feugiat nulla, at rhoncus dolor purus quis ligula. In hac habitasse platea dictumst. Nullam blandit, quam sed consectetur rhoncus, velit ipsum vehicula ligula, at tristique arcu arcu at enim. Sed quis arcu sed ligula iaculis interdum. Sed in ante rutrum, commodo lorem congue, lacinia nulla. Nulla id neque sed lectus commodo congue quis eget leo.

Pellentesque a odio ut nisi efficitur congue eu vel nisi. Sed elementum mattis nibh, sit amet fermentum tellus euismod quis. Morbi lobortis elit ac ligula cursus fringilla. Donec mollis placerat felis. Sed dictum, purus vitae egestas pharetra, tellus turpis feugiat tortor, sit amet blandit nisl metus in ligula. Fusce vitae iaculis diam. Etiam ornare, dui id mollis feugiat, tortor purus convallis orci, eu gravida tellus lacus nec dolor. Duis ullamcorper et tortor sed rhoncus. Vivamus nunc nisi, ullamcorper eget massa ut, gravida rhoncus erat. Praesent condimentum tellus odio, eu auctor risus tempus vel. Vestibulum tincidunt, felis vel pellentesque malesuada, orci elit egestas mauris, ac pretium enim nunc a eros.

Sed varius sed nisl eu ullamcorper. Ut mi ligula, vestibulum in tortor eu, lobortis ultrices diam. Donec et enim vitae orci iaculis vestibulum non at purus. Phasellus condimentum, elit id sollicitudin ultricies, nisi turpis varius mi, eget hendrerit orci nulla vitae neque. Vivamus et congue felis, nec aliquam leo. Nunc nibh eros, faucibus aliquam sagittis eget, vestibulum vitae est. Mauris consectetur ipsum urna, eu ullamcorper mi faucibus in. Maecenas bibendum imperdiet purus sit amet ultricies. Pellentesque tempus est eu massa malesuada, quis elementum nunc semper. Aenean ut quam velit. Nullam ornare felis ultricies lacinia consectetur.`;

let totalWords = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") totalWords++;
}

totalWords += 3;

console.log(totalWords);

//et count;

let etCount = "";
for (i = 0 ; i < longText.length ; i++) {
    if (longText[i] + longText[i+1] === "et") {
        etCount++;
    }
}

console.log(etCount);

// Bonus 2

let phraseToCheck = "taco cat";
let cleanWord = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i];
  if (char !== ' ' && char !== ',' && char !== '.' && char !== '\n') {
    cleanWord += char;
  }
}

let reversedWord = "";

for (let i = cleanWord.length - 1; i >= 0; i--) {
  const char2 = cleanWord[i];
  reversedWord += char2;
}

const isPalindrome = cleanWord === reversedWord;

console.log(isPalindrome);