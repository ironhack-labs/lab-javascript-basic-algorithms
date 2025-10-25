// Iteration 1: Names and Input
const hacker1 = "Pari";
//console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Pari";
//console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals;
if(hacker1.length>hacker2.length) {
    //console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length<hacker2.length){
    //console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    //console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops
//3.1Print the characters of the driver's name, separated by space, and in capital letters,

// let driverCapital = ""

// for(let i = 0; i < hacker1.length; i++){
//     driverCapital += hacker1[i].toUpperCase() + " ";
//     }
// console.log(driverCapital);

// //3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// let reversed = ""

// for(let i = hacker2.length -1; i >= 0; i--){
//    reversed += hacker2[i];
// }
// console.log(reversed);

//3.3 Depending on the lexicographic order of the strings, print:
let result = ""

for(let i = 0; i < Math.min(hacker1.length, hacker2.length); i++){
    if(hacker1[i]<hacker2[i]){
        result = "The driver's name goes first."
        //console.log("The driver's name goes first.");
        break;
    }
    else if(hacker1[i]>hacker2[i]){
       result = "Yo, the navigator goes first, definitely."
        //console.log() 
       break;}
    // else if(hacker1[i] === hacker2[i]){
    //     console.log("What?! You both have the same name?")
    //  }
}

if(result !== ""){
    console.log(result)
}else{
    console.log("What?! You both have the same name?")
}