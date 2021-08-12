// Iteration 1: Names and Input
let hacker1 = "Miguel";
let hacker2 = "Daniel";

console.log(`The driver's name is ${hacker1}`);
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
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let nameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  nameReverse += hacker2[i];
}
console.log(nameReverse);

let nameCaps = "";
for (let i = 0; i <= hacker1.length; i++) {
  nameCaps = hacker1.split("").join(" ").toUpperCase();
}
console.log(nameCaps);

// BONUS 1

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod venenatis lorem nec suscipit. Proin in justo vitae elit varius pretium sed eget odio. Fusce elementum quis sapien in blandit. Nam iaculis mi nec felis ornare placerat. Nulla a purus at dui scelerisque consequat. Suspendisse in volutpat nunc. Nullam dapibus consequat sollicitudin. Fusce in orci non sapien pulvinar blandit. Vestibulum sodales, sapien at faucibus egestas, magna mauris tincidunt elit, non tristique turpis magna eget nunc. Quisque dolor nunc, porttitor a interdum quis, congue a nunc. Donec a eleifend magna. Sed vel suscipit magna, sed sagittis augue. Fusce dictum fermentum tristique. Cras quis eleifend felis. Phasellus vel risus dignissim, iaculis justo a, sagittis velit. Sed eget malesuada elit. Nulla nec sagittis risus. Donec scelerisque consectetur tortor, at pharetra neque gravida ac. Proin tempus ut lacus quis maximus. Phasellus egestas enim eget tellus pretium finibus. Quisque nec nisl congue purus consectetur porta. Curabitur sed lectus ut neque consequat ultricies posuere eu ipsum. Sed malesuada purus eu nunc sollicitudin auctor. Quisque fringilla sem quam, id placerat arcu gravida at. Morbi sed volutpat magna. Cras nec dictum felis, sed ullamcorper velit. Pellentesque lacus tortor, volutpat sodales pharetra fermentum, iaculis ac metus. Etiam sagittis dui risus. Sed orci nunc, ultrices non orci in, bibendum vehicula libero. Quisque a metus vitae massa lacinia fermentum vitae eget diam. Duis nulla arcu, semper nec arcu ut, ultricies placerat tortor. Proin tincidunt magna tortor, in aliquet sem maximus laoreet. Suspendisse in diam non ligula consequat venenatis nec et nisl.";

let wordCounter = lorem.split(" ");
console.log(wordCounter);

let totalWords = wordCounter.length;
console.log(totalWords);

let etCounter = lorem.split(" et ");
console.log(etCounter);

let totalEts = etCounter.length - 1;
console.log(totalEts);
