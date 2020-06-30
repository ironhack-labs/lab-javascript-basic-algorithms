// --------------------Iteration 1: Names and Input
let hacker1 = "BdB";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "CdC";
console.log(`The navigator's name is ${hacker2}`);
// --------------------Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// --------------------Iteration 3: Loops
//3.1
let hacker1Spell = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Spell += hacker1[i].toUpperCase() + " ";
}
let fixedHacker1 = hacker1Spell.trim();
console.log(fixedHacker1);
//3.2
let hacker2Spell = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Spell += hacker2[i];
}
console.log(hacker2Spell);
// 3.3
if (hacker1.localeCompare(hacker2) == -1) {
  console.log(`The drivers name goes first`);
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first");
} else {
  console.log("What?! You both have the same name?");
}
// -------------------- Bonus 1
//let lorem = `1 2 3 et 5 6 7et 8 9. 10 (et 12 et) et- 15 et16 17 et.
//19 20.`
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem magna, imperdiet ac enim ut, cursus vulputate quam. Nam consequat sed augue eu porta. Vestibulum tincidunt dui ac libero suscipit consequat. Phasellus orci mi, consequat quis pellentesque id, tempus aliquam metus. Nullam at dolor ultricies nibh dictum auctor nec vitae sem. Cras vel lacus sollicitudin nulla posuere gravida. Curabitur sollicitudin convallis aliquet. Sed sed sodales purus. Duis eget faucibus leo. Maecenas dignissim dui sit amet diam aliquet maximus.
Nulla et enim suscipit, consequat ex a, feugiat odio. Mauris in maximus justo, quis pharetra urna. Nam ut lectus eget nisl hendrerit vestibulum sed ut ante. Integer ut dictum tellus. Nulla sed congue velit, at faucibus ligula. Quisque eu bibendum neque. Etiam semper erat bibendum tellus fringilla, a varius orci volutpat. In hac habitasse platea dictumst. Nulla a sagittis lorem. Sed ac facilisis quam, a ornare nibh. Duis neque odio, convallis sit amet aliquet vitae, semper cursus libero. Nam rutrum, tortor non mollis blandit, tellus dolor ultricies nisi, quis vehicula est sem a nibh. Praesent dignissim vel arcu posuere efficitur. Donec ante metus, sagittis condimentum rhoncus quis, malesuada eget libero.
Nulla ultricies purus quis ultricies accumsan. Nunc et ornare mi. Fusce quis est eget risus placerat sollicitudin et ut dui. Praesent efficitur a eros et blandit. Nullam ut interdum odio. Donec id tempor tellus. Aenean ante tellus, ornare quis quam ut, vehicula accumsan erat. Sed volutpat tincidunt tellus, at mattis lorem tincidunt sit amet. Quisque eget mattis risus, non fermentum lacus. Mauris nec porta mi.`;
// tiene 253
//1.2
if (lorem.split(".\n").length === 1) {
  console.log(lorem.split(" ").length);
} else {
  console.log(
    lorem.split(" ").length + lorem.split(".\n").length - 1 + " words"
  );
}
//1.3
console.log(
  lorem.split(" et ").length +
    lorem.split(" et.").length +
    lorem.split(" et,").length +
    lorem.split(" et)").length +
    lorem.split("(et ").length +
    lorem.split("-et ").length +
    lorem.split(" et-").length +
    lorem.split("Et ").length -
    8 +
    ' "et"'
);
// -------------------- Bonus 1
let phraseToCheck = "No 'x' iln Nixon";
let lowerCasePhrase = phraseToCheck.toLowerCase();
let phraseChecked = "";
for (let j = 0; j < phraseToCheck.length; j++) {
  switch (phraseToCheck[j]) {
    case ".":
    case ",":
    case "'":
    case "-":
    case '"':
    case ";":
    case "?":
    case "!":
    case " ":
      break;
    default:
      phraseChecked += lowerCasePhrase[j];
  }
}
let counter = 0;
for (let i = 0; i < phraseChecked.length / 2; i++) {
  if (phraseChecked[i] == phraseChecked[phraseChecked.length - i - 1]) {
    counter++;
  }
}
if (counter >= phraseChecked.length / 2) {
  console.log(`"${phraseToCheck}" is SOOOO "Palindromy"`);
} else {
  console.log(`"${phraseToCheck}" is so #nooot "Palindromy"`);
}
