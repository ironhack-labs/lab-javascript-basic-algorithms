// Iteration 1: Names and Input
let hacker1 = "Tom";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Jerry";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
const h1Length = hacker1.length;
const h2Length = hacker2.length;


if(h1Length > h2Length){
  console.log(`The hacker1 has the longest name, it has ${h1Length} characters`);
}
else if( h1Length < h2Length){
  console.log(`The hacker2 has the longest name, it has ${h2Length} characters`);
}
else{
    console.log(`Wow, you both have equally long names, it has ${h1Length} characters`);
}

// Iteration 3: Loops

for( let i = 0; i< h1Length ;i++ ){
    console.log(hacker1[i]);
}
for( let i = h2Length ; i >= 0;i-- ){
    console.log(hacker2[i]);
}

if(hacker1.localeCompare(hacker2)<0){
   console.log(`The driver's name goes first.`) ;
}else if ((hacker1.localeCompare(hacker2)>0)){
   console.log(`Yo, the navigator goes first, definitely.`);
}
else{
    console.log(`What?! You both have the same name?`)
}

