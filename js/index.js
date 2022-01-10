// Iteration 1: Names and Input

console.log("hi")

let hacker1 = "gaberella";
console.log("The driver's name is " + hacker1);
let hacker2 = "gabe";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`The navigator has the longer name, it has ${hacker2.length} characters.`);
}
else {
    console.log("The drivers have the same length name");
}
// Iteration 3: Loops

let newname = ""
for (let i = 0; i < hacker1.length; i++){
    newname += hacker1[i] + " ";
}

console.log(newname.toUpperCase());

let navnewname = "";

for (let i = hacker2.length - 1; i >= 0; i--)
{
    navnewname += hacker2[i];
}

console.log(navnewname);


let lengthtogo = 0;

if (hacker1.length >= hacker2.length){
    lengthtogo = hacker2.length;
}
else if (hacker2.length > hacker1.length){
    lengthtogo = hacker1.length
}

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
let picked = false;
for (let i = 0; i < lengthtogo; i++){
    if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.")
        picked = true; 
        break;
    }
    else if (hacker2[i] > hacker1[i]){
        console.log("The driver's name goes first")
        picked = true;
        break;
    }

}

if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
}
else if (picked === false){
    if (hacker1.length > hacker2.length){
        console.log("Yo, the navigator goes first definitely.");
    }
    else {
        console.log("The driver's name goes first")
    }
}
