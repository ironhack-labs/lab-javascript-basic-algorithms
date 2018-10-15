// Names and Input
let hacker1 = 'Ismael';
console.log("The driver's name is ",hacker1);

let hacker2 = process.argv[2];
console.log("The navigator's name is ",hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
    console.log( "The driver has the longest name, it has ", hacker1.length, "characters");
} else if(hacker2.length > hacker1.length) {
    console.log("Yo, the navigator got the longest name, it has", hacker2.length, "characters");
} else {
    console.log("wow, you both got equally long names",hacker1.length, "characters");
} 

let capitals = [];

for(i=0; hacker1.length > i; i += 1){
    hacker1 = hacker1.toUpperCase();
    capitals.push(hacker1[i], ' ');
}

console.log(capitals);

let reverse = [];
for(i=0; hacker1.length > i; i += 1){
    reverse.unshift(hacker2[i]);
}
console.log(reverse);


// Lorem ipsum generator
