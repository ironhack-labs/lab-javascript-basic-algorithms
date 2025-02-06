// Iteration 1: Names and Input
const hacker1 = "Alexandra";
const hacker2 = "Nova";

console.log("The driver's name is", hacker1)
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals

if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if(hacker1.length == hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let upperChar = "";
for (let i = 0; i < hacker1.length; i++) {
    upperChar += hacker1[i].toUpperCase() + " ";
}

console.log(upperChar);

let reversedChar = "";
for (let i = hacker2.length - 1; i >= 0 ; i--) {
    reversedChar += hacker2[i];
}

console.log(reversedChar);

if(hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}else if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
}

// Bonus

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus nisl. Etiam dapibus tellus ut fermentum tempus. Proin augue nulla, volutpat id sapien id, faucibus pellentesque orci. Maecenas aliquam risus a ante euismod interdum. Sed vel mi tristique, porta leo ac, aliquam erat. Aenean porttitor blandit augue, id pretium elit rutrum ut. Maecenas posuere mi vel velit eleifend, quis cursus quam efficitur. Curabitur tristique fermentum tellus nec imperdiet. Proin turpis velit, pretium at eros non, mattis vestibulum justo. Aliquam pharetra finibus diam, ut luctus est volutpat at. Cras vel dolor sed felis mattis sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tempor diam id magna faucibus, non cursus tellus varius. Praesent urna libero, semper eu ipsum eu, cursus mollis magna. Nulla vehicula mattis urna eleifend semper. Praesent a sapien vitae quam luctus pretium eu a neque. Duis viverra pellentesque odio, non fermentum felis imperdiet malesuada. Nam porta faucibus erat, vitae volutpat nunc dignissim vitae. Aenean erat purus, egestas in ornare quis, congue id magna. Phasellus eu auctor dui. Suspendisse potenti. Suspendisse malesuada venenatis quam, sit amet gravida mauris maximus in. Sed blandit augue ac magna tristique, vitae aliquam lectus condimentum. Donec porttitor tempus nisl, eget consequat eros dictum ut. Donec a lacinia enim. Suspendisse id mi eget nisi fermentum dignissim quis id sem. Aliquam sagittis ligula a quam malesuada commodo. Sed lobortis fringilla dui, sed consectetur lacus pharetra at. Phasellus fermentum neque et lacus bibendum, facilisis tincidunt sapien hendrerit.";

console.log(longText.split(" ").length)
console.log(longText.split("et").length)