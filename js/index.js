//1ra Iteracción

let hacker1 = "Jesús";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Fernando";
console.log(`The navigator's name is ${hacker2}`)

//2de Iteracción

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else if(hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

for (let i = 0; i < hacker2.length; i++) {
  console.log(hacker2.toUpperCase()[i]);
}

let hacker2Name=" ";
for(let i=hacker2.length-1; i>=0;i--){
hacker2Name += hacker2[i];
}
console.log(hacker2Name);

