// Iteration 1: Names and Input
let hacker1 = "Rich";
console.log(`"The driver's name is ${hacker1}".`);
let hacker2 = "Jacob";
console.log(`"The navigator's name is ${hacker2}".`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
console.log(hacker1.split("").join(" ").toUpperCase());

let reverseHacker2 = hacker2.split("").reverse().join("");
console.log(reverseHacker2);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log(`Yo, the navigator goes first definitely.`);
      break;
    } else {
      continue;
    }
  }
}

// Bonus 1
let lorem3Paras =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper sem eu diam suscipit, vel tincidunt lectus tempor. Praesent rhoncus nec ipsum egestas sagittis. Curabitur iaculis massa ac dui molestie, id bibendum lacus fringilla. Sed vitae odio orci. Donec eget tellus et dolor gravida tempus. Donec id tellus augue. In ac dolor et urna ullamcorper convallis eu id felis. Praesent suscipit purus vel mauris dapibus, volutpat vehicula nisl mollis. Mauris ut pharetra lacus. Ut pharetra venenatis erat ac porta. Phasellus efficitur mollis justo non bibendum. Praesent placerat porta leo, ut fermentum neque pulvinar in. Integer mi nisi, fringilla id eros aliquam, varius mattis diam. Nulla quis et nisl ullamcorper, ultricies justo quis, efficitur sapien. Donec fermentum pellentesque egestas. Quisque ultrices nisl quis tristique lobortis. Nunc nec turpis ac mi volutpat pulvinar eget vel erat. Maecenas gravida eleifend nisi, ac vestibulum nunc ultrices vel. Integer porta vel ex eget finibus. Proin dui nisl, aliquet eu lacinia eget, bibendum id purus. Duis cursus iaculis elementum. Etiam ut lectus fermentum, posuere urna ut, interdum tellus. Ut cursus fermentum magna. Nam nec nisi non nulla ultricies ornare non nec nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam quam, aliquam vel lobortis eget, vulputate sollicitudin est. Maecenas elementum ut lectus ut ullamcorper. Donec dignissim elit ut iaculis auctor. Vivamus non risus dui. Curabitur tortor est, rhoncus ut tristique et, varius quis eros.";

let wordCounter = 1;

for (let i = 0; i < lorem3Paras.length; i++) {
  if (lorem3Paras[i] === " ") {
    wordCounter++;
  }
}
console.log(wordCounter);

let etCounter = 0;
for (let i = 0; i < lorem3Paras.length; i++) {
  if (
    lorem3Paras[i] === " " &&
    lorem3Paras[i + 1] === "e" &&
    lorem3Paras[i + 2] === "t" &&
    lorem3Paras[i + 3] === " "
  ) {
    etCounter++;
  }
}
console.log(etCounter);
