// Iteration 1: Names and Input
let hacker1 = "Jeronimo"

console.log("The drivers name is " + hacker1);

let hacker2 = "Andy"

console.log("The drivers name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("The driver has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log ("Wow, you both have equally long names, ") + hacker1.length + " characters!";
}

// Iteration 3: Loops fhjdesk
let driverUpper = hacker1.toUpperCase();
let result= " ";

for (let i = 0; i< driverUpper.length; i++) {
    result += driverUpper[i] + " "
}
console.log (result)

let reversed = " ";

for (let i= hacker2.length - 1; i >=0; i--) {
    reversed+= hacker2[i]
}

console.log(reversed)

let comparison = hacker1.localeCompare(hacker2);

if (comparison < 0) {
    console.log ("The driver's name goes first.");
} else if (comparison > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh ac laoreet vulputate. Nam auctor mauris et orci euismod rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nec ex molestie, faucibus ex at, egestas mauris. Vestibulum nec felis augue. Proin at libero purus. Vivamus pharetra ipsum ac ligula placerat ullamcorper. Ut iaculis suscipit fringilla. Pellentesque ut leo dolor. Nam sit amet orci mollis, cursus diam id, dapibus tortor. Pellentesque pretium ligula eget lectus ultrices, eget tempor nisi varius. Nulla est justo, egestas quis tempus id, faucibus ut elit. Quisque lobortis erat vel blandit feugiat. Proin convallis facilisis massa a rhoncus. Quisque nec malesuada neque, eget blandit justo."

Integer porttitor neque eu aliquam bibendum. Aliquam maximus nisi id nisi aliquam mattis. Phasellus ut est eget est posuere facilisis. Aenean fermentum metus aliquam elementum vulputate. Vestibulum bibendum diam in egestas commodo. Pellentesque sed eros vitae purus volutpat semper quis placerat risus. In dictum molestie ante in cursus. Nunc egestas maximus massa, vehicula tempor est aliquam sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus at sollicitudin neque, ac rutrum metus. Integer elementum enim vel diam porttitor, sit amet suscipit sem feugiat. In hac habitasse platea dictumst. Nunc nulla tortor, faucibus id velit id, feugiat suscipit nulla. Maecenas sit amet semper dui. Nunc leo lacus, eleifend et lacinia eget, molestie ut tortor.

Maecenas mattis ipsum nec elit efficitur, at sodales quam hendrerit. Integer elementum neque velit, ac efficitur nibh auctor id. Etiam ipsum massa, gravida a est venenatis, congue lobortis dui. Vivamus scelerisque dui at diam tincidunt, sit amet ornare turpis efficitur. Aenean libero quam, eleifend ac metus quis, tristique mattis risus. Donec pulvinar velit metus, at bibendum nulla congue eget. Phasellus sed bibendum enim, et dictum quam. Phasellus diam velit, fringilla vel venenatis sed, convallis at mi`

let wordcount = 0

for (let i = 0; i < longtext.length; i++) {
    if (longtext[i]=== " "){
    wordcount++;
    }
}

wordcount = wordcount + 1;

console.log("Number of words:", wordcount)