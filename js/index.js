//Iteration 1:

let hacker1 = 'Julián';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Lluís';
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2:
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//Iteration 3:
let result = '';
for(let i = 0; i < hacker1.length; i++){
 result += (hacker1[i].toUpperCase() + ' ')
}

console.log(result)


let result1 = '';
for(let i = hacker2.length - 1; i>= 0; i--){
 result1 += hacker2[i];
}

console.log(result1);




if(hacker1.localeCompare(hacker2) == -1){
  console.log(`The driver name goes first.`)
} else if (hacker1.localeCompare(hacker2) == 1){
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log('What?! You both have the same name?');
}