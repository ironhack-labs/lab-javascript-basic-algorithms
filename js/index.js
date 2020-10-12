// Iteration 1: Names and Input
const hacker1 = "Leonardo"
const hacker2 = "Luis Cruz"

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else if(hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
for (let i = 0; i < hacker1.length; i++) {
 
    console.log(hacker1.charAt(i).toUpperCase() + ' ');
}
//3.2
for (let i = hacker2.length; i >= 0 ; i--) {
   
    console.log(hacker2.charAt(i));
}