// Iteration 1: Names and Input 
// Since i missed this part of the class , im completing now alone.

const hacker1 = "Carlos"; 
const hacker2 = "Tchioleca";

console.log( "The driver's name is " + hacker1 + " " + hacker2);

// Iteration 2: Conditionals
 
function longerName(hacker1, hacker2){
    if (hacker1.length > hacker2.length){
        return "The driver has the longest name, it has " + hacker1.length + " characters.";
        //console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
    } else if (hacker1.length < hacker2.length){
        return "It seems that the navigator has the longest name, it has " + hacker2.length + " characters.";
    } else {
        return "Wow, you both have equally long names, " + hacker1.length + " characters!";
    }       
}
// replaced "conslole.log" with return to make the function work properly , it was working but in the console log there war an undefined messsage because of the console.log on each condition.
console.log(longerName(hacker1, hacker2));

// Iteration 3: Loops

function SeparateUppercase(hacker1){
    return hacker1.toUpperCase().split('').join(' ');       
}

console.log(SeparateUppercase(hacker1));
// Iteration 3.1: Loops

function ReverseName(hacker2){
    return hacker2.split('').reverse().join('');       
}
console.log(ReverseName(hacker2));
// Iteration 3.2: Loops     
function LexicographicOrder(hacker1, hacker2){
    if (hacker1 < hacker2){
        return "The driver's name goes first.";
    } else if (hacker1 > hacker2){
        return "Yo, the navigator goes first definitely.";
    } else {
        return "What?! You both have the same name?";
    }       

}
console.log(LexicographicOrder(hacker1, hacker2));

