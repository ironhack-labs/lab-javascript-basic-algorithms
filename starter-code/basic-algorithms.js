// Names and Input
let hacker1 = "Michael";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt("What's your name?");
console.log(`The navigator's name is ${hacker2}`);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longer name`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longer name`);
} else {
  console.log(`The names are equal in length`);
}
console.log(hacker1.split(' ').join(' '));
let space = " ";
for(let i = 0 ; i < hacker1.length; i++) {
  space += hacker1[i] + " ";
}
console.log(space.toUpperCase());
let splitName = hacker2.split("");
let reverseName = splitName.reverse();
let joinName = reverseName.join("");
console.log(joinName);
if (hacker1.localeCompare(hacker2) === -1 ) {
  console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definetly.`);
} else {
  console.log(`What?! You both got the same name?`);
}
// Lorem ipsum generator
let palString = prompt("Get a Pal");
let reversePalString = palString.split("").reverse().join("");
let condensedPalString = palString.replace(/[^\w]/, "").toUpperCase();
let condensedRevPalString = reversePalString.replace(/[^\w]/, "").toUpperCase();
if (condensedPalString === condensedRevPalString) {
  console.log("This is a pal String");
} else {
  console.log("Not a pal String");
}
let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor massa, mattis id aliquam nec, scelerisque quis purus. Praesent tempor, dui sit amet semper iaculis, augue mi tempus mauris, nec malesuada tortor arcu sit amet est. Nam mattis mauris velit, quis volutpat lacus tempus et. Vivamus pharetra urna mattis justo ultricies venenatis. Morbi nec consectetur est. Ut arcu eros, maximus et pellentesque vitae, suscipit sit amet orci. Quisque nisi erat, bibendum eget accumsan a, lacinia et sapien. Nullam imperdiet sit amet dolor rhoncus auctor. Maecenas dapibus sem nisl, vel ultrices magna congue vel.
Ut non rhoncus sem, id convallis est. Praesent cursus quam nisl, a dignissim leo dignissim sit amet. Vestibulum varius id ante sit amet semper. Pellentesque varius tellus eu pharetra aliquam. Cras dictum lacinia felis non viverra. Integer at mattis neque. Nulla tristique neque molestie lacus pharetra, quis volutpat ipsum lacinia. Nulla porta erat purus. Etiam facilisis ligula nisi, in congue sapien posuere quis. In congue magna neque, in posuere quam gravida quis. Vivamus eget maximus elit. Nunc at aliquam lectus, a condimentum ipsum. Mauris rutrum felis pharetra enim pellentesque malesuada. Sed sit amet nulla felis.
Pellentesque faucibus vehicula eros maximus auctor. Aliquam eget nisi euismod, lobortis sem ut, tempor magna. Donec ut magna risus. Curabitur nec orci ornare, lobortis magna nec, facilisis sem. Cras placerat augue vel quam lobortis euismod. Vivamus cursus libero eu eleifend euismod. Phasellus semper orci in ipsum elementum bibendum et id augue. Ut vulputate sit amet sapien quis pretium. Praesent venenatis molestie suscipit. Integer ultrices mi id enim suscipit, sit amet faucibus est mattis. Quisque ultricies, ligula ut molestie feugiat, sem quam placerat elit, vitae efficitur nibh turpis eu diam. Curabitur et nisl condimentum, viverra risus at, placerat ligula. Nulla commodo leo ex, auctor rutrum ante imperdiet sit amet.`;
let etCount = 0;
let loremWords = loremParagraph.split(" ");
console.log(`There are ${loremWords.length} in our Lorem Paragraph`);
for (let i = 0; i < loremWords.length; i++) {
  if (loremWords[i] == "et") {
    etCount++;
  }
}
console.log(`Et is repeated ${etCount} times in our paragraph`);