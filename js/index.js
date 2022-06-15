var hacker1 = "Matt"
var hacker2 = "Mattew"
​
console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);
​
​
// Iteration 2: Conditionals
​
const hacker1Length = hacker1.length
const hacker2Length = hacker2.length
​
if (hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else if( hacker2Length > hacker1Length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}
​
​
// Iteration 3: Loops
​
​
let nameUppercase = hacker1.toUpperCase();
​
​
let saludation = nameUppercase.split('').join(' ');
console.log(saludation);
​
​
​
let nameBackwards = []
for (let index = hacker2.length -1; index >= 0 ; index--) {
    nameBackwards.push (hacker2[index]);
    
}
​
console.log(nameBackwards.join(''));
​
​
for (let index = 0; index < hacker2.length; index++) {
    if(hacker2[index] < hacker1[index]){
        console.log("The driver's name goes first.");
        break;
    }
    
    else if (hacker2[index] > hacker1[index]){
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
    else if(hacker1 === hacker2){
        console.log("What?! You both have the same name?")
        break;
    }  
}