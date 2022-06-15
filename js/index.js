// Iteration 1: Names and Input

const hacker1 = "Nic";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Begum";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// Iteration 3.1

let hacker1WithSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1WithSpace += hacker1[i] + " ";
}
hacker1WithSpace = hacker1WithSpace.slice(0, -1);
hacker1UpperCase = hacker1WithSpace.toUpperCase();
console.log(hacker1UpperCase);

// Iteration 3.2

let hacker2Reversed = "";
for (let j = hacker2.length-1; j >= 0; j--) {
    hacker2Reversed += hacker2[j];
}
console.log(hacker2Reversed);

//Iteration 3.3

let minNameLength = "";

if (hacker1.length <= hacker2.length) {
    minNameLength = hacker1.length;
} else {
    minNameLength = hacker2.length;
}

let situation = 0;
for (let i = 0; i < minNameLength; i++) {
    
    if (hacker1[i] < hacker2[i]) {
        situation = 1; 
        break;
    } else if ( hacker1[i] > hacker2[i]) {
        situation = 2;
        break;
    } else {
      
    }
}

if (situation === 1 ) {
    console.log("The driver's name goes first");
} else if (situation === 2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    if (hacker1.length < hacker2.length) {
      console.log("The driver's name goes first");
    } else if (hacker1.length > hacker2.length) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }
}    
