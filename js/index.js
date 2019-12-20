// Iteration 1: Names and Input
let hacker1 = "Gerard";
let hacker2 = "Clara";
console.log("The driver's name is "+hacker1);
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals
const length1 = hacker1.length;
const length2 = hacker2.length;
if (length1 > length2){
  console.log('The driver has the longest name, it has '+ length1 + ' characters.');
}else if (length1 === length2){
  console.log('Wow, you both have equally long names, '+length1+' characters!');
}else {
  console.log('It seems that the navigator has the longest name, it has '+length2+' characters')
}

// Iteration 3: Loops

let hacker1Split = '';
for(i = 0; i < hacker1.length; i++){
hacker1Split += hacker1[i].toUpperCase()+ ' ';
}
console.log(hacker1Split);

let reverseHacker2 = "";    
for (var i = hacker2.length - 1; i >= 0; i--){        
   reverseHacker2 += hacker2[i];
    }  
console.log(reverseHacker2);  



if (hacker1 > hacker2){
  console.log('The driver´s name goes first')
}else if(hacker1 < hacker2){
  console.log('The navigator goes first definitely')
}else{
  console.log('What?! You both got the same name?')
}