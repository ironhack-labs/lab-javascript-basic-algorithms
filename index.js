// Iteration 1: Names and Input
let hacker1 = "Erica";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ale";
console.log(`The navigator's name is ${hacker2}`);


 //Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hackerr1.length) {
    console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops


let spaceName = " ";

for (let i = 0; i < hacker1.length; i++) {
    spaceName += hacker1[i].toUpperCase() + " ";
}
console.log(spaceName.trim())



let reverseName = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName)



const driver = hacker1[0].toLowerCase();
const navigator = hacker2[0].toLowerCase();
console.log(driver)
console.log(navigator)

console.log(driver.localeCompare(navigator))

    if(navigator.localeCompare(driver) === 1) {
        console.log("The driver's name goes first.");
    } else if (navigator.localeCompare(driver) === -1){
       console.log("Yo, the navigator goes first, definitely.");
    } else if (navigator.localeCompare(driver) === 0){
       console.log("What?! You both have the same name?");
    }




