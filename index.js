// Iteration 1: Names and Input
let hacker1 = "Joshua";
console.log("The driver's name is " + hacker1);
let hacker2 = "Daniel";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
 else if (hacker2.length > hacker1.length)
  { console.log ("the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}
// Iteration 3: Loops
let nameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  nameSpaced += hacker1[i].toUpperCase() + (i < hacker1.length - 1 ? " " : "");
}
console.log(nameSpaced);

let nameReversed = ""; 
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameReversed += hacker2[i];
}  
console.log(nameReversed);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.");
}else {
    console.log("What?! You both have the same name?")
}

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie lacus ut leo consectetur dignissim. Donec vitae lectus et nisi convallis hendrerit. Quisque id maximus nulla. Ut volutpat, dui at iaculis ornare, tortor lectus dapibus velit, in facilisis nunc massa sit amet enim. Vestibulum quis nisl leo. Aliquam erat volutpat. Praesent mattis malesuada eros, sit amet tincidunt dui semper at.Aliquam tincidunt lorem ut velit facilisis, sit amet posuere lectus blandit. Morbi molestie nunc id dolor varius, eu luctus nisi porttitor. Ut viverra quam sed blandit dignissim. Sed sit amet arcu a purus luctus lobortis. Donec mollis arcu suscipit tellus dapibus, ac eleifend lorem pulvinar. Aenean eget ultricies odio, ac mattis nisl. Etiam nec turpis vitae lacus sagittis malesuada. Curabitur dolor neque, maximus vitae nibh id, sollicitudin hendrerit ex. Phasellus consequat efficitur lorem a ullamcorper."
let count = 0;
for (let i=0; i<=longText.length; i++){
    if(longText[i] === " "){
         count ++;
    }
    }
console.log("Words " + count );


let etPhoneHome = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText.substring(i, i + 4) === " et ") {
        etPhoneHome++;
    }
}
console.log(etPhoneHome);

