// Iteration 1: Names and Input
let hacker1 = "Elena";
console.log("The driver's name is " + hacker1);

let hacker2 = "Chrome";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length  + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+  hacker2.length  + " characters.");
} else if (hacker1.length = hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let spaceName = ' ';
for (let i = 0; i < hacker1.length; i++) {
  spaceName =spaceName + hacker1[i].toUpperCase() + ' ';
}
console.log(spaceName)

let reverseName = '';
for(let i = hacker2.length -1; i >= 0; i--) {
  reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

let orderName = hacker1.localeCompare(hacker2);
if(orderName === -1) {
  console.log("The driver's name goes first.")
} else if (orderName === 1){
  console.log("Yo, the navigator goes first definitely.")
}else if (orderName === 0){
  console.log("What?! You both have the same name?")
}


// Bonus 1
const lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales id erat non ultricies. Aenean interdum velit sed posuere ultricies. Phasellus eu mi odio. Duis interdum mattis urna eget rutrum. Morbi ac felis mattis, suscipit arcu vel, euismod dui. Vivamus a dui euismod sapien posuere sagittis vel in nibh. Vivamus interdum velit ut interdum sagittis. Ut egestas fringilla dapibus.Maecenas tempor nibh sed turpis vestibulum, eu molestie leo aliquet. Nulla ultricies ante vitae nibh vulputate, ut rhoncus augue luctus. Donec convallis lacinia urna a congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus diam, tempus consequat nibh vehicula a. Nunc at nunc massa. Donec non lobortis tellus. Nam justo quam, placerat id feugiat nec, accumsan id dolor. Vivamus ante ipsum, congue nec ex vel, ornare luctus massa.Aliquam ac ligula non libero vulputate tempus. Vivamus eu luctus ex. Donec vel lectus vulputate, scelerisque est ac, varius ante. Morbi ultrices mattis mi, sed tincidunt lectus. Nulla lectus justo, pulvinar ac dolor ut, congue dictum eros. Donec sit amet semper mi, sed tincidunt tortor. Vestibulum mattis ligula sit amet eros ullamcorper, sit amet laoreet nunc gravida. Integer id est eu leo auctor porta ac id elit. In sagittis eget sem sit amet scelerisque. Maecenas eu lacus quis lacus congue feugiat. Vestibulum non est arcu. Pellentesque sit amet imperdiet eros.";

function countOfWords(string) {
    test= [];
    test= string.split("");
    console.log(`the number of words in the string is equal to ${test.length}`)
}
 countOfWords (lorem);
 
// Bonus 2
