console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Yash";
console.log(`The driver's name is : ${hacker1}`);

let hacker2 = 'Tapan';
console.log(`The Navigator's name is : ${hacker2}`);


// Iteration 2: Conditionals

    if( hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!.`);
    }

// Iteration 3: Loops

/*
let driver = 'Yash';
let navigator = 'Tapan';

let result = '';
for(let i = 0; i < driver.length; i++) {
  driver[i];
  result += driver[i].toUpperCase() + ' ';
  console.log(result);
  }

let reversedName = '';  
for(i = navigator.length - 1; i >= 0; i--) {
  navigator[i];
  reversedName += navigator[i];
  console.log(reversedName);
}
*/

let capsSpace = hacker1.toUpperCase().split("").join(" ");
console.log(`The Driver's Name separated by space and in capitals is : ${capsSpace}`);

let reversed = hacker2.split("").reverse().join("");
console.log(`Navigators's Name in reverse order is: ${reversed}`);


  if((hacker1.localeCompare(hacker2)) === -1) {
    console.log(`The driver's name ${hacker1} goes first.`);
} 
  else if ((hacker1.localeCompare(hacker2)) === 1) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`);
} 
  else {
     console.log("What?! You both have the same name?");
}



