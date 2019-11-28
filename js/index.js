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
let textE = 'step on no pets';
let textF = 'taco cat';
let textG = 'put it up';
let textH = 'Was it a car or a cat I saw?';
let textI = 'No "x" in Nixon';

let nameA = ' ';
for (let i = 0; i < textA.length; i += 1) {
  if (textA[i] !== " " && textA[i] !== "," && textA[i] !== "!") {
    nameA += textA[i].toLowerCase()
  }
}
console.log(nameA)

let reverseNameA = '';
for (let i = nameA.length - 1; i >= 0; i -= 1) {
  reverseNameA += nameA[i].toLowerCase();
}
console.log(reverseNameA)

//////////////////////////////////////

let nameB = ' ';
for (let i = 0; i < textB.length; i += 1) {
  if (textB[i] !== " " && textB[i] !== "," && textB[i] !== "!") {
    nameB += textB[i].toLowerCase()
  }
}
console.log(nameB)

let reverseNameB = '';
for (let i = nameB.length - 1; i >= 0; i -= 1) {
  reverseNameB += nameB[i].toLowerCase();
}
console.log(reverseNameB)

//////////////////////////////////////

let nameC = ' ';
for (let i = 0; i < textC.length; i += 1) {
  if (textC[i] !== " " && textC[i] !== "," && textC[i] !== "!") {
    nameC += textC[i].toLowerCase()
  }
}
console.log(nameC)

let reverseNameC = '';
for (let i = nameC.length - 1; i >= 0; i -= 1) {
  reverseNameC += nameC[i].toLowerCase();
}
console.log(reverseNameC)

//////////////////////////////////////

let nameD = ' ';
for (let i = 0; i < textD.length; i += 1) {
  if (textD[i] !== " " && textD[i] !== "," && textD[i] !== "!") {
    nameD += textD[i].toLowerCase()
  }
}
console.log(nameD)

let reverseNameD = '';
for (let i = nameD.length - 1; i >= 0; i -= 1) {
  reverseNameD += nameD[i].toLowerCase();
}
console.log(reverseNameD)

//////////////////////////////////////

let nameE = ' ';
for (let i = 0; i < textE.length; i += 1) {
  if (textE[i] !== " " && textE[i] !== "," && textE[i] !== "!") {
    nameE += textE[i].toLowerCase()
  }
}
console.log(nameE)

let reverseNameE = '';
for (let i = nameE.length - 1; i >= 0; i -= 1) {
  reverseNameE += nameE[i].toLowerCase();
}
console.log(reverseNameE)

//////////////////////////////////////

let nameF = ' ';
for (let i = 0; i < textF.length; i += 1) {
  if (textF[i] !== " " && textF[i] !== "," && textF[i] !== "!") {
    nameF += textF[i].toLowerCase()
  }
}
console.log(nameF)

let reverseNameF = '';
for (let i = nameF.length - 1; i >= 0; i -= 1) {
  reverseNameF += nameF[i].toLowerCase();
}
console.log(reverseNameF)

//////////////////////////////////////

let nameG = ' ';
for (let i = 0; i < textG.length; i += 1) {
  if (textG[i] !== " " && textG[i] !== "," && textG[i] !== "!") {
    nameG += textG[i].toLowerCase()
  }
}
console.log(nameG)

let reverseNameG = '';
for (let i = nameG.length - 1; i >= 0; i -= 1) {
  reverseNameG += nameG[i].toLowerCase();
}
console.log(reverseNameG)

//////////////////////////////////////

let nameH = ' ';
for (let i = 0; i < textH.length; i += 1) {
  if (textH[i] !== " " && textH[i] !== "," && textH[i] !== "!" && textH[i] !== "?" ) {
    nameH += textH[i].toLowerCase()
  }
}
console.log(nameH)

let reverseNameH = '';
for (let i = nameH.length - 1; i >= 0; i -= 1) {
  reverseNameH += nameH[i].toLowerCase();
}
console.log(reverseNameH)

//////////////////////////////////////

let nameI = ' ';
for (let i = 0; i < textI.length; i += 1) {
  if (textI[i] !== " " && textI[i] !== "," && textI[i] !== "!") {
    nameI += textI[i].toLowerCase()
  }
}
console.log(nameI)

let reverseNameI = '';
for (let i = nameI.length - 1; i >= 0; i -= 1) {
  reverseNameI += nameI[i].toLowerCase();
}
console.log(reverseNameI)


