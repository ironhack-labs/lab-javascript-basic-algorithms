// // Iteration 1: Names and Input
// // Iteration 2: Conditionals
// // Iteration 3: Loops


//DRIVER'S NAME
let hacker1 = 'felipe';
console.log(`driver's name is: ${hacker1}`);

let hacker2 = 'ineke';
console.log(`navigator's name is: ${hacker2}`);


// if(hacker1.length> hacker2.length){
//     console.log("the driver's name is longer than navigator's name");
// }else if{    
//     console.log("the navigator's name is longer than driver's name");
// }else{
//     console.log("the navigator's name equal driver's name");
// }


let driverUpperCase = '';
for( let i = 0 ; i < hacker1.length ; i++){
    driverUpperCase += hacker1[i].toUpperCase() + ' ';
}
console.log(driverUpperCase);


let navegatorInverted = '';
let hacker2Upper = hacker2[0].toUpperCase() + hacker2.slice(1);
for( let i = hacker2.length - 1 ; i >= 0 ; i--){
    navegatorInverted += hacker2Upper[i];
}
console.log(navegatorInverted);

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let hack1, hack2;
for(let i = 0 ; i < alphabet.length ; i++){
    if(hacker1[0] === alphabet[i])  hack1 = i;  //driver
    if(hacker2[0] === alphabet[i])  hack2 = i;  //navigator
}

console.log(hack1);
console.log(hack2);

if(hack1 < hack2){ 
    console.log("The driver's name goes first.");
}else if(hack1 > hack2){
      console.log("Yo, the navigator goes first definitely.");
    }else{ 
        console.log("What?! You both have the same name?");
    }