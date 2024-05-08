// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Emil";
console.log("Iteration 1:");
console.log("The driver's name is " + hacker1 + ".");
console.log("The navigator's name is " + hacker2 + ".");


// Iteration 2: Conditionals
console.log("\nIteration 2:");
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
console.log("\nIteration 3:");
let driverUpper = "";
for (let i = 0; i < hacker1.length; i++){
    if (i !== hacker1.length -1){
        driverUpper += hacker1[i].toUpperCase() + " ";
    } else {
        driverUpper += hacker1[i].toUpperCase();
    }
};
console.log(driverUpper);

let driverReverse = "";
for (let i = hacker1.length-1; i >= 0; i--){
    driverReverse += hacker1[i];
};
console.log(driverReverse);

let hackers = [hacker1, hacker2];
hackers.sort();
if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hackers[0] === hacker1) {
    console.log("The driver's name goes first.");
} else if (hackers[0] === hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
}


// Bonus 1
console.log("\nBonus 1:");
const longText = "Proin feugiat magna justo, ac finibus nibh pretium non. Etiam sed eros tincidunt, maximus lectus eu, faucibus orci. Nunc vel varius nulla, eget porttitor odio. Vestibulum sed lacus sapien. Morbi ac faucibus nisl. Maecenas ut tincidunt magna, vel pulvinar dolor. In eleifend mollis nunc, ac aliquet dui euismod ac. Pellentesque finibus magna sit amet dolor feugiat posuere. Suspendisse rutrum nibh sagittis ante mollis, vel varius ex auctor. Integer ultricies dictum tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sed leo non neque maximus scelerisque id eleifend dui. Donec posuere sed risus sit amet hendrerit. Phasellus ultrices facilisis lacus a faucibus. Sed in erat turpis. In erat lectus, pretium ut accumsan id, fermentum nec orci. Vivamus placerat nisl nec enim interdum viverra. Duis dignissim sapien viverra suscipit aliquam. Nullam accumsan augue leo, a rhoncus lacus gravida non. Duis ut libero eros. Praesent eget ligula et nisi porta vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt vel leo eget mattis. Quisque ornare viverra odio in hendrerit. Morbi vel felis ac risus euismod fermentum. Nunc fringilla justo ut pellentesque aliquam. Suspendisse pharetra, enim in pharetra lobortis, augue est sollicitudin nisi, scelerisque sollicitudin purus massa eget ligula.".trimEnd().trimStart();

let counter_sp = 0; // count spaces between words
for(let i = 0; i < longText.length; i++) {
    if(longText[i] === " ") {
        counter_sp++;
    }
}
console.log("Words: ", counter_sp + 1); // add one to get correct number of words

let counter_et = 0; // count 'et' in text
for(let i = 0; i < longText.length; i++) {
    if(longText.slice(i, i+4) === " et ") {
        counter_et++;
        i += 3;
    }
}
console.log("Et: ", counter_et);
