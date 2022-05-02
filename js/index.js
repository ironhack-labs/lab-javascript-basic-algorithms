
//ES6 (use JSHint esversion:6)

// Iteration 1: Names and Input
///////////////////// 1.0///////////////////
let hacker1 = " Johnson";

 console.log(`The driver's name is ${hacker1}`);
let hacker2 = "ABEL";
console.log(`The navigator's name is ${hacker2}`);



/////  Iteration 2: Conditionals

    let driverLongestName = hacker1.length;
  
    let navigatorLongestName = hacker2.length;
  

    if(driverLongestName > navigatorLongestName){
      console.log(`The driver has the longest name, it has ${driverLongestName} characters`)
    } 
     if (driverLongestName < navigatorLongestName){
       console.log(`It seems that the navigator has the longest name, it has ${navigatorLongestName} characters`);
     }
  
     
    else{

       console.log(`'Wow, you both have equally long names', ${navigatorLongestName} characters`);
     }



    // ///////// 3.1
    console.log(hacker1.toUpperCase().split('').join(' '));

//////////////3.2////////////

    function reverseString() {
      let result = '';
    
      for (let i = navigatorLongestName - 1; i >= 0; i--) {
        result += hacker2[i];
      }
    
      console.log(result);
    }
reverseString();

function twoName() {


if (hacker1 < hacker2) {
  console.log(hacker1);
} if (hacker2 < hacker1){
 console.log( `Yo, the ${hacker2} goes first definitely.`);

  

} else {
 console.log(`What?! You both have the same name?`)
}
}
twoName();



  
    //  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    //    - `The driver's name goes first.` <br>
    //    - `Yo, the navigator goes first definitely.` <br>
    //    - `What?! You both have the same name?`

 
    







///////////////Bonus//////////

let phraseToCheck = [ "A man, a plan, a canal, Panama!",
    "Amor, Roma","race car", "stack cats", "step on no pets","taco cat","put it up", "Was it a car or a cat I saw?", "And","No 'x' in Nixon"]
    
let Palindrome  = [].concat(phraseToCheck).reverse();
console.log(Palindrome);

