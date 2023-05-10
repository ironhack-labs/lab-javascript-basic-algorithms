// Iteration 1: Names and Input

const hacker1 = "Jani";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Lina";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {

  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);  
}

else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}


// Iteration 3: Loops
// 3.1 Uppercase 

let driverName = "";
for (let i=0; i < hacker1.length; i++) {
    driverName += `${hacker1[i]} `
}
console.log(driverName.toUpperCase())

// 3.2 Reverse order 

let hacker2Reversed = "";
for ( let j= hacker2.length-1; j >= 0; j--) {
    hacker2Reversed += `${hacker2[j]}`
}
console.log(hacker2Reversed)

// 3.3 Lexicographic order 

if (hacker1.localeCompare(hacker2) === -1) {  //===> Jani is before Lina
console.log("The driver's name goes first")}

else if (hacker1.localeCompare(hacker2) === 1) { //==> Jani is after Lina
console.log("Yo, the navigator goes first, definitely.")}

else if (hacker1.localeCompare(hacker2) === 0) {  //==> Jani & Lina would be equal
console.log("What?! You both have the same name?")}

// Bonus 1 


