// Iteration 1: Names and Input
const hacker1 ="Simona";

console.log("The driver's name is " + hacker1);

const hacker2= "Busra";

console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){

    console.log("The driver has the longest name, it has"+" "+hacker1.length +" "+"characters")
   
   
 }
 
 else if (hacker1.legth< hacker2.length){
   console.log("The navigator has the longest name, it has"+ " "+hacker2.length +" "+"characters")
 }
 
 else {
   console.log("Wow, you both have equally long names"+ hacker2.length +" "+"characters!.")
   }

// Iteration 3: Loops
/*Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/
let hacker1Capitalized= hacker1.toUpperCase();


let hacker1Separated="";

for( let i=0; i< hacker1.length;i++) {
 
hacker1Separated+= hacker1Capitalized[i]+ " ";
}

console.log(hacker1Separated);


/*3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".*/
let hacker2Reversed = "";
for( let i=hacker2.length-1; i>=0;i--) {
  hacker2Reversed += hacker2[i];
}
console.log (hacker2Reversed);




/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/



if(hacker1.localeCompare(hacker2)===-1){
  console.log("the driver's name goes first");
}
else if(hacker1.localeCompare(hacker2)===1){
  console.log("yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}
