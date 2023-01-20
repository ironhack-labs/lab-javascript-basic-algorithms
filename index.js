// Iteration 1: Names and Input
const hacker1 = "joao";
const hacker2 = "matheus";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let Caracteres1 = hacker1.length;
let Caracteres2 = hacker2.length;

if(Caracteres1>Caracteres2){
    console.log (`The driver has the longest name, it has ${Caracteres1} characters.`);
}else if (Caracteres1===Caracteres2){
    console.log(`Wow, you both have equally long names, ${Caracteres1} characters!`);
}else{
    console.log(`It seems that the navigator has the longest name, it has ${Caracteres2} characters`);
}

// Iteration 3: Loops

let nomeMaisculo="";
let nomeInverso="";

for(let i=0; i<hacker1.length;i++){
    nomeMaisculo+=hacker1[i].toUpperCase()+" ";

}
console.log(nomeMaisculo);

for(let i=hacker2.length-1; i>0;i--){
    nomeInverso+=hacker2[i];
}
console.log(nomeInverso);

const hackersCompare = hacker1.localeCompare(hacker2);


if(hackersCompare === 1){
    console.log("The driver's name goes first.");
}else if (hackersCompare === -1){
    console.log("Yo, the navigator goes first definitely.");
}else {
    console.log("What?! You both have the same name?");
}

  

