// Iteration 1: Names and Input

let hacker1 = "amalia";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "alvaro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){//Calculamos si el mayor es el hacker1
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if(hacker2.length > hacker1.length){//Calculamos si el mayor es el hacker2
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1Up = hacker1.toLocaleUpperCase();
console.log(hacker1Up);
let nombreSeparado = '';

for(let i = 0;i < hacker1Up.length;i++){
    nombreSeparado += hacker1Up[i] + " "
}

console.log(nombreSeparado);

let nombreAlreves = ''

for(i = hacker1.length - 1;i >= 0; i--){
    nombreAlreves += hacker1[i] 
}

console.log(nombreAlreves)

/*
if (hacker1.localeCompare(hacker2) <0) {
    console.log ("the driver's name goes first.");
    } 
else if (hacker1.localeCompare(hacker2)> 0) {
    console.log ("Yo, the navigator goes first, definitely.");  
}
else { console.log("Whats?! You both have the same name?");
    }*/

if(hacker1 < hacker2){
    console.log ("the driver's name goes first.");
}else if(hacker2 < hacker1){
    console.log ("Yo, the navigator goes first, definitely.");  
} else{
    console.log("Whats?! You both have the same name?");
}