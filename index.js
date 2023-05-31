// Iteration 1: Names and Input

//1.1
let hacker1 = "Florian";
//1.3
let hacker2 = "Julia";
//1.2
console.log(`The driver's name is ${hacker1}!`);
//1.4
console.log(`The navigator's name is ${hacker2}!`);

// Iteration 2: Conditionals

//2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

//console.log(hacker1.toUpperCase());

//3.1
let changedHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  changedHacker1 += `${hacker1[i]} `;
}
console.log(changedHacker1.toUpperCase());

//3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

//3.3
if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2 === 0)) {
  console.log("What?! You both have the same name?");
}

//Bonus1)
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac vestibulum risus. Pellentesque tincidunt, neque nec efficitur tristique, massa augue rhoncus lacus, vel accumsan lectus elit at elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam mattis ac augue vitae porta. Pellentesque tincidunt dui hendrerit posuere pellentesque. Praesent sit amet est in arcu finibus euismod. Nunc id varius quam. Phasellus id arcu in quam vestibulum tempor ut in augue. Nullam mattis ornare purus. Praesent vitae feugiat odio. Ut porttitor fermentum ligula, nec porttitor mauris aliquam vel. Maecenas non imperdiet lorem, eget rutrum justo. In et consectetur urna, a eleifend arcu. Donec ultricies est non sagittis volutpat. Vivamus non mi lectus. Vestibulum elementum erat est, a volutpat mauris mollis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Quisque mollis volutpat ipsum, vel ornare ex luctus at. Sed ac pharetra velit. Ut convallis sem eget ultricies tincidunt. Vivamus laoreet sodales arcu eu dictum. Quisque non libero mauris. Morbi lectus augue, laoreet blandit arcu id, varius porttitor ipsum. Suspendisse potenti. Donec posuere odio ante, ac congue nulla ultrices ut. Phasellus sed quam ac sem accumsan tincidunt non in sapien. Vestibulum a nunc sit amet libero aliquet blandit sed at urna. Etiam ornare condimentum ipsum nec sagittis. Donec pretium eget erat quis iaculis. Curabitur non justo felis. Donec non diam non purus posuere sodales a eu turpis. Pellentesque nec pretium dolor. Sed et pellentesque justo. Phasellus magna nisl, facilisis et scelerisque a, lacinia id metus. Phasellus congue elit sit amet nunc vulputate accumsan. Aenean eget velit nisi. Nullam condimentum, sem ut egestas auctor, sapien orci semper tellus, eget hendrerit nulla turpis in arcu. Vestibulum in dui risus. Mauris auctor posuere lobortis. Quisque at leo at sapien tempor semper. Nullam aliquam lobortis arcu a tincidunt.";
let counter = 0;

let cleanupText = longText.split(` `);
console.log(cleanupText.length);

for (i = 0; i < cleanupText.length; i++) {
  //console.log(cleanupText[i])
  if (cleanupText[i] === "et") {
    counter++;
  }
}

console.log(`this is the number ${counter}`);

//Bonus2)
let phaseToCheck = `otto inni otto`;
let reversedPhaseToCheck = ``;
for (let i = phaseToCheck.length - 1; i >= 0; i--) {
  console.log(phaseToCheck[i]);
  reversedPhaseToCheck += phaseToCheck[i];
}

if (phaseToCheck.toUpperCase() === reversedPhaseToCheck.toUpperCase()) {
  console.log("this is a panindrome");
} else {
  console.log("this is not a panindrome");
}

//function checkForPalindrome(word) {
//  return word.toUpperCase() === word.split("").reverse().join("")
