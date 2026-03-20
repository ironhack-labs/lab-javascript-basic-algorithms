// Iteration 1: Names and Input

let hacker1 = "Noah";
console.log("The driver´s name is " + hacker1);

let hacker2 = "Jarko";
console.log("The navigator´s name is " + hacker2);
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has "+ hacker1.length+ " characters");
} else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length+ " characters");
} else{
    console.log("Wow, you both have equally long names, "+ hacker1.length+" characters");
}
// Iteration 3: Loops

//3.1
let printCap="";
for(let i=0; i<hacker1.length;i++){
    printCap += hacker1[i].toUpperCase()+" ";
}
console.log(printCap);

//3.2
let print ="";
for(let i=hacker2.length-1; i>=0; i--){
    print += hacker2[i];
}
console.log(print);

//3.3
let found = 0;
let i = 0;

if(hacker1 == hacker2) found == 2;

while(found == 0){
    if (hacker1[i] > hacker2[i]) found = -1;
    if (hacker1[i] < hacker2[i]) found = 1;
    i++;
}

if(found == -1) console.log("Yo, the navigator goes first, definitely.");
if(found == 1) console.log("The driver´s name goes first.");
if(found == 2) console.log("What? You both have the same name?");



