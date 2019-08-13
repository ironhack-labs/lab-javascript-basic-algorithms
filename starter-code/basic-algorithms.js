// Names and Input
let hacker1="Diana";
let hacker2="Karina";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//Conditionals
if(hacker1.length>hacker2.length){
console.log(` Driver name is longer, it has ${hacker1.length} characters` );
}

else if(hacker2.length>hacker1.length){
    console.log(` Navigator name is longer, it has ${hacker2.length} characters` );
    }
    
else{
    console.log (`They both got equally long names, they have ${hacker2.length} characters` );
}

//Loops
function allCaps(hacker,Secondhacker){

 let hackerSave=hacker1.toLowerCase();
 console.log(" this is hacker 1 "+ hackerSave);
        
let separateLetters=hacker.split('').join(' ');
console.log( separateLetters.toUpperCase() );
let separateTwo=hacker.split('');
console.log( separateTwo.reverse().join(' '));

let checkAlphabet=hackerSave.localeCompare(Secondhacker);
console.log(`This checks the alphabet ${checkAlphabet}`)

console.log(checkAlphabet);

if(hacker1<hacker2){
    console.log("The driver's name goes first");

}

else if(hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely");
}

else if(hacker2===hacker1){
    console.log("What?! You both got the same name?");
}

}

allCaps(hacker1,hacker2);

// Lorem ipsum generator
