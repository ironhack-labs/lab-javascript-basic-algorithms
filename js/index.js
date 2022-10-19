// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = "Ruben";
console.log ("The driver's name is" , hacker1);
let hacker2 = "Wei";
console.log ("The navigator's name is" , hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

 console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} 

else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)

}

// Iteration 3: Loops

let capitalizedName = "";

for (let i=0; i<hacker1.length; i++) {
capitalizedName = capitalizedName + hacker1[i].toUpperCase () + " ";


}
console.log (capitalizedName);

let reversedName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {

    reversedName = reversedName + hacker2[j];

}
console.log (reversedName);


if (hacker1.length < hacker2.length) {
    for(let m = 0; m < hacker1.length; m++) {

    if (hacker1[m] < hacker2[m]) {

    console.log ("The driver's name goes first.")

    }
    else if (hacker2[m] < hacker1[m]) {

 console.log("Yo, the navigator goes first definitely.")   


    }

    else {
    console.log("What?! You both have the same name.")

    }


}

}

else if (hacker2.length <= hacker1.length) {
    for(let n = 0; n < hacker2.length; n++) {

    if (hacker1[n] < hacker2[n]) {

    console.log ("The driver's name goes first.")

    }
    else if (hacker2[n] < hacker1[n]) {

 console.log("Yo, the navigator goes first definitely.")   


    }

    else {
    console.log("What?! You both have the same name.")

    }


}

}
