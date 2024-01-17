// Iteration 1: Names and Input
let hacker1 = "ESE"
let hacker2 = "EGBAGBA"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

} else if (hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, it has ${hacker1.length} characters`);
}
// Iteration 3: Loops
let weirdName ='';

for (let i =0; i <= hacker2.length - 1; i++) {

    weirdName += hacker2[i].toUpperCase() + " ";
}

console.log(weirdName);


let wordReversed ="";

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    wordReversed += char;
}

console.log(wordReversed);

if (hacker1.localeCompare(hacker2) ==1){
    console.log(`The driver's name goes first`);

} else if (hacker1.localeCompare(hacker2) === -1){
    console.log(`Yo, the navigator goes first, definitely`);
}
else {
    console.log(`What?! You both have the same name?`);
}

//Bonus 1//

const longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae aliquam lectus, eu ultricies urna. Proin euismod eros non nibh euismod, non tempor lectus pulvinar. Cras congue sapien molestie, lacinia elit id, laoreet quam. Mauris ac ornare turpis. In quis ipsum aliquet, iaculis arcu a, hendrerit sapien. Morbi luctus metus ut nisi eleifend, eu ultricies mi ullamcorper. Pellentesque varius purus ac commodo porta. Pellentesque sagittis leo at suscipit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Phasellus ut rhoncus orci, in bibendum urna. Ut mattis vestibulum tempus. Ut mattis quam in sapien elementum, sit amet varius ante porta. Praesent id justo non odio lobortis convallis. Phasellus mattis facilisis orci, a aliquet erat tincidunt vel. Morbi a lectus aliquet nibh gravida fringilla. Morbi feugiat volutpat lorem, vel commodo nisl mattis sed. Fusce in ipsum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu metus a odio porttitor pulvinar. Proin feugiat pretium dui, vel aliquam quam luctus quis.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim quis purus cursus, tincidunt consequat ex fringilla. Nulla ultrices, orci a ultricies sagittis, turpis augue aliquam metus, ac vulputate dui neque quis felis. Donec sed sapien orci. Praesent et felis vitae eros molestie malesuada. Maecenas vel pharetra velit, ut auctor odio. Nam dictum nibh non ultricies gravida. In dapibus tellus quis dui suscipit, in maximus purus aliquam. Fusce cursus lacinia felis, non pharetra enim fringilla in.`;

countWords = longText.split(` `).length;

console.log(countWords);

let count = 0

for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText[i + 1];

    if ( twoChars === "et") {
        count++;
    }
}

console.log(count);