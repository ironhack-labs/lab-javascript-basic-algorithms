// Iteration 1: Names and Input
let hacker1 = "Daniela";
console.log("The driver's name is " + hacker1);

let hacker2 = "Samuel";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let capitalizedName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalizedName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    capitalizedName += " ";
  }
}

console.log(capitalizedName);

//3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

//3.3
let comparison = false;
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    comparison = true;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    comparison = true;
    break;
  }
}
if (!comparison && hacker1.length !== hacker2.length) {
  if (hacker1.length < hacker2.length) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first, definitely.");
  }
} else if (!comparison) {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, ligula gravida pulvinar gravida, quam dui dapibus justo, vitae malesuada leo nibh vel risus. Nam ac pulvinar dui. Nunc a nisl elementum, condimentum mi non, lacinia sem. Fusce auctor pharetra quam, quis consectetur diam. Mauris vitae tincidunt justo. Nam dignissim augue libero, ut tempus justo mattis id. Maecenas eget magna vitae odio pellentesque vestibulum ac non nisi. Maecenas maximus velit sed dui eleifend iaculis. Maecenas vehicula vel elit ac fermentum. Etiam cursus egestas nisl, vel tincidunt orci. Cras tristique at erat vel interdum. Vestibulum in ultricies tortor. Etiam ipsum felis, viverra ut sapien tincidunt, vulputate pulvinar tellus.

Nulla placerat blandit ante, id volutpat arcu consectetur molestie. Nullam at ante id lectus commodo euismod. Phasellus quam velit, pretium et pharetra at, feugiat efficitur arcu. In eleifend lorem euismod lobortis venenatis. Proin pellentesque sapien ante, sit amet cursus felis semper a. Duis consectetur viverra nisl id tempus. Aliquam erat volutpat. Integer quis vulputate quam. Duis lectus sapien, sollicitudin at congue non, malesuada ut sapien. Nam interdum magna massa, non ornare urna consectetur quis. Mauris interdum quis dolor a imperdiet. Morbi sollicitudin, diam et gravida blandit, enim leo egestas erat, sed faucibus ligula arcu vitae elit. Donec nec lorem lacus.

Pellentesque id suscipit metus. Mauris at orci mauris. Mauris dolor purus, imperdiet finibus consequat non, pretium ac ex. Aenean ex libero, finibus vitae viverra vel, mattis nec magna. Integer eget mattis lorem. Suspendisse potenti. Etiam a porta purus.`;

let wordCount = longText.split(/\s+/).length;
console.log(wordCount);

let words = longText.toLowerCase().split(/\s+/);
let etCount = 0;
for (let word of words) {
  if (word === "et") {
    etCount++;
  }
}
console.log(etCount);

//Bonus 2
let phraseToCheck = "put it up";

let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanedPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`Is the phrase a palindrome? ${isPalindrome}`);
