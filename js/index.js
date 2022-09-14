// Iteration 1: Names and Input

let hacker1 = "Andrea"
console.log("The driver's name is " + hacker1)

let hacker2 = "Marta"
console.log("The navigators name is " + hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name,  it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// Iteration 3: Loops


// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

// Método 1 con loop:

let driver = " ";

for (let i = 0; i < hacker1.length; i++){
    driver += hacker1[i].toUpperCase() + " "
}
 
console.log(driver)

// Método 2 con propiedades: 

console.log(hacker1.split("").join("-").toUpperCase())



// 3.2 Print all the characters of the navigator's name, in reverse order.

// Método 1 con loop: 

let navigator = " "

for (i = hacker2.length - 1; i >= 0; i--){
    navigator += hacker2[i]
}

console.log(navigator)

// Método 2 propiedades: 

console.log(hacker2.split("").reverse().join(""))


/* 3.3 Depending on the lexicographic order of the strings, print:
    - The driver's name goes first.
    - Yo, the navigator goes first definitely.
    - What?! You both have the same name? */
 
// Mirar código ascii 

for (i = 0; i < hacker1.length; i++){
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first."); break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely."); break;
    } else if (hacker1[i] == hacker2[i]) {
        console.log("What?! You both have the same name?"); break;
    } 
}