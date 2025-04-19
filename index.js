// Iteration 1: Names and Input
let hacker1 = "Thathsara";
let hacker2 ="Naomi";

console.log("The driver's name is" + " " + hacker1);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let dName = " ";

for(let i=0; i< hacker1.length; i++) {
  dName += hacker1[i] + " ";
  
}
console.log(dName.toUpperCase()); 

////

let reversed_name = " ";

for(let i = hacker2.length -1; i >= 0; i--) {
    reversed_name += hacker2[i] 
}
console.log(reversed_name);


const lexi_order = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

if(lexi_order.indexOf(hacker1[0]) < lexi_order.indexOf(hacker2[0])) {
    console.log("The driver's name goes first.");
} else if (lexi_order.indexOf(hacker1[0]) > lexi_order.indexOf(hacker2[0])) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin elit sed mauris molestie, in dapibus leo vulputate. Proin tempor enim dolor. Integer commodo aliquam odio ac interdum. Etiam porta interdum tortor non luctus. Nunc feugiat nec est sit amet maximus. Nullam sodales tellus quis sem faucibus consectetur. Nulla scelerisque arcu vel sapien dignissim, ut tempus sem maximus. Suspendisse ultricies imperdiet interdum. Nunc viverra sollicitudin metus. Praesent tempor erat at ligula gravida venenatis. Nulla eget nisi facilisis, convallis lorem quis, egestas felis.

Phasellus id dictum mi. Aliquam nec leo sed turpis suscipit euismod. In maximus sit amet mi non malesuada. Quisque laoreet placerat lobortis. Maecenas pulvinar turpis luctus ante ullamcorper, eget venenatis nisi placerat. Nulla rutrum elit pellentesque lectus malesuada, a varius velit blandit. Sed non turpis nisi. Nunc at velit gravida, ullamcorper ante vitae, facilisis enim. Nunc in nibh sit amet mauris maximus sodales id vitae lacus. Mauris vestibulum gravida dictum. Duis vitae vulputate dolor. Sed et mi nec tortor volutpat blandit. In pulvinar nulla tellus, eget efficitur elit aliquet sed. Vestibulum scelerisque nisl tellus, et malesuada odio mattis ut.

Fusce ultrices a augue sit amet pretium. Vivamus luctus maximus sagittis. Phasellus posuere auctor neque nec fringilla. Nunc tristique, sapien et vestibulum ultrices, dui risus aliquam lorem, et rutrum nibh ipsum sit amet ex. Ut in posuere enim, ac egestas tortor. Curabitur scelerisque leo vel luctus ultrices. Nulla eleifend, ante sed luctus mattis, tellus mauris vulputate orci, ac ornare tellus ex ut nulla. Nunc consectetur tortor eget risus cursus, quis aliquam augue vehicula. Integer semper sed sem ac pulvinar. In tempor egestas justo sed tempus. Proin eget molestie nisi. Vivamus aliquam metus in gravida finibus. Proin semper congue ex sit amet aliquet. Maecenas in malesuada mauris. Nullam elementum nisi quam, ut congue diam blandit vitae. Sed consectetur lacus nec dignissim euismod.`

let word_count  = 0;
let wordArr = longText.split(" ");

console.log(wordArr.length-1);
///

const phraseToCheck = "A man, a plan, a canal, Panama!";

let clean = "";

for(let i = 0; i < phraseToCheck.length; i++) {
    const character = phraseToCheck[i].toLowerCase();
    if ((character >= 'a' && character <= 'z') || (character >= '0' && character <= '9')) {
        clean += character;
    }
}

let isPalindrome = true;

for(let i = 0; i < clean.length / 2; i++) {
    if(clean[i] !== clean[clean.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome);