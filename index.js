// Iteration 1: Names and Input
let hacker1 = 'Nadia';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Muhammad';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let capitalDriver = hacker1.toUpperCase();

function spacedCapitalDriver (capitalDriver) {
    return capitalDriver.split('').join(' ');
}

console.log(spacedCapitalDriver(capitalDriver));


function reversedNavigator (hacker2) {
    return hacker2.split('').reverse().join('');
}

console.log(reversedNavigator(hacker2));

let comparison = hacker1.localeCompare(hacker2);

if (comparison == -1) {
    console.log("The driver's name goes first.")
} else if (comparison == 1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius sagittis augue. Vestibulum nibh leo, aliquet vitae ligula a, facilisis malesuada tortor. In quis tristique leo. Nulla fringilla, felis sit amet sagittis vestibulum, ipsum sem semper magna, id malesuada est orci eget magna. Ut a laoreet quam, ac aliquet purus. Cras ut elementum dui. Phasellus elit dui, pulvinar at bibendum vel, commodo vel ligula. Duis luctus, est ut rutrum sodales, risus turpis accumsan tellus, nec volutpat nulla mi quis lectus. Vestibulum eget luctus erat. Integer mattis interdum sapien, vitae accumsan leo sodales at.Aliquam dignissim dolor ut euismod iaculis. Vivamus ac massa sit amet enim facilisis consectetur. Sed pulvinar congue neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel lectus nibh. Curabitur sodales, odio eget pharetra auctor, orci nulla rhoncus orci, eu iaculis est diam sit amet lacus. Proin non suscipit arcu, vitae ultricies leo. Morbi sit amet consequat leo.Nunc placerat arcu quam, vel blandit turpis eleifend et. Curabitur rutrum suscipit lectus, at aliquet erat maximus ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id neque nec neque fermentum aliquam quis id justo. Sed lorem velit, dapibus at purus non, posuere mollis magna. In suscipit euismod efficitur. In accumsan ut tellus at iaculis. In in mi interdum, dictum urna id, ultricies nibh. Sed quam leo, rutrum vel leo non, eleifend molestie lorem. Vivamus accumsan dapibus pharetra. Duis volutpat libero at diam eleifend, quis rutrum est vehicula. Sed risus nisl, molestie quis lacinia a, venenatis quis neque. Nunc vitae faucibus ligula, vel ultrices odio.';

const words = longText.split(' ');

let etCount = 0;

for (i = 0; i < words.length; i++) {
    if (words[i] == "et") {
        etCount++;
    }
}

console.log(etCount);