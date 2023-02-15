// Iteration 1: Names and Input
let hacker1 = "Wilmer";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Muhammad";
console.log(`The navigators name is ${hacker2}`);
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
let characterName = "";
console.log(hacker1.length);
for (let i = 0; i < hacker1.length; i++) {
  characterName += hacker1[i];
  characterName += " ";
}
console.log(characterName.toUpperCase());
// W I L M E R
let reversedName = "";

console.log(hacker2.length);

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
  reversedName += " ";
}
console.log(reversedName);
// d a m m a h u M

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definetely");
} else {
  console.log("What?! You both have the same name?");
}

// Yo, the navigator goes first definetely
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim justo, volutpat sed velit vel, scelerisque eleifend urna. Aliquam congue sagittis felis, vel tristique lectus feugiat in. Pellentesque condimentum purus ligula, vitae suscipit felis tristique vel. Nullam pharetra sapien non varius aliquam. Vivamus vitae neque hendrerit, pharetra est nec, volutpat purus. In aliquam imperdiet justo. Cras ultricies hendrerit ultrices. Nunc ante nisi, volutpat a erat lobortis, lacinia dignissim velit. Nunc semper nibh ut erat tempor interdum ac id lectus. Quisque lectus quam, pretium vel consectetur at, tincidunt vitae justo. Suspendisse potenti.

Nam in neque et dui consectetur pulvinar. Etiam interdum congue purus nec cursus. Fusce finibus ante vel odio tincidunt suscipit. Suspendisse vel urna ex. Proin a lectus urna. Maecenas ac tempor lacus. Fusce quis auctor lacus. Vestibulum sit amet hendrerit dolor, vel dapibus risus. Ut vel orci fringilla ligula ultricies varius ut sit amet nisi. Maecenas nec urna porttitor, auctor est a, cursus arcu. Aenean at imperdiet tellus, nec viverra purus. Nullam ac ultricies nisi. Praesent sapien nibh, convallis et nunc a, ultrices rutrum eros. Aenean nec ex urna. Sed ultricies volutpat ante vitae cursus.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec neque ipsum, consequat sed imperdiet ut, porttitor ac urna. Duis ac venenatis mauris. Nam egestas massa sed lectus fringilla fermentum. Curabitur rhoncus nibh lorem, vitae iaculis nunc interdum a. Proin ac posuere sem, eget ultrices enim. Vestibulum lacinia magna ut pharetra consequat. Mauris a eleifend sem, sit amet hendrerit tellus. Nulla sed aliquet turpis. Quisque lorem tortor, tempor ut pellentesque sed, ultrices at risus. Etiam eu molestie nisl. Aliquam non placerat quam.`

let spacesCounter = 1
// index 0 for the first space

console.log(longText.length)

for (let i = 0; i <= longText.length; i++) {
    if (longText[i] === " ") {
        spacesCounter += 1
    } 
}

let wordCounter = spacesCounter + 2
// +2 because there is a word before the first space and one after the last one.
console.log(wordCounter)
// 268

let etCounter = 1
console.log(longText.indexOf("et"))
let indexMarker = longText.indexOf("et") + 1
console.log(longText.indexOf("et", indexMarker))
