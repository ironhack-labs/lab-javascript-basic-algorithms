console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Ruben";
console.log("The driver's name is", hacker1);
let hacker2 = "Wei";
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


// Iteration 3: Loops
// 3.1
let capitalizedName = "";
for(let i = 0; i < hacker1.length; i++) {
    capitalizedName = capitalizedName + hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedName);

//3.2
let reversedName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    reversedName += hacker2[j];
}
console.log(reversedName);

//3.3
for(let m = 0; m < 20; m++) {
    if (hacker1[m] < hacker2[m]){
        console.log("The driver's name goes first.");
        break;
    } else if (hacker2[m] < hacker1[m]){
        console.log("Yo, the navigator goes first definitely.")
        break;
    } else if (hacker1 === hacker2){
        console.log("What?! You both have the same name?");
        break;
    }
}






