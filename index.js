// Iteration 1: Names and Input

let hacker1 = "Alba";

let hacker2 = "Bea";


console.log("The drivers's name is", hacker1);

console.log("The navigators's name is", hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else //(hacker2.length == hacker1.length)
{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}


// Iteration 3: Loops

/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/

let upperName = "";

for (let letter of hacker1){
    upperName = upperName + letter + " ";
}
console.log(upperName.toUpperCase());


/*3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".*/

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

console.log(reversed);


/*3.3 Depending on the lexicographic order of the strings, print:*/

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

