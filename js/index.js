// Iteration 1: Names and Input
// Create two variables a driver and a navigator

let hacker1 = "Ms Marple";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Hercule Poirot";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// Which name is longer

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  // while they both have the same string length, is it enough to just put one name down since they both have the same number of characters in the string?
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
// initialize a new variable eg. let y = 0; condition on which it will run eg. if y is less than or equal to 10 ; implementation/ condition eg, increment by 1

// Print all the characters of the drivers name in uppercase
for (let driversName of hacker1) {
  console.log(driversName.toUpperCase());
}

// Print the characters of the navigators name in reverse order

for (let i = hacker2.length; i >= 0; i--) {
  let newNav = hacker2.slice(i - 1, i);
  console.log(newNav);
}

// Depending on the lexicographic order of the strings, print

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus:
// Make your program count the number of words in the string.

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat ex ac sem vestibulum, eu dapibus turpis eleifend. Vestibulum sollicitudin tortor quis pellentesque elementum. Ut at odio et nulla tincidunt sollicitudin volutpat nec justo. Suspendisse nec imperdiet augue, eu dapibus metus. Fusce vel aliquam lacus. Mauris quis orci sit amet lorem efficitur tincidunt sed id dolor. Aenean placerat augue ut convallis tempor. Phasellus hendrerit nec felis eget rutrum. Vestibulum at feugiat lorem, nec volutpat elit. Curabitur in odio hendrerit, venenatis diam sed, aliquam felis. Cras ultrices tempus lorem, vel venenatis mi condimentum eu. Nunc eget auctor orci, sed condimentum tellus. Suspendisse dignissim gravida consequat. Ut posuere eget arcu quis rhoncus. Nunc sit amet porttitor odio. Donec gravida, tortor eget elementum dictum, turpis mauris fermentum mauris, aliquam pretium mi nulla sed nunc. ";

// Make your program count the number of times the Latin word et appears.
