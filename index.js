// Iteration 1: Names and Input
const hacker1 = "Max";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Baloo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver's name ${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have the equally names, ${hacker1 === hacker2} characters`
  );
}
// Iteration 3: Loops

// 3.1
let capitalName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalName);

// 3.2
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3
if (hacker1 < hacker2) {
  console.log();
}

// Bonus 1
const longText =
  "Et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula quam, viverra non sapien semper, rhoncus interdum nunc. Suspendisse ornare massa id felis porttitor, quis congue eros molestie. Proin risus risus, facilisis vel tortor facilisis, imperdiet bibenETdum nulla. Phasellus non vulputate risus, vitae ullamcorper turpis. Vestibulum vitae risus ut felis ullamcorper venenatis. Cras consequat eu tellus ut scelerisque. Fusce et magna ultricies, hendrerit justo nec, congue mi. Maecenas porta diam qui4s ullamcorper scelerisque. Nam nibh libero, lobortis sed condimentum id, blandit sed magna. Integer ultrices urna a efficitur auctor. Donec vitae velit sed enim egestas dictum. Nunc sit amet lorem id ligula tristique facilisis sit amet eget diam. Cras lobortis ex orci. et Aliquam pretium eros erat et .";

let count = 0;

for (let j = 0; j < longText.length; j++) {
  if (
    longText.slice(j, j + 3) === "Et " ||
    longText.slice(j, j + 4) === " et " ||
    longText.slice(j, j + 4) === " et."
  )
    count++;
}

console.log(count);
