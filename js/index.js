// Iteration 1: Names and Input

let hacker1 = "victoria"; 
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "maria";
console.log(`the navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}


// Iteration 3: Loops

//3.1:

let hackerSpace = "";

for ( i = 0; i < hacker1.length; i++) {
    
    hackerSpace += hacker1[i] + ` `;
}

console.log(hackerSpace.toUpperCase())

//3.2:

/* OPCION 1:

let hackerReverse = [];

for ( j = 0; j < hacker2.length; j++) {
    hackerReverse.push(hacker2[j])
    
}
hackerReverse = hackerReverse.reverse()

let reverseString = "";
for ( k = 0; k < hackerReverse.length; k++){
    reverseString += hackerReverse[k]

}
console.log(reverseString)*/

//OPCION 2:

let reverseString = "";
for ( j = hacker2.length - 1; j >= 0; j--) {
    reverseString += hacker2[j]
}
console.log(reverseString)


//3.3 (comparar hacker1 y hacker2 alfabeticamente)

// OPCION 1:

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`)
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// OPCION 2:

let same = true;
for ( v = 0; v < hacker1.length; v++){

    if (hacker1[v] > hacker2[v]) { 
        console.log(`Yo, the navigator goes first definitely.`)
        same = false;
        break;
    }
    if (hacker1[v] < hacker2[v]) {
        console.log(`drivers`)
        same = false;
        break;
    }
}

if (same) {
    console.log(`same`)
}
