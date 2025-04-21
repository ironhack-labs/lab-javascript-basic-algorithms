// Iteration 1: Names and Input
const hacker1 = "Daniel";
const hacker2 = "Josh";

console.log("The driver name is " + hacker1);
console.log("The navigator name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loopscont

//3.1
let strSpace = "";

for (let i = 0; i < hacker1.length; i++) {
strSpace += hacker1[i].toUpperCase() + " ";
}
console.log(strSpace);

//3.2
let reverStrg =""
for (let i = hacker1.length - 1; i>=0; i--) {
    reverStrg +=hacker1[i]
}
console.log(reverStrg)

//3.3

if(hacker1 > hacker2){
    console.log("The driver's name goes first")

} else if(hacker2> hacker1){
    console.log("Yo, the navigator goes first, definitely.") 

} else{ console.log("What?! You both have the same name?")}

// BONUS 1  count the number of words in the string.

const longText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec viverra sapien. Suspendisse sed mi posuere, fringilla augue id, luctus lectus. Fusce euismod magna vehicula dictum suscipit. Praesent vehicula sem sit amet ligula mattis, sed vulputate purus ullamcorper. Cras consectetur massa ex, nec commodo velit dapibus sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ornare felis purus, vitae aliquam orci egestas ut. Nunc lobortis auctor orci eget viverra. Curabitur tortor eros, sodales interdum mattis non, faucibus et odio. Pellentesque feugiat luctus hendrerit. Nam imperdiet dolor eget posuere finibus. Suspendisse vehicula mauris et leo viverra, vitae semper libero tristique. Aenean arcu purus, suscipit at velit sed, euismod pulvinar lectus. Pellentesque non interdum lectus. Nunc dictum velit sit amet ligula pellentesque, auctor eleifend ligula tristique."


let counterA = 0;
let counterB = 0;

for( let i = 0; i< longText.length; i++){

    if (longText[i] === " "){
        counterA++;
    }

    if(longText[i] === "et"){
        counterB++;
}
}

console.log( "Numbers of the words " + counterA);
console.log( "Numbers of time latin word et appears is " + counterB);

// BONUS 2



