// Iteration 1: Names and Input
let hacker1 = "Nykolle";
let hacker2 = "Maxwell";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver's name goes first");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Iteration 3: Loops
//3.1
let hackerUpperCased = "";

for (let i = 0; i < hacker1.length; i++) {
  hackerUpperCased += hacker1[i].toUpperCase() + " ";
}
console.log(hackerUpperCased);

//3.2
console.log(
  hacker1
    .split("")
    .reverse()
    .join("")
);

//3.3
if (hacker2.localeCompare(hacker1) === 1) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1
//3.1
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit in nulla vehicula sollicitudin. Morbi cursus vulputate urna a commodo. Fusce in velit gravida, lacinia leo vel, rutrum massa. Pellentesque in iaculis dolor. Suspendisse diam ante, lobortis non sapien a, dictum luctus magna. Etiam lectus ipsum, elementum id fringilla sagittis, dapibus eget turpis. Ut at mauris finibus, rutrum leo ut, maximus libero. Mauris sed interdum est. Proin at risus ornare, faucibus diam eu, porttitor tellus. Maecenas fringilla, urna id varius tincidunt, eros turpis congue nulla, ac feugiat eros orci a ligula. Vivamus hendrerit odio sed urna facilisis, at commodo lacus euismod. Mauris bibendum lacus ut purus consectetur, at volutpat arcu aliquam. Morbi et lacus nec sem volutpat euismod in in nunc. Nullam vitae vehicula neque. Duis mattis tortor ut arcu dictum consequat. Vestibulum euismod libero eget lobortis tincidunt. Duis molestie placerat convallis. Proin nisi sem, facilisis quis rutrum eu, semper sit amet ipsum. Mauris iaculis, ipsum sed hendrerit congue, libero ex tincidunt odio, id tincidunt risus ligula nec mi. Aenean velit orci, viverra finibus rutrum id, ultricies ut dui. Donec in lacus in odio luctus finibus id ac magna. Aliquam sagittis vel lacus et luctus. Aenean interdum odio mauris, quis semper enim mattis ac. Proin nec nunc semper, finibus magna sed, fermentum arcu. Nam suscipit ligula vel ex commodo bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tempor justo lacus, nec accumsan erat dapibus a. Vestibulum fermentum tortor id odio sollicitudin, quis ornare purus tristique. Nam tristique mattis turpis, vitae maximus quam tincidunt sed. Pellentesque at convallis ante, ut auctor ante. Integer et imperdiet nisi, id hendrerit eros. Donec eget eleifend urna. Sed id elit et purus condimentum pellentesque. Praesent tempor orci at neque malesuada fringilla. Ut accumsan nibh malesuada diam elementum, at sollicitudin metus auctor.";

//3.2
let loremNumber = 0;
for (let i = 0; i < lorem.length; i += 1) {
  if (lorem[i] === " ") {
    loremNumber += 1;
  }
}
console.log(loremNumber + 1);

// OU se for mais inteligente

console.log(lorem.split(" ").length);

//3.3
console.log(lorem.split("et").length);


//BONUS 2 //in progress
let textA = 'A man, a plan, a canal, Panama!';
let textB = 'Amor, Roma';
let textC = 'race car';
let textD = 'stack cats';
let textF = 'step on no pets';
let textG = 'taco cat';
let textH = 'put it up';
let textI = 'Was it a car or a cat I saw? and No "x" in Nixon';

let name = ' ';
for (let i = 0; i < textA.length; i += 1) {
  if (textA[i] !== " " && textA[i] !== "," && textA[i] !== "!") {
    name += textA[i].toLowerCase()
  }
}
console.log(name)

let reverseName = '';
for (let i = name.length - 1; i >= 0; i -= 1) {
  reverseName += name[i].toLowerCase();
}

console.log(reverseName)





// console.log(element)

// console.log(
//   textA
//     .toLowerCase()
//     .split("")
//     .reverse()
//     .join("")
// );
