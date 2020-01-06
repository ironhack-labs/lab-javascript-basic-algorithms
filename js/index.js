// Iteration 1: Names and Input
let hacker1 = "Marcel";
console.log(`"The driver's name is ${hacker1}."`);

let hacker2 = "Mia";
console.log(`"The navigator's name is ${hacker2}."`);


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

hacker1 = hacker1.toUpperCase();
let letter;
let driverCapitalized = "";

for (let i = 0; i < hacker1.length; i++) {
  letter = hacker1[i];
  driverCapitalized += letter + " ";
}

console.log(driverCapitalized);

let letterReversed;
let navigatorReversed = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  letterReversed = hacker2[j];
  navigatorReversed += letterReversed;
}

console.log(navigatorReversed);

let lexOrder = hacker1.localeCompare(hacker2);

if (lexOrder < 0) {
  console.log("The driver's name goes first.");
} else if (lexOrder > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1:

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut maximus lectus. In egestas pharetra feugiat. Praesent viverra leo risus, in consectetur sem tincidunt in. Aliquam auctor tempus lacus vel venenatis. Etiam ultricies mattis quam, nec semper ex fringilla a. Quisque quis faucibus nulla. Pellentesque orci lectus, posuere ut est vel, maximus auctor nisl. Suspendisse varius commodo quam, at auctor lacus congue vitae. Pellentesque eu ipsum nibh. Maecenas sit amet magna sapien. Fusce dui lorem, suscipit semper feugiat ut, tincidunt nec sem. Praesent vel lorem lorem. Vestibulum non neque non urna tempor facilisis vel et augue. Curabitur eleifend leo vitae felis gravida dictum. Donec sed ipsum pulvinar, venenatis mauris at, pharetra tellus. Nulla sodales, nibh vel varius congue, nisi nulla tristique mauris, id auctor ligula dolor ac libero.
Cras ut est vel nulla dignissim pharetra. Ut volutpat tincidunt semper. Cras vel laoreet dolor. Quisque nec nisi et nunc vestibulum ullamcorper. Nullam finibus, felis et ultricies finibus, orci ligula porttitor risus, vel sagittis est justo in ante. Donec ut erat dictum, convallis lacus non, posuere leo. In in mauris ornare, euismod enim quis, euismod ligula. Integer cursus lacus eu leo scelerisque, sit amet maximus est luctus. Quisque pulvinar nibh quis iaculis aliquam. Sed suscipit consectetur erat eu condimentum. Pellentesque aliquam leo vel venenatis pharetra. Donec consequat, libero sit amet sagittis pellentesque, ante lectus egestas dui, et varius enim purus nec justo. Vivamus molestie orci bibendum lacus facilisis, nec ultrices enim mollis.
Fusce volutpat rutrum metus et gravida. Maecenas eget leo et nisi feugiat tempus. Duis a leo fringilla augue pharetra mollis. Ut ex velit, volutpat id consectetur id, ornare ac justo. Vivamus congue risus risus, id volutpat dui sodales ut. Nulla ullamcorper erat vel molestie sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ex in urna dictum, at rutrum nisl molestie. Vivamus in molestie lorem, eu pretium nisl. Integer nec orci aliquet, sodales sem viverra, luctus justo. Aenean eu suscipit ex, in tincidunt velit. Nullam elementum iaculis erat hendrerit blandit. Morbi sagittis malesuada risus vitae accumsan.`;

console.log(loremIpsum.length);
let spaceCounter = 1;

for (i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " " || loremIpsum[i] === "\n") {
    spaceCounter += 1;
  } else {
    continue;
  }
}

console.log(spaceCounter);

let etCounter = 0;

for (i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum.slice(i, i + 4) === " et ") {
    etCounter += 1;
  } else {
    continue;
  }
}

console.log(etCounter);