// Iteration 1: Names and Input
let hacker1= "katia";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "rudy";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let result = "";
for(let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

// 3.2
let resultReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  resultReverse += hacker2[i];
}
let resultCapReverse = resultReverse.slice(0, resultReverse.length - 1) + resultReverse[resultReverse.length - 1].toUpperCase();
console.log(resultCapReverse);

// 3.3
if (hacker1.localeCompare(hacker2, "en", { sensitivity: 'base' }) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker2.localeCompare(hacker1, "en", { sensitivity: 'base' }) === 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2, "en", { sensitivity: 'base' }) === 0) {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum nisl eros, sit amet posuere dolor viverra a. Aliquam dictum nec justo non rhoncus. Fusce consequat magna justo, sed feugiat orci iaculis in. Aliquam vehicula arcu urna, quis blandit mauris aliquet ut. In egestas pretium tempor. Donec non arcu sit amet dui feugiat tempus nec quis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada ex et accumsan finibus. Quisque mi tellus, venenatis a tristique et, venenatis ut risus. Nullam at sodales massa, et viverra libero. Proin pharetra vel nisi vitae luctus. In pulvinar velit vitae sem accumsan, sed lacinia turpis ullamcorper. Maecenas tincidunt euismod placerat. In aliquet volutpat augue, eu mollis ante faucibus quis. Morbi iaculis euismod maximus. In hac habitasse platea dictumst.

Maecenas fermentum, leo maximus posuere tincidunt, magna ipsum dictum orci, vitae rhoncus risus turpis quis neque. Ut sed egestas quam, eu tristique ligula. Pellentesque vel est mi. Aenean rhoncus ante eget diam tristique fermentum. Vestibulum a tellus convallis, laoreet odio vitae, convallis felis. Sed id tellus a dolor dapibus tempor eget sit amet quam. Phasellus non dapibus augue. Phasellus ornare elit auctor odio mollis, et commodo odio congue. Nam in est eu arcu auctor aliquam. Vivamus vestibulum massa gravida velit malesuada lacinia. Fusce eu nisl ut ipsum aliquam posuere et in nisi. Nunc eros nunc, imperdiet vel orci non, gravida viverra odio. Aenean ac tellus id tellus ullamcorper imperdiet tempor a lorem. Fusce id mollis velit, et porttitor mi. Duis vel elit tempus, fermentum nibh at, sollicitudin odio.

In lacus velit, convallis et feugiat varius, viverra sed mauris. Proin consequat eros ac vulputate feugiat. Nam molestie metus eget sagittis viverra. Fusce convallis purus in tortor molestie rhoncus. Morbi eu vulputate libero. Quisque blandit tortor ut tellus volutpat, in semper elit hendrerit. Praesent vel orci sagittis, rutrum nisi vitae, laoreet tortor. Nullam quis sollicitudin ligula, pellentesque laoreet eros. Curabitur gravida scelerisque felis lobortis lacinia. Sed vel orci placerat, dictum eros eget, dignissim justo. Cras congue varius ipsum nec luctus. Aliquam blandit interdum turpis, tempor elementum massa porta ut. Phasellus vitae urna ut libero fringilla pretium ac hendrerit quam. Proin malesuada sit amet tortor ac fringilla. Aenean eleifend vehicula pretium.`

let wordCount = 0; 
for (let i = 0; i < longText.length; i++) { 
  wordCount++;
}
console.log(wordCount);

let countEt = 0;
let longTextLower = longText.toLowerCase();
for (let i = 0; i < longTextLower.length; i++) {
  if (longTextLower[i - 1] === " " && longTextLower[i] === "e" && longTextLower[i + 1] === "t") {
    countEt++;
  }
}
console.log(countEt);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseModified = phraseToCheck.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
let phraseToCheckReverse = "";

for (let i = phraseModified.length - 1; i >= 0; i--) {
  phraseToCheckReverse += phraseModified[i];
}

if (phraseModified === phraseToCheckReverse) {
  console.log("It's a palindrome");
} else {
  console.log("Try again");
}
