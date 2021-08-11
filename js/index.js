// Iteration 1: Names and Input
let hacker1 = "XXXX";
console.log(hacker1);
let hacker2 = "YYYY";
console.log(hacker2);


// Iteration 2: Conditionals
function hacker(){

    // The driver has the longest name, it has XX characters.
    if(hacker1.length > hacker2.length) {
      return "driver";

    // "It seems that the navigator has the longest name, it has XX characters."
    }else if(hacker1.length < hacker2.length){
      return "It seems that the navigator has the longest name, it has XX characters.";
      
    // "Wow, you both have equally long names, XX characters!"
    }else {
      return "Wow, you both have equally long names, XX characters!";
      
     }
    }
    console.log(hacker());


// Iteration 3: Loops
function hacker() {
    let output = ""; 
    for (i=0; i <hacker1.length; i++) {
       output += hacker1[i].toUpperCase() + " "; 
      }
      return output;
    }
    hacker();


    function reverse() {

    let reverseNavigator= "";

    for (let i = hacker2.length -1; i >= 0; i--) {
        reverseNavigator += hacker2[i];
     }
     return reverseNavigator
    }
    reverse()
    
    let hacker1 = "Todd";
    console.log(`The driver's name is ${hacker1}`);
    let hacker2 = "Michael";
    console.log(`The navigator's name is ${hacker2}`);

    fuction lexi(hacker1, hacker2) {
        // let result = ''
        // const length1 = hacker1.length -1;
        // const length2 = hacker2.length -1;
        if(hacker1.localeCompare(hacker2)===-1) {
            return `The driver's name goes first.`
        } else if (hacker2.localeCompare(hacker1)===1) {
            return `Yo the navigator's name goes first definitely.`
        } else {
            return `What?! You both have the same name?`
        }
    }

    console.log(lexi("Valerie", "Julian"))
    console.log(lexi("Julian", "Valerie"))
    

