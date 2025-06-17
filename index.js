
// Iteration 1: Names and Input
const hacker1 = "Matthew";

const hacker2 = "Alejandro";


console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

let driver = hacker1.length;
let theNavigator = hacker2.length;
if (driver > theNavigator) {
  console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (theNavigator > driver) {
    console.log(`It seems that the navigator has the longest name, it has ${theNavigator} characters.`);
    }
else { 
    console.log(`Wow, you both have equally long names, ${driver} characters!`);
}

// Iteration 3: Loops

let result = '';
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";

}
console.log(result);

//Print all the characters of the navigator's name in reverse order, i.e., "nhoJ" 

let navResult = "";
for (let i = hacker2.length -1; i >= 0; i-- ) {
    navResult += hacker2[i];
}

console.log(navResult);


//3.3 Depending on the lexicographic order of the strings, print:

//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?

let winner = "";

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    const char1 = hacker1[i];
    const char2 = hacker2[i];

    if (char1 < char2) {
        winner = "driver";
        break;
    }
    if (char1 > char2) {
        winner = "navigator";
        break;
    }
}
    
    if (winner === null) {
        if (hacker1.length < hacker2.length){
            winner = "driver";
            
        } else if (hacker1.length > hacker2.length){
            winner = 'navigator';
            
        } else winner = "same";
    }

    if (winner = "driver") {
        console.log("The drivers name goes first");
    } else if (winner = "navigator") {
        console.log("Yo, the navigator goes first, definitely");
    } else {
        console.log("What?! You both have the same name?");
    }


//Make your program count the number of words in the string.


    const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod eu quam sit amet fermentum. Phasellus lobortis eu erat mollis finibus. Donec efficitur odio ac feugiat commodo. Etiam in purus metus. Etiam maximus tempor sem, ut semper tellus molestie ac. Fusce ut libero sit amet tortor accumsan molestie quis ac est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Phasellus pretium porta sem, et vehicula lacus ullamcorper nec. Vivamus consectetur, risus eget fermentum posuere, neque libero gravida sapien, nec feugiat magna nibh at urna. Vivamus sit amet leo mi. Nulla placerat lorem sed tortor fringilla, a faucibus justo tempor. Sed finibus libero vitae quam eleifend, sit amet vestibulum arcu euismod. Curabitur varius id metus nec scelerisque. Integer porttitor vulputate pulvinar. Vivamus cursus fringilla ex, sit amet ornare ex aliquam eu.
    
    Integer ut lacus eget odio vulputate elementum. Donec consequat erat nisi, at consequat lorem lobortis non. Cras rutrum facilisis dolor, vel congue nibh dictum non. Ut scelerisque tempor tempor. Donec fringilla dui et libero egestas ultricies. Ut vehicula tristique ullamcorper. Duis facilisis suscipit lacus, sit amet elementum risus euismod quis.
    
    `;
    
    let wordCount = 0;
    const words = longText.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== "" && words[i] !== "," && words[i] !== ".") {
            wordCount++;
        }
    }
    console.log(`The number of words in the text is: ${wordCount}`);
