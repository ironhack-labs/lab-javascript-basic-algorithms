// Iteration 1: Names and Input
let hacker1 = "hanh";
console.log(`the driver's name is ${hacker1}`);
let hacker2= "victor";
console.log(`navigator is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length> hacker2.length){
console.log (`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length< hacker2.length){
    console.log(`It seems like ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
}
    else{
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops
//3.1 
let result=hacker1.toUpperCase().split("");
console.log(result);

//3.2 Print all the characters of the navigator's name, in reverse order.
let result2="";
for (let i=hacker2.length -1; i>=0; i--){
    result2 += hacker2[i];
};
console.log(result2);
/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
hacker1=hacker1.toLowerCase();
hacker2=hacker2.toLowerCase();
if (hacker1.localeCompare(hacker2)<0){
    console.log (`${hacker1} goes first.`)
}
else if (hacker1.localeCompare(hacker2)>0){
    console.log (`Yo, ${hacker2} goes first definitely.`)
}
else {
    console.log(`What?! You both have the same name?`)
}