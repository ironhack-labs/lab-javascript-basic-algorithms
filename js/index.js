const hacker1 = "Francesc"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt(`Wanna know who has it longer?`);
console.log(`The navigator's name is ${hacker2}`);


if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Creo quees una laogica mal aplicada pues 
//si bien son los comandos no se estan aplicando como esperava
let hack1split = hacker1.split("");
let hackspace = hack1split.join(" ");
let hack1may= hackspace.toUpperCase();

console.log(hack1may);

let hackrev = hacker2.reverse();
console.log(hackrev);


if(hacker2.length > hacker1.length) {
    console.log(`Yo, the navigator goes first definitely.`);
}else if(hacker1.length > hacker2.length) {
    console.log(`The driver's name goes first.`);
}else{
    console.log(`What?! You both have the same name?`);
}
