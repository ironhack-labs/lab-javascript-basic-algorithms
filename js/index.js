// Iteration 1: Names and Input

let hacker1 = 'Alejandro'
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Vince"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let shortest;

if(hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
shortest = hacker1;

}else if(hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
shortest = hacker2;

} else {
console.log("Wow, you both have equally long names, XX characters!");
shortest = hacker1;
}


// Iteration 3: Loops

driverCapitols = "";

for(let i = 0; i < hacker1.length; i++){
    driverCapitols += hacker1[i].toUpperCase()
    driverCapitols += " "
}

driverCapitols = driverCapitols.slice(0,-1);

console.log(driverCapitols);




navigatorReverse = "";

for(let i = hacker2.length - 1; i >= 0; i--){
    navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);



// cycle through to see if individual characters coem first
let index = 0;

while(index < shortest.length){
    if(hacker1[index] < hacker2[index]){
        console.log("The driver's name goes first.");
        break;
    }else if(hacker1[index] > hacker2[index]){
        console.log("Yo, the navigator goes first definitely.") ;   
        break;
    }
    index++;
}

// otherwise, check for edgecases (same name, same first characters, uneven lengths, etc.)
if(index === shortest.length){

    if(hacker1 === hacker2){
        console.log("What?! You both have the same name?");
    }else{
        if(hacker1 === shortest){
            console.log("Yo, the navigator goes first definitely.") ; 
        }else if (hacker2 === shortest){
            console.log("The driver's name goes first.");
        }
    }

}