// Iteration 1: Names and Input
let hacker1 = "Emma";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Delia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));

let reverseCase = hacker2.split("").reverse().join("");
console.log(reverseCase);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
    } else if (hacker1[i] > hacker2[i]) {
      console.log(`Yo, the navigator goes first definitely.`);
    } else {
      continue;
    }
  }
}

//Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet nulla sit amet et finibus sagittis. Mauris odio libero, volutpat luctus ante ac, rutrum pretium eros. Curabitur in placerat arcu. Suspendisse feugiat risus ut luctus auctor. Praesent nisl nunc, pulvinar feugiat purus volutpat, et lobortis euismod massa. Sed gravida pharetra ex et mattis. Fusce tristique at ex eget euismod. Class aptent taciti  sociosqu ad litora torquent et per conubia nostra, per inceptos himenaeos. Etiam interdum consequat orci non rhoncus.";

console.log(loremIpsum.split(' ').length)

let count = (loremIpsum.match(/et/g) || []).length;
console.log(count);