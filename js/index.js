// Iteration 1: Names and Input
let object = {
    hacker1 : "XXXX",
    hacker2 : "YYYY",
}

console.log(`The driver's name is ${object.hacker1}`);
console.log(`The navigator's name is ${object.hacker2}`);

// Iteration 2: Conditionals
let driver = object.hacker1.length;
let navigator = object.hacker2.length;
for(let i= 0; (i < driver  && i < navigator); i++){
if (driver> navigator){
    console.log(`The driver has the longuest name, it has ${driver} characters`);
}
else if( driver<navigator){

    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`);
}
else{
    console.log(`Wow, you both have equally long names,${navigator} characters`);
}

}



// Iteration 3: Loops
let phrase = "";
let NAME = object.hacker1.toUpperCase();
for(let i=0; i<driver; i++){
    phrase += NAME[i] + " ";
 }
 console.log(phrase);
 
 let phrase1 = [];
 for(let i=0; i<navigator; i++){
     phrase1.push(object.hacker2[i]);
   
    }
let phrase2 = phrase1.reverse();
    
console.log(phrase2.join(""));



