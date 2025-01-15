// Iteration 1: Names and Input
const hacker1 = "Sasha"
console.log ("The driver's name is " + hacker1 + ".") 

const hacker2 = "Vincent"
console.log ("The navigator's name is " + hacker2 + ".")

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ("THe driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker2.length > hacker1.length) {
    console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

// Iteration 3: Loops
//3.1 

// for (let i = 0; i < hacker1.length; i++) {
//     console.log (hacker1[i].toUpperCase())
// }

console.log(hacker1.toUpperCase().split("").join(" "))

//3.2 
console.log(hacker2.split("").reverse().join(""))

//3.3 

if (hacker1 > hacker2) {
    console.log ("The driver's name goes first.")
}
else if (hacker2 > hacker1) {
    console.log ("Yo, the navigator goes first definitely.")
} else { 
    console.log ("What?! You both have the same name?")
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis laoreet quam. Cras suscipit efficitur urna a blandit. Donec risus magna, sodales a ultrices vel, imperdiet sed dolor. Nullam aliquet eleifend semper. Nunc diam nisi, finibus sed lacinia ac, ullamcorper sit amet leo. Vivamus auctor purus eget ante faucibus, sit amet malesuada eros commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum lectus suscipit lectus pretium, viverra lobortis mi ultrices. 

Donec ornare libero quis venenatis mollis. Suspendisse potenti. Donec commodo justo sit amet accumsan consequat. Praesent eros libero, auctor ac purus non, mattis pellentesque nunc. Sed vitae lacus odio. Sed scelerisque tincidunt tellus quis venenatis. Nunc consectetur nibh non risus commodo, sodales laoreet enim commodo. Phasellus vitae sollicitudin nulla. Integer iaculis, nibh ac faucibus fringilla, nisi justo consectetur sapien, vitae placerat nunc lectus at neque. Quisque accumsan odio ante, sit amet auctor justo posuere vitae. In mollis justo nisi, id tincidunt ante hendrerit vitae. Sed pharetra odio nec cursus tincidunt.

Vestibulum libero turpis, mattis eleifend nibh vel, posuere dignissim massa. Nunc convallis facilisis aliquam. Curabitur nec urna semper, pretium lorem semper, auctor velit. In hac habitasse platea dictumst. Aliquam erat volutpat. Aenean lacus mauris, semper ac vehicula sit amet, laoreet eu magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eu neque nec eros ornare feugiat. Vivamus scelerisque justo quis dapibus faucibus. Phasellus ligula ligula, dapibus id ultrices ac, mollis et nulla. Suspendisse potenti. Mauris pulvinar ex vitae orci interdum, eget scelerisque justo placerat.`;

// count words

const counter = longText.split(" ")
console.log (counter.length)

// count "et"

const findEt = longText.indexOf("et");
console.log(findEt);


