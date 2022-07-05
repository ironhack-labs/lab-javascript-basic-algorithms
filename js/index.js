// Iteration 1: Names and Input
//
let hacker1 = 'Fitipaldi';
let hacker2 = 'Aracle';

console.log("the driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driverName = hacker1.length;
let navigatorName = hacker2.length;
if (driverName > navigatorName) {
    console.log(`The driver has the longest name, it has ${driverName} characters`);
} else if (driverName < navigatorName) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${navigatorName} characters!`);
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let allCaps = '';
for ( let i = 0; i < hacker1.length; i++ ){
    allCaps += hacker1[i].toUpperCase() + ' ';
}
console.log(allCaps);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function wordFlipper(hacker2) {
    let reverseName = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseName += hacker2[i];
    }
    return reverseName;
}
console.log(wordFlipper(hacker2));

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

    let allNames = [hacker1, hacker2];
    allNames.sort();
    if (allNames[0] === hacker1) {
       console.log("The driver's name goes first.");
    } else if (allNames[0] === hacker2){
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?")
    }
