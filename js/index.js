// Iteration 1: Names and Input

let driver = "hacker1";
console.log (`"The driver´s name is ${drivers}"`);

let navigator = "hacker2";
console.log (`"The navigator´s name is ${navigator}"`);

// Iteration 2: Conditionals

let driver = "hacker1";

let navigator  = "hacker2";


let driverLength = driver.length;

let navigatorLength = navigator.length;


if (driverLength > navigatorLength) {
console.log (`The driver has the longest name, it has ${driverLength} characters`);

} else if (navigatorLength > driverLength) {
console.log (`It seems that the navigator has the longest name, it has ${navigatorLength} characters`);

} else {
console.log (`Wow, you both have equally long names, ${navigatorLength} characters!.`);
}



// Iteration 3: Loops

3.1
console.log(driver.toUpperCase().split('').join(' '))

3.2
console.log ( driver.split('').reverse().join('') );

3.3

if (driver > navigator) {
    console.log (`The driver's name goes first.`);
    
    } else if (navigator > driver) {
    console.log (`Yo, the navigator goes first definitely.`);
    
    } else {
    console.log (`What?! You both have the same name? `);
    }


// Bonus 1

//part1 (Bonus1)
let ipsum = "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Aenean a arcu in elit lacinia tincidunt dapibus in turpis.Curabitur pretium vel velit vitae sollicitudin. Sed ornare, ante ut ullamcorper bibendum, justo mi condimentum ex, ut faucibus neque neque ullamcorper ligula. Pellentesque interdum ullamcorper tristique. Sed dapibus nisi felis, eu sodales sapien facilisis non. Donec a nulla lacus.";


//part 2 (bonus 1)
function countWords (text) {

    let total = 0;
    
    for (let i=0;i<text.length;i++ ) {
     
     if (text[i] === " ") { 
          total += 1; 
    }

    }
    return total; 

    }
    
 countWords("Lorem ipsum dolor sit amet,consectetur adipiscing elit.Aenean a arcu in elit lacinia tincidunt dapibus in turpis.Curabitur pretium vel velit vitae sollicitudin. Sed ornare, ante ut ullamcorper bibendum, justo mi condimentum ex, ut faucibus neque neque ullamcorper ligula. Pellentesque interdum ullamcorper tristique. Sed dapibus nisi felis, eu sodales sapien facilisis non. Donec a nulla lacus.");


 // part 3 (bonus 1)

 function countEt (text) {

    let split = text.split (" ");
    let total = 0;
    
    
    for (let i=0;i<split.length;i++ ) {
     
     if (split[i] === 'et') { 
          total +=1; 
    }

    }

    return total; 

    }
    
 countEt("Lorem ipsum dolor sit amet,consectetur adipiscing elit.Aenean a arcu in elit lacinia tincidunt dapibus in turpis.Curabitur pretium vel velit vitae sollicitudin. Sed ornare, ante ut ullamcorper et bibendum, justo mi condimentum ex, ut faucibus neque neque ullamcorper ligula. Pellentesque et interdum ullamcorper tristique. Sed dapibus nisi felis, eu sodales sapien facilisis non. Donec a nulla lacus.");


 // Bonus 2 ==> I could find a solution uusing for loop and conditionals, but I can not think a way to use break and continue as we were supposed to do.

function palindrome(str) {

    let newStr = str.toLowerCase().replace(/[^a-z\d]/g, '');
    
     for(var i=0; i < (newStr.length)/2; i++){ 

        if(newStr[i] !== newStr[newStr.length-i-1]){ 
          return false;
        } 
    }
      return true;
    }
    
    
    palindrome("Was it a car or a cat I saw?");
    
    palindrome ("This is not a palindrome");
