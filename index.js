// Iteration 1: Names and Input

let hacker1 = "Enrique"; //driver
let hacker2= "Kristi"; //navigator

console.log(`The driver name is ${hacker1}`);
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

let hacker1Length= hacker1.length
let hacker2Length= hacker2.length

if (hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}
 else if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters"`);
} else {
    console.log(`"Wow, you both have equally long names" ${hacker1.length}`);
    }

// Iteration 3: Loops

//3.1
let nameHacker1="";
for (let i =0; i< hacker1.length; i++){
    nameHacker1 += hacker1[i] + " ";
}
capitaldriverName= nameHacker1.toUpperCase();
console.log(capitaldriverName);
//3.2
let nameHacker2Reversed="";
for (let i= hacker2.length -1; i>=0; i--){
   nameHacker2Reversed += hacker2[i];
}
console.log(nameHacker2Reversed);

// 3.3
//hacker1, driver
//hacker2, navigator


let comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult <0){
    console.log(`Yo, the navigator goes first, defintely`);
}
else if (comparisonResult>0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
   console.log("What?! You both have the same name?");
}
 

//BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia non odio vitae rutrum. Etiam imperdiet urna sed turpis luctus condimentum. Curabitur sed iaculis ex. Sed non mollis nibh, at facilisis lacus. Duis consectetur aliquam enim. Sed tristique dictum pellentesque. Phasellus ultrices eleifend purus quis ultricies. Vivamus convallis massa laoreet est dapibus, eu placerat tellus rutrum. Nam efficitur at ex non elementum. Phasellus suscipit leo vitae risus congue lacinia. Aenean tincidunt aliquet sem vitae tincidunt. Nulla ornare sed neque vel viverra. Fusce venenatis ac libero ut fermentum.

Sed fermentum ligula et egestas faucibus. Cras eleifend ac libero at feugiat. Nunc tincidunt ornare magna imperdiet vehicula. Aliquam erat volutpat. Curabitur in sollicitudin felis, nec volutpat dolor. Pellentesque fringilla molestie placerat. Suspendisse consectetur purus at efficitur efficitur. Nunc ut mauris vel metus gravida eleifend. Praesent posuere eu orci vel pulvinar. Proin in quam nulla. Mauris tristique aliquet tellus, quis vehicula tellus suscipit ut. Nunc mattis eros quam, in vulputate nisi posuere eu. Donec nibh lectus, imperdiet ut mi eu, feugiat aliquam arcu.

Sed lectus magna, placerat ac diam sit amet, tristique cursus tortor. Praesent eget mollis nulla, vel tristique ipsum. Curabitur rutrum aliquam hendrerit. Nunc eu euismod nisl, a imperdiet felis. Suspendisse blandit sit amet libero ultrices pellentesque. In arcu odio, mollis eget consequat non, vulputate sed risus. Donec sit amet felis ut eros mattis aliquam sed sed nulla.`

const countWords = longText.trim().split(/\s+/).length;
console.log(countWords);


const word = " et ";
const countEt = longText.split(word).length-1;
console.log(countEt);
