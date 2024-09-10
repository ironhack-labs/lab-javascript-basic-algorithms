// Iteration 1: Names and Input
let hacker1 = "John Steinback";
//console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Jules Verne";
//console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
//console.log(hacker1.length);
// console.log(hacker2.length);

//if (hacker1.length > hacker2.length) {
//console.log(
//   `The driver has the longest name, it has ${hacker1.length} characters.`
//);
//} else if (hacker1.length < hacker2.length) {
// console.log(
//   `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
// );
//} else {
// console.log(
//   `Wow, you both have equally long names, ${hacker1.length} characters!`
// );
//}

// Iteration 3: Loops
//let driverUpperCase=hacker1.toUpperCase();
//console.log(driverUpperCase);

let driverSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  driverSpace += hacker1[i].toUpperCase() + " ";
}
driverSpace = driverSpace.trimEnd(" ");
console.log(driverSpace);

let reverseHacker1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseHacker1 += hacker1[i];
}
console.log(reverseHacker1);

//bonus 1

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu est, vestibulum at vestibulum nec, placerat sit amet dolor. Nulla ex quam, posuere ut ullamcorper in, laoreet dignissim felis. Nunc volutpat blandit nunc non scelerisque. Duis facilisis felis ac tempor interdum. Integer a nisi volutpat arcu vulputate laoreet et eget est. Nam tincidunt sollicitudin mauris eu finibus. Nunc lacinia hendrerit magna sed varius. Sed ac sapien diam. Etiam et facilisis arcu, non facilisis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel nunc scelerisque, consequat nisi non, lacinia mauris. Proin vel nulla nec mi imperdiet facilisis. In sed augue congue dui fermentum sodales sit amet consectetur odio. Vivamus fermentum lectus a lectus lobortis, eget elementum urna finibus. Curabitur ornare luctus lectus, a pretium tellus euismod eu. Curabitur neque ligula, pellentesque id consequat at, semper in ligula. Nam sodales non massa nec dictum. Duis quis urna vel lectus elementum maximus. Vivamus eu justo leo. Donec turpis nunc, tincidunt vel interdum sit amet, hendrerit non massa. Aenean vitae dui sed nulla venenatis venenatis et vitae ligula. Donec tempor ultricies malesuada. Proin lorem libero, interdum ac metus sed, imperdiet efficitur mi. Nunc luctus felis at elementum varius. Cras ac odio tincidunt, cursus orci at, facilisis libero. Vivamus at cursus risus. Ut condimentum felis dui, id dictum purus accumsan non. Maecenas nec venenatis mi, et pellentesque diam. Maecenas porta mauris felis, ac viverra sapien mollis eget. Proin neque nisl, facilisis eu placerat finibus, luctus in urna.`;

console.log(longText.endsWith(" "));
