// Iteration 1: Names and Input
//```javascript
console.log("I'm ready!");

const hacker1 = "Ander";
console.log (`The driver´s name is ${hacker1}`);

const hacker2 = "Matt";
console.log (`The navigator´s name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1 === hacker2){
    console.log (`Wow, you both have equally long names, ${hacker1.length}characters!`)
}

 // Iteration 3: Loops

 //Print all the characters of the driver's name, separated by a space and in capitals
 let capitalResult = "";
 for (let i = 0; i < hacker1.length; i++){
 capitalResult += hacker1[i].toUpperCase() + " ";
 }
 console.log(capitalResult);

 //Print all the characters of the navigator's name, in reverse order
 let reverse ="";
 for (let i = hacker2nose.length -1 ; i>=0; i--){
    reverse += hacker2[i]
 }
 console.log (reverse)

 // Depending on the lexicographic order of the strings
    if (hacker1 > hacker2){
      console.log("The driver's name goes first.")
      
    } else if(hacker1 < hacker2){
      console.log("Yo, the navigator goes first definitely.")
      
    } else if (hacker1 === hacker2){
      console.log("What?! You have the same name!");  
    }
  
 //Bonus 1
 let string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae cursus metus, sed vehicula odio.`;
 // Make your program count the number of words in the string
 let wordCount = " ";
  // este no me sale, y no se por qué
 for (let i = 0; i<string.length; i++){
  if (i === " "){
    wordCount++;
  }
 }
 console.log(wordCount);

 //Bonus 2 
 let phraseToCheck = ""
 let x = ""
 for (let i =x.length -1; i >=0; i--) {
    phraseToCheck += x[i]
 } 
 if (x === phraseToCheck){
    console.log ("true") 
 } else {
    console.log ("false") 
 }