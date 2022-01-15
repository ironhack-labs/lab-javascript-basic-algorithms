// Iteration 1: Names and Input
let hacker1 = 'Julia';
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = 'Beatriz';
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`); //pode ser tanto hacker1 quanto hacker2? Tendo mesmo número de caracteres...
}

// Iteration 3: Loops
//3.1
let result = '';

for (let i = 0; i < hacker1.length; i++){
  if (i == hacker1.length -1){
    result += hacker1[i].toUpperCase() + '';    
  }else{
    result += hacker1[i].toUpperCase() + ' ';
  } 
}
console.log(result);

//3.2
let result2 = '';

for (let i = hacker2.length-1; i >=0; i--){ 
result2 += hacker2[i];  
}
console.log(result2);

//3.3
if (hacker1.toLowerCase() < hacker2.toLowerCase()){
  console.log('The driver\'s name goes first.');

}else if (hacker1.toLowerCase() > hacker2.toLowerCase()){
  console.log('Yo, the navigator goes first definitely.');
  
}else{
  console.log('What?! You both have the same name?');
}