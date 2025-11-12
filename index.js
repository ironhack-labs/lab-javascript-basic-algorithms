// Iteration 1: Names and Input
const hacker1 = 'Jorge';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Anderson';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let name1Long = hacker1.length;
let name2Long = hacker2.length;

console.log(name1Long); // 5
console.log(name2Long); // 8

if (name1Long > name2Long) {
  console.log(`The driver has the longest name, it has ${name1Long} characters.`);
} else if (name2Long > name1Long) {
  console.log(`It seems that the navigator has the longest name, it has ${name2Long} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${name1Long} characters!`);
}

// Iteration 3: Loops
//opcion 1
let nameSpacer="";
for(let i = 0; i < hacker1.length; i++){
    nameSpacer += hacker1[i].toUpperCase()+" ";

}
console.log(nameSpacer);
//opcion 2
let nameReverse="";
for(let i = hacker2.length -1; i >= 0; i--){
    nameReverse += hacker2[i];

}
console.log(nameReverse);
//opcion 3
if (hacker1 < hacker2){
    console.log("The driver's name goes first.");

}else if (hacker2 < hacker1){
    console.log("Yo, the navigator goes first, definitely.");
}else{
    console.log("What?! You both have the same name?");
}
