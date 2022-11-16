console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1="Alex";
let hacker2="Modest";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals

if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops

let hacker1SeparatedLetters='';
for (let i=0; i<=hacker1.length-1; i++){
    hacker1SeparatedLetters += hacker1[i] + " ";
}
console.log(hacker1SeparatedLetters.toUpperCase());

let hacker2Reverse='';
for(let i=hacker2.length-1; i>=0; i--){
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);


const alphabet="abcdefghijklmnopqrstuvwxyz";
hacker1=hacker1.toLowerCase();
hacker2=hacker2.toLowerCase();
for(let i=0; i<hacker1.length && i<hacker2.length; i++){

    if(hacker1===hacker2){
        console.log("What?! You both have the same name?");
        break;
    }
    
    else{
        let valueHacker1;
        let valueHacker2;

        valueHacker1=alphabet.indexOf(hacker1[i]);
        valueHacker2=alphabet.indexOf(hacker2[i]);


        if (valueHacker1 < valueHacker2){
            console.log("The driver's name goes first.")
            break;
        }
        else if (valueHacker1 > valueHacker2){
            console.log("Yo, the navigator goes first definitely.")
            break;
        }
        else if (hacker1[i+1] === undefined){
            console.log("The driver's name goes first.")
            break;       
        }
        else if (hacker2[i+1] === undefined){
            console.log("Yo, the navigator goes first definitely.")
            break; 
        }
    }

}



