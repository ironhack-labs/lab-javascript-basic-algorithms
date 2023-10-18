// Iteration 1: Names and Input
let hacker1= "Sena";
console.log(`The driver's name is ${hacker1}.`);


let hacker2= "Sena";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } 
    else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
    }

// Iteration 3.1: Loops 
let driversName = "";


for(let i = 0; i < hacker1.length; i++) {
   driversName+= `${hacker1[i]} `;
}

console.log(driversName.toUpperCase())

// Iteration 3.2: Loops

let navigatorsName = "";

for (let i = hacker2.length-1; i>=0; i--) {
    navigatorsName += `${hacker2[i]}`;
}

console.log(navigatorsName);


// Iteration 3.3: Loops

if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1, because we rock:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sapien sed mi tincidunt ornare. Integer ac nisi varius, dapibus risus eu, dignissim purus. Nulla facilisi. Quisque consectetur nunc sem, eu molestie elit condimentum ac. Etiam non euismod risus. Donec imperdiet odio eget metus varius, ut faucibus lectus volutpat. Nullam ornare consectetur nisl at convallis. Aenean tellus metus, laoreet eu tincidunt ut, porta at lorem. Suspendisse potenti.

Nulla eu lacus ante. Morbi tincidunt efficitur consequat. Aliquam sed ante non nulla elementum porttitor. Mauris nulla dui, sagittis sed aliquam molestie, venenatis id tortor. Cras mollis velit quis metus imperdiet commodo. Cras congue neque id lorem iaculis, et luctus mi eleifend. Vestibulum at sapien ac lectus aliquet finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum rhoncus orci aliquam leo pharetra viverra. Vivamus consectetur sapien ex, quis tristique odio pharetra id. Mauris quis bibendum nisl, id volutpat est. Donec cursus dui non metus tempus, nec vulputate tortor ultricies. Aliquam erat volutpat. Ut non mauris molestie, iaculis massa in, sagittis mauris. Duis pulvinar mi mi, ac tincidunt metus vulputate eget.

Vestibulum nec ex dapibus, vehicula purus imperdiet, ultrices justo. Praesent tristique nulla erat, quis cursus turpis cursus et. Aliquam erat volutpat. Morbi urna neque, finibus id tortor sed, porttitor porttitor massa. Quisque accumsan odio id felis malesuada, in iaculis mauris posuere. Maecenas a viverra nunc. Quisque nec nulla at augue aliquam dapibus. Nullam arcu enim, convallis eu faucibus et, congue a velit. Quisque eget augue neque. Sed a feugiat erat, eu tincidunt magna.`

let count = 0;

for (let i = 0; i<longText.length; i++) {
    if (longText[i] === " " || (longText[i] === "." && longText[i+1] !== " ")) {
        count++;
    } 
}

console.log(count);