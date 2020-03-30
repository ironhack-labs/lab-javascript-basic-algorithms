// Iteration 1: Names and Input

const hacker1 = "loulou";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "louloute";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, it has ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops

let driverNameUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameUpperCase += hacker1[i].toUpperCase();
}
console.log(driverNameUpperCase);

let navigatorNameReversed = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorNameReversed += hacker2[j];
}
console.log(navigatorNameReversed);

for (let k = 0; k < hacker1.length && k < hacker2.length; k++) {
  if (
    hacker1[k] < hacker2[k] ||
    (hacker1.length === k + 1 && hacker2.length > k + 1)
  ) {
    console.log(`The driver's name goes first.`);
  } else if (
    hacker2[k] < hacker1[k] ||
    (hacker2.length === k + 1 && hacker1.length > k + 1)
  ) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else if (
    hacker1[k] === hacker2[k] &&
    k + 1 === hacker2.length &&
    k + 1 === hacker1.length
  )
    console.log("What?! You both have the same name?");
}

// Bonus 1:

let lorem = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in porttitor lorem, a consectetur nisl. Curabitur pulvinar sit amet lectus in rutrum. Donec faucibus nibh eget mattis vehicula. Curabitur varius lobortis justo id tincidunt. Aenean semper diam neque, ac ullamcorper tortor egestas vitae. Integer ultrices porta tincidunt. Maecenas bibendum vehicula nunc vitae molestie. Praesent dictum libero nibh, sit amet congue sem accumsan non. Phasellus fringilla lorem est, a consectetur neque mollis sit amet. Donec et enim sem. Donec non risus eu eros ultrices ultrices id at justo. Vestibulum ac sem ac enim accumsan placerat. Praesent risus elit, vulputate id lorem sed, euismod gravida nunc. Aenean sed diam ligula. Morbi efficitur nunc vel ullamcorper maximus.

Integer finibus enim non quam rutrum dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consectetur vulputate felis et blandit. Vestibulum vestibulum metus id leo lacinia pharetra. Aenean eu elit blandit, dignissim ligula consequat, pulvinar nibh. Praesent eget ipsum risus. Ut nec pretium tellus. Maecenas porttitor posuere ultricies. Etiam vel porta nibh. Sed pulvinar leo cursus commodo rutrum. Morbi a vestibulum est, in ullamcorper odio. Ut porta volutpat est, non pellentesque lectus venenatis vel. Etiam hendrerit sapien ac pulvinar viverra.

Ut ac ornare urna. Aliquam non suscipit odio. Nullam congue neque in sem blandit, imperdiet finibus sapien consequat. Nullam tristique pharetra justo a egestas. Nunc rutrum interdum urna, ut ullamcorper lectus blandit non. Pellentesque bibendum dolor sem, pharetra convallis mi consequat at. Aliquam id nulla eu nulla tempus eleifend. Aliquam posuere non dolor sed fermentum. Sed sed efficitur neque, eget mattis nunc. Nulla condimentum quam eget eleifend hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porttitor tempus mi, et luctus neque congue non. Nam ut egestas augue, at sagittis lacus. Nulla consequat metus quis scelerisque sodales. `;

let numWords = 0;

if (lorem[0]) numWords = 1;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ` `) {
    while (lorem[i] == ` `) {
      i++;
    }
    if (i < lorem.length) numWords++;
  }
}
console.log(`This text contains ${numWords} words`);

let numEt = 0;

for (let i = 0; i < lorem.length - 1; i++) {
  if (lorem[i] === `e` && lorem[i + 1] === `t`) numEt++;
}
console.log(`This text contains the latin word "et" ${numEt} times`);

// Bonus 2:
