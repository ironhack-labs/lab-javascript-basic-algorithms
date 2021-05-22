// Iteration 1: Names and Input
let hacker1="Gustavo";
console.log(`the driver's name ${hacker1}`);

let hacker2="Jordana";
console.log(`the navegator's name ${hacker2}`);

// Iteration 2: Conditional

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loop

let uppercase= '';
for(let i=0;i<hacker1.length;i++) {
  uppercase+= `${hacker1[i].toUpperCase()} ` 
}
console.log(uppercase);

let contrario='';
for(let i= hacker2.length -1; i>= 0; i-= 1 ) {
  contrario += hacker2[i];
}
console.log(contrario);

let order = hacker1.localeCompare(hacker2);
if ( order === -1 ) {
  console.log("The driver's name goes first.");
} else if ( order === 1 ) {
  console.log("Yo, the navigator goes first definitely.");
} else { console.log("What?! You both got the same name?");
}
