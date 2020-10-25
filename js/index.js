// Iteration 1: Names and Input
let hacker1='Rodrigo';
console.log(`The driver name is ${hacker1}`);
let hacker2='Alison';
console.log(`The navigator name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length == hacker2.length){
 console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
if (hacker1.length > hacker2.length){
 console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
 }
 else {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
 }
}
// Iteration 3.1: Loops
// Comment: Passando uma string para UpperCase e depois inserindo espaços entre as letras.
let novoNome = "";
for(let i=0;i<hacker1.length;i += 1){
  let space = " ";
 novoNome+=(`${hacker1[i]} ${space}`);
}
console.log(novoNome.toUpperCase());
// Iteration 3.2: Loops
// Comment: Invertendo uma string
console.log(hacker2.split("").reverse().join(" "));
// Interaction 3.3
// Comment: Neste código verificamos a ordem alfabética do Driver e Navigator
if(hacker1===hacker2){
  console.log(`What?! You both have the same name?`);
} else{
  var hackers = [hacker1, hacker2];
  hackers.sort();
  if(hackers[0]==hacker1){
  console.log(`The driver's name goes first.`);} else{
   console.log(`Yo, the navigator goes first definitely.`)
  }
}