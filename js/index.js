// Iteration 1: Names and Input
console.log(`I'm ready!`);

var hacker1 = 'Amanda';
console.log(`The driver's name is ${hacker1}`);

var hacker2 = 'Hugenkiss'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
      } else if (hacker1.length < hacker2.length){
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
      } else if (hacker1.length == hacker2.length){
      console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
      }
      

// Iteration 3: Loops

// 1

for (let i = 0; i < hacker1.length; i++) {
      console.log(hacker1[i].toUpperCase());
    }
    
// 2
    function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      console.log(newString);
  }
  reverseString(hacker2);
  
//   3
// empty array
let names = []; 

// pushes onto array
names.push(hacker1, hacker2);

// sorts in alphabetical order
names.sort()

// now not sure!
