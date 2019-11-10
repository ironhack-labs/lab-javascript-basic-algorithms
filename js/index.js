// Iteration 1: Names and Input
    //1.1 to 1.4. create variables with programmer's names and show them on console:

var hacker1 = "Dani";
var hacker2 = "Berto";
console.log("The driver's name is",hacker1);
console.log("The navigator's name is",hacker2);

// Iteration 2: Conditionals
    //2.1. Depending on which name is longer, print: 

var a = hacker1.length;
var b = hacker2.length;

/*console.log(a);
console.log(b);*/

if(a>b){
    console.log("The driver has the longest name, it has",a,"characters.");
}else if(a<b){
    console.log("It seems that the navigator has the longest name, it has",b,"characters.");
}else{
    console.log("Wow, you both have equally long names,",b,"characters!");
}

// Iteration 3: Loops
    //3.1 Print all the characters of the driver's name, separated by a space and in capitals

function getDriversNameSpacedCaps(driversName){

    let hacker1_remastered;

    for(let i = 0; i < a; i++){
        if(i === (a-1)){
            hacker1_remastered += hacker1.charAt(i).toUpperCase();
        }else{
            hacker1_remastered += hacker1.charAt(i).toUpperCase() + " "; 
        }
    }

    return hacker1_remastered;

}

//getDriversNameSpacedCaps(hacker1);
console.log(getDriversNameSpacedCaps(hacker1));

    //3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function getNavigatorsNameBackwards(navigatorsName){

    let hacker2_remastered;

    for(let i = b; i >= 0; i--){
        hacker2_remastered += hacker2.charAt(i);
    }

    return hacker2_remastered;
}

console.log(getNavigatorsNameBackwards(hacker2));

    //3.3 Depending on the lexicographic order of the strings, print the appropriate

function compareLexicograficOrder(driversName, navigatorsName){
    
    let comparision = driversName.localeCompare(navigatorsName);

    let value = "";

    if(comparision < 0){
        value = "The driver's name goes first.";
    }else if(comparision > 0){
        value = "Yo, the navigator goes first definitely.";
    }else{
        value = "What?! You both have the same name?";
    }

    return value;

}

console.log(compareLexicograficOrder(hacker1,hacker2));