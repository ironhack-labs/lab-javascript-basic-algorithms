// Iteration 1: Names and Input
const hacker1 = "Johannes";
const hacker2 = "Alonso";

console.log("The driver's name is " + hacker1);

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The diver has the longest name, it has " + hacker1.length + " characters");

} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters!");

} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}
// Iteration 3: Loops

//3.1
let driverCapital = "";
for (i = 0; i < hacker1.length; i++) {
    driverCapital = driverCapital.concat(hacker1[i] + " ");
}
console.log(driverCapital.toUpperCase());

//3.2
let reversedNavigator = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator = reversedNavigator.concat(hacker2[i]);
}
console.log(reversedNavigator);

//3.3
let arrSort = [hacker1, hacker2].sort();

if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?");
} else {
    if (hacker1 == arrSort[0]) {
        console.log("The driver's name goes first.")
    } else {
        console.log("Yo, the navigator goes first definitely.")
    }
}

// Bonus 1

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices elit nulla, sed convallis nisi dapibus sit amet. Quisque a ex ante. Phasellus sodales lorem purus, at mollis eros rutrum in. Proin scelerisque faucibus enim, et iaculis nulla condimentum ut. Nunc faucibus eros sit amet lorem sagittis rutrum eget in quam. Cras sem neque, vehicula sit amet lacus in, mollis facilisis velit. Integer feugiat vel ligula at aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate, libero porttitor vulputate mollis, lectus dui tristique tellus, quis fermentum felis lacus et dui. Aliquam urna eros, congue sit amet eros quis, blandit fermentum velit. Etiam ac hendrerit tellus. Nunc posuere consequat elementum. " +

    "Maecenas pharetra lacus quam, at finibus neque consectetur in. Nunc imperdiet tincidunt rutrum. Donec fermentum, purus molestie mattis vehicula, nibh diam lobortis augue, ut vestibulum diam ante a enim. Vivamus consequat mollis commodo. Vestibulum quis scelerisque purus. Sed pulvinar lorem est, lobortis sagittis ipsum semper nec. Praesent pellentesque turpis in massa venenatis, vel suscipit leo congue." +

    " Donec auctor elit at sapien consequat facilisis. Nullam turpis sapien, pharetra sed commodo et, feugiat at orci. Nunc sem nisl, feugiat quis vestibulum ut, accumsan vitae purus. Curabitur odio leo, condimentum non egestas vitae, tempor eget tortor. Phasellus et rutrum nisl. Duis accumsan rutrum nunc in eleifend. Aenean et molestie libero. Mauris elementum vehicula augue. Duis eget nisl ut erat facilisis aliquam. Vestibulum id enim orci. Proin congue tortor vitae lectus vehicula, at posuere erat malesuada. Vivamus ut convallis elit. Morbi at finibus ipsum. In rhoncus, nulla vitae ullamcorper ullamcorper, nulla quam ultrices augue, quis sodales sapien quam ut nisi.";


console.log(lorem.split(" ").length + "Words");

console.log(lorem.split("et").length - 1 + " Times ET");

//Bonus 2
let phraseToCheck = "race g car";
let normalWord = phraseToCheck.replace(/[\W_]/g, "").toLowerCase();

let reversedWord = "";


for (i = normalWord.length - 1; i >= 0; i--) {
    reversedWord = reversedWord.concat(normalWord[i]);
}

if (normalWord == reversedWord) {
    console.log("It is a Palindrome");
} else {
    console.log("No Palindrome");
}