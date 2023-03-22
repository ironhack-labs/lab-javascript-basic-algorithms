// Iteration 1: Names and Input
let hacker1 = "Gerrit";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Katerina";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hackerUppercased = "";

for(let i = 0; i < hacker1.length; i++) {
    hackerUppercased = hackerUppercased + hacker1[i].toUpperCase() + " ";
}

console.log(hackerUppercased);

//---------------------------

let hackerReversed = "";
let counter = hacker2.length - 1;

for(let i = counter; i > -1; i--) {
    hackerReversed = hackerReversed + hacker2[i];
    //counter = counter - 1;
}

console.log(counter);
console.log(hackerReversed);

//---------------------------

//I don't understand how to convert letters into numbers without creating 24 if else conditionals

//---------------------------

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula massa, suscipit vel tellus sed, egestas pulvinar mauris. Aliquam vestibulum, sem a pellentesque eleifend, ligula ligula efficitur justo, in facilisis dui urna sit amet nisl. Donec consequat euismod augue, quis sagittis enim. In eu interdum orci. Aenean tincidunt, lorem eu porttitor posuere, nibh lorem venenatis nisl, quis consectetur odio velit in nulla. Duis fermentum nisl et arcu blandit congue. Vivamus volutpat ac nulla id tristique. Pellentesque a porta lectus, id interdum mi. Nullam libero nunc, placerat eu odio eu, consequat fermentum velit. Nullam sed finibus libero. Donec convallis ante et ullamcorper congue. Quisque pellentesque turpis ac metus fringilla, ultricies fringilla odio lobortis. Curabitur congue scelerisque libero. Vestibulum purus ipsum, posuere non massa vel, ornare dictum tortor.

Vivamus porttitor pellentesque nisl, fermentum blandit nibh tincidunt id. Sed sit amet efficitur erat, commodo pretium risus. Nulla purus orci, dignissim sit amet ornare sed, molestie non leo. Vivamus eu justo tempor, viverra ante in, gravida nisi. Cras massa sem, tincidunt ut lacus id, cursus viverra lacus. Vestibulum viverra laoreet mi, quis commodo mi eleifend in. Sed varius tortor id porta fringilla. Aliquam porttitor iaculis enim, non ornare quam sodales et. Mauris tristique nunc ac interdum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum pellentesque auctor varius. Nulla ut tempor tortor. Sed rhoncus purus lacus, semper ultrices tellus auctor eu. Etiam elementum aliquam nisi, quis sagittis justo dapibus at. Aenean auctor nisl leo, eu vehicula lorem pellentesque eu. Vestibulum facilisis rutrum rutrum.

Pellentesque sed arcu quam. In consequat dui risus, id malesuada mauris fringilla lobortis. Aliquam erat volutpat. In tempus fringilla eleifend. Nullam semper venenatis sem in mattis. Pellentesque faucibus fermentum metus, eleifend sagittis sem pretium a. Sed turpis massa, laoreet varius accumsan sed, facilisis a metus. Maecenas lacus mi, feugiat ac malesuada placerat, maximus a lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pulvinar iaculis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam mattis bibendum erat vitae placerat. Maecenas eu mauris neque. Integer sodales, metus at ullamcorper gravida, turpis dui faucibus libero, vitae aliquet quam metus id leo."

