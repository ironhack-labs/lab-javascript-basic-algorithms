// Iteration 1: Names and Input

const hacker1 ="Kalina";
console.log("The driver's name is"+" "+ hacker1);

const hacker2 = "Mahmoud" //Egypt
console.log("The navigator's name is"+" "+ hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(hacker1)
  } else {console.log(hacker2)}

// Iteration 3: Loops


let capitalSring = '';

for (let i = 0; i < hacker1.length; i++) {
 capitalSring += hacker1[i].toUpperCase() +' ';
 } 
console.log(capitalSring);


let reverseName = '';

for (let i = hacker2.length -1 ; i >= 0; i--) {
  reverseName += hacker2[i];
}
  console.log(reverseName);


  if (hacker1 > hacker2) {
    console.log(`The ${hacker1} name goes first`)
    } else if (hacker2 > hacker1) {
    console.log(`Yo ${hacker2} goes first definitely first` )
    } else {
      console.log('What?! You both have the same name?')
    }