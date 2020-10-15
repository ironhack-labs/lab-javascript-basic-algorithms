//Iteration 1: Names and Input

const hacker1 = "joe"
  console.log("The driver's name is: " + hacker1);

const hacker2 = "john"
  console.log("The navigator's name is: " + hacker2);

//Iteration 2: Conditionals

if (hacker1.lenght > hacker2.lenght) {
    console.log("Driver's name has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log("Navigator's name has the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("They both have the same number of characters: " + hacker1.lenght)
}

//Iteration 3: Loops

let name = " ";
for (let i = 0; i < hacker2.length; i++) {
    name += hacker2[i].toUpperCase() + ' '; //
}
console.log(name);

let nameRev = " ";
for (i = hacker2.length -1; i >= 0; i--) {
    nameRev += hacker2[i];
}
console.log(nameRev);

/*console.log(hacker1.localeCompare(hacker2))*/


function strcmp(hacker1, hacker2) {
    if(hacker1 === hacker2) {
        console.log("The driver's name goes first.");
    }

    if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first definitely.");
    }else{
        console.log("What?! You both have the same name?");
    }   
}
strcmp();

