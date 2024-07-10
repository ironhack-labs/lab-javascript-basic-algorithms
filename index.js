// Iteration 1: Names and Input
const hacker1 = "Leah";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Peter";
console.log(`The navigator's name is ${hacker2}`);

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

let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

let navName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navName += hacker2[i];
}
console.log(navName);

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else {
    console.log("What?! You both have the same name?");
  }
}

//bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor dignissim posuere. Sed lobortis ex a ex ornare iaculis. Nunc vitae aliquet quam, nec pretium nisl. Sed blandit, dolor sit amet tincidunt sodales, leo nibh dictum magna, ac elementum orci quam ac risus. Quisque sit amet viverra sem. Duis egestas sapien nibh, at imperdiet ipsum varius eget. Curabitur fermentum sem sodales, euismod mi ac, tempus neque. Ut vestibulum imperdiet tempor. Maecenas at fringilla nulla. Nulla interdum magna a metus rhoncus, id eleifend diam fermentum. Suspendisse congue eu sapien sit amet ultricies. Vestibulum consectetur gravida blandit. Morbi eu mi volutpat, lacinia nunc sed, consectetur elit. Praesent commodo lacus nec pellentesque elementum.

Mauris non quam est. Sed sed auctor magna. Phasellus tempus risus et eros consectetur, sed pretium augue porttitor. Aenean massa purus, commodo a turpis sed, maximus tristique nulla. Suspendisse vitae viverra lectus, sed fermentum mi. Duis commodo placerat dolor, quis suscipit turpis suscipit et. Donec malesuada sit amet dolor in porta. Duis efficitur nunc neque, quis imperdiet lectus aliquam in. Cras vulputate orci dolor, eget pellentesque orci gravida at.

Pellentesque viverra metus justo, tincidunt vehicula est viverra dignissim. Nam neque nunc, accumsan non diam et, interdum volutpat tellus. Mauris posuere placerat sem et ullamcorper. Nunc congue ipsum sem, sed malesuada orci dignissim pellentesque. Integer eu arcu eros. Integer tincidunt tortor et ultrices maximus. Vestibulum sit amet aliquam lectus. Integer et urna at sapien auctor feugiat eu non ligula. Suspendisse tempus erat nisl, id convallis dui scelerisque at. Nam molestie sapien id arcu volutpat egestas. Duis ultrices sed magna vitae efficitur.`;
let stringWords = 0;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    stringWords += 1;
  }
}
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] ===
      " et " ||
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] ===
      " et," ||
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] === " et."
  ) {
    etCount += 1;
  }
}
let stringWordsFinal = stringWords + 3; //because the assignment is for 3 paragraphs
console.log(stringWordsFinal);
console.log(etCount);
