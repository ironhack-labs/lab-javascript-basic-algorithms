// Iteration 1: Names and Input
let hacker1 = 'Carlos';
let hacker2 = 'Iscubedu'
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

let longerName;
let nameSize;

//Check the longest name
if(hacker1.length>hacker2.length){
    longerName = hacker1;
    nameSize = hacker1.length;
    console.log(`Ther driver has the longest name, it has ${nameSize} characters.`)
}if(hacker1.length<hacker2.length){
    longerName = hacker2;
    nameSize = hacker2.length;
    console.log(`it seems that the navigator has the longest name, it has ${nameSize} characters.`)
}else{
    nameSize = hacker1.length;
    console.log(`Wow, you both have equally long names, ${nameSize} characters!`);
}


// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase();
let hacker1Separate = '';

for (let index = 0; index < hacker1Upper.length; index++) {
   
    if(index === 0){
        hacker1Separate=hacker1Upper[index];
        
    }else{
        hacker1Separate += ' ' + hacker1Upper[index];
        
    }
}

console.log(hacker1Separate);