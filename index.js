// Iteration 1: Names and Input
const hacker1 = "Sergio"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Carlos"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}

// Iteration 3: Loops
let name = "";
for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i];
    name += char.toUpperCase() + " ";
}
console.log(name);

let navigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    navigator += char;
}
console.log(navigator);


const names = [hacker1, hacker2];
names.sort();
if (names[0] === "Sergio") {
    console.log(`The driver's name goes first`);
} else if (names[0] === "Carlos") {
    console.log(`Yo, the navigator goes first, definetely`);
} else {
    console.log(`What?! You both have the same name?`);
}


//Bonus 1
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at augue at urna commodo pellentesque nec at libero. Vestibulum quis augue sollicitudin, luctus ipsum in, efficitur justo. Vestibulum enim leo, viverra in aliquet ac, lobortis nec quam. Proin at felis eleifend, gravida orci et, finibus lorem. Cras consequat lorem in orci gravida lobortis. Pellentesque ac lectus quis ipsum posuere pharetra non id dolor. Mauris in gravida ante. Fusce condimentum iaculis nulla ac aliquet. Integer sed dolor non quam tristique blandit et ut metus. Mauris diam justo, semper vel pharetra vel, viverra ut erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lobortis posuere arcu, id blandit nisi vulputate sit amet. Donec placerat porta ligula. Morbi volutpat a dui ac cursus.

Vivamus non nulla eu ipsum ullamcorper feugiat. Proin varius congue libero a vehicula. Donec interdum bibendum erat, at sagittis velit tincidunt vitae. Mauris posuere vel ipsum in elementum. Integer non purus nulla. Maecenas euismod faucibus finibus. Sed enim quam, tempus at placerat sit amet, ullamcorper id ipsum. Curabitur metus eros, viverra sed venenatis ac, sollicitudin sit amet mi. Nunc vel felis nisi. Cras leo neque, egestas sit amet nisl in, venenatis varius dui. Suspendisse ac tincidunt quam, id iaculis elit. Fusce convallis quis augue sed suscipit. Nam condimentum odio ac tortor posuere cursus. Nam nunc mi, congue id sapien et, rhoncus sagittis massa.

Aliquam maximus arcu quam, id aliquam ante pharetra a. Nam posuere laoreet justo a ornare. Suspendisse porttitor mollis neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus turpis orci, ac pulvinar nibh tempus at. Nam dapibus at elit et imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed a nulla arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis blandit lorem a luctus. Pellentesque malesuada porttitor lectus, eget ultricies ligula dictum vitae.
`;
const words = text.split(" ");
console.log(words.length);
