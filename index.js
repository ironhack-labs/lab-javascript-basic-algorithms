// Iteration 1: Names and Input
const hacker1 = "valentin";
console.log("The drivers name is " + hacker1);
const hacker2 = "Xavier"
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters.` );
} else if ( hacker2.length > hacker1){
    console.log(`The navigator has the longest name it has ${hacker2.length} characters.` );
} else {
    console.log(`Both have equally long names!!!: ${hacker2.length}`)
}


// Iteration 3: Loops
let hacker1wierd = "";
for(char of hacker1) {
    hacker1wierd = hacker1wierd + char.toUpperCase() + " ";
}
console.log(hacker1wierd);

let hacker2wierd = "";
for (char of hacker2) {
    hacker2wierd = char + hacker2wierd; 
}
console.log(hacker2wierd);

for (i = hacker2.length - 1; i>=0; i--) {
    console.log(hacker2[i]);
}

const compare = hacker1.localeCompare(hacker2);

switch (compare) {
    case -1:
        console.log('The drivers name goes first');
        break;
    case 1:
        console.log('Yo, the navigator goes first definitely');
        break;    
    case 0:
        console.log('What? You have the same name?!');
        break;
}       