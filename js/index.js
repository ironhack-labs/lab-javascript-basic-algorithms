// Iteration 1: Names and Input
//
console.log("I'm ready!");

let hacker1 = "Andriu"; 
console.log("The driver's name is " +hacker1);

let hacker2 = "Marrket"; 
console.log("The navigator's name is " +hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ("The driver has the longest name, it has " +hacker1.length +" characters.")
} else if (hacker1.length < hacker2.length) {
    console.log ("It seems that the navigator has the longest name, it has " +hacker2.length +" characters.")
} else {
    console.log ("Wow, you both have equally long names," +hacker1.length  +" characters!")
}


// Iteration 3: Loops

let name = hacker1.toString();
name = name.toUpperCase(); 
let name2 = new String;
name2 = name[0];

for (let i = 1; i < name.length; i++) {
    name2 = name2 + " " + name[i]; 
}

console.log(name2)




