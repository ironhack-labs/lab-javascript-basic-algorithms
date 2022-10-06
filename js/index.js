console.log("I'm ready");
// Iteration 1: Names and Input

const hacker1 = 'Mar';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Cuernito';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else  if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length + hacker1.length} characters.`);
}

// Iteration 3: Loops 
let space = '';

for (const characters of hacker1) {
    space += characters + ' ';
}

console.log(space.toLocaleUpperCase());

let reverse = '';
for(let r = hacker2.length -1; r>=0; r--){
    reverse += hacker2[r];
}
console.log(reverse);


if(hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely");
    }else if (hacker2[0] > hacker1[0] ) {
    console.log("The driver's name goes first");
    } else {
        console.log("What?! You both have the same name?");
    }
    

for( let i = 0; i >= hacker1[0] || hacker2[0]; i++){
        if (hacker1[i] > hacker2[i + 1]){
        console.log("The driver's name goes first");
        } else if (hacker2[i] > hacker1[i + 1]){
            console.log("Yo, the navigator goes first definitely");
        } else if (hacker2 == hacker1){
            console.log("What?! You both have the same name?");
            break;
        }
    }

    