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

var hackerToUpper = hacker1.toUpperCase();
var hackerWithSpaces ='';
for(var i=0; i < hackerToUpper.length; i++){
  hackerWithSpaces += hackerToUpper[i];
  hackerWithSpaces += " ";
}
console.log(hackerWithSpaces);
    
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
for(var i = 0; i < hacker1.length; i++){
      if(hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first.");
        break;
      }
      else if(hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.");
        break;
      }
      else if(hacker1[i] == hacker2[i] && i < (hacker1.length-1))
        continue;
      if(i == (hacker1.length - 1))
        console.log("What?! You both got the same name?");
    }
    