// Iteration 1: Names and Input
var hacker1 = "Zipi";
console.log(`The Driver's name is ${hacker1}`);
var hacker2 = "Zape";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
var newName = "";
for (i=0; i<=hacker1.length-1; i++){
  newName += hacker1.charAt(i) +" ";
}
console.log (newName.toUpperCase());
//
var reversed = "";
for (i=hacker1.length; i>=0; i--){
  reversed += hacker1.charAt(i);
}
console.log (reversed);
//
var sentence1 = "The driver's name goes first.";
var sentence2 = "Yo, the navigator goes first definitely.";
var sentence3 = "What?! You both have the same name?";

console.log(sentence1.localeCompare(sentence2)); // -1: sentence1 comes before sentence2
console.log(sentence2.localeCompare(sentence3)); // 1: sentence3 comes before sentence2
console.log(sentence3.localeCompare(sentence1)); // 1: sentence1 comes before sentence3, of course
//then, result is 1,3,2
var result = `
${sentence1}
${sentence3}
${sentence2}`;
console.log(result);

/* Trying to do it dynamically below these lines, but array order returns undefined. why???
var order = [];
order[0] = sentence1.localeCompare(sentence2);
order[1] = sentence2.localeCompare(sentence3);
order[2] = sentence3.localeCompare(sentence1);
console.log(order);
var result;

switch (order){
  case [-1,-1,-1]: 
    result = `
${sentence1}
${sentence2}
${sentence3}`;
    break;
  case [-1,1,1]: 
    result = `
${sentence1}
${sentence3}
${sentence2}`;
    break;
  case [1,-1,1]: 
    result = `
${sentence2}
${sentence1}
${sentence3}`;
    break;
  case [1,-1,-1]: 
    result = `
${sentence2}
${sentence3}
${sentence1}`;
    break;  
  case [1,1,-1]: 
        result = `
${sentence3}
${sentence2}
${sentence1}`;
    break; 
  case [-1,1,-1]: 
        result = `
${sentence3}
${sentence1}
${sentence2}`;
    break; 
}

console.log (result);*/



