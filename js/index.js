console.log(`i'm ready!`);

// Iteration 1: Names and Input

let hacker1 = "Laurie";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Zynrie";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};

// Iteration 3: Loops
let word = "";
console.log(word);
for(let i=0; i<hacker1.length -1;i++){
    word += hacker1[i]+ " ";
}
console.log(word.toUpperCase());

let word2 = "";
for(let i=hacker2.length-1; i >= 0; i--){
    word2 += hacker2[i];
}
console.log(word2.toLocaleLowerCase());
// 3.3
let bothHacker = [hacker1, hacker2];
bothHacker.sort()

if (hacker1 !== hacker2 && bothHacker[0] === hacker1) 
    console.log(`The drivers name goes first.`);

else if(hacker1 === hacker2) 
    console.log(`What?! You both have the same name?`);

else
    console.log(`Yo, the navigator goes first definitely.`);
  


