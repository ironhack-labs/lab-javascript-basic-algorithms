/*Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.*/
let hacker1 = "Juergen";


//1.2 Print "The driver's name is XXXX".//

console.log(`The driver´s name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator's name.//

let hacker2 = "AlinaSergej";
/*Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.*/
let hacker1 = "Juergen";


//1.2 Print "The driver's name is XXXX".//

console.log(`The driver´s name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator's name.//

let hacker2 = "AlinaSergej";

//1.4 Print "The navigator's name is YYYY".//

console.log(`The navigator´s name is ${hacker2}`);

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!*/

if (hacker1.length >=hacker2.length){
  if (hacker1.length == hacker2.length){
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
  } else {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  } 
} else {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let uppercasedDriver=hacker1.toUpperCase();
/*let split="";
. Solution:
for (let i = 0; i<hacker1.length; i++){
   split += `${uppercasedDriver[i]}  `;
  
}
console.log(split);*/

let splittedName = uppercasedDriver.split("");
let nameFinal = splittedName.join(" ")
console.log(nameFinal)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"//


let reversedName = hacker2.split("").reverse().join("")
console.log(reversedName)

//3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?//

let abc = "abcdefghijklmnopqrstuvwxyz";
let firstLetterHacker1 = hacker1[0];
let firstLetterHacker2 = hacker2[0];
  if (abc.indexOf(firstLetterHacker1) < abc.indexOf(firstLetterHacker2)){
    if(abc.indexOf(firstLetterHacker1) == abc.indexOf(firstLetterHacker2)){
      console.log("Both have the same first letter");
    } else {
    console.log(`${hacker1} goes first`);
    }
  }
    else{
    console.log(`${hacker2} goes first`);
  }

/*Bonus Time!
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/
//1.4 Print "The navigator's name is YYYY".//

console.log(`The navigator´s name is ${hacker2}`);

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!*/

if (hacker1.length >=hacker2.length){
  if (hacker1.length == hacker2.length){
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
  } else {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  } 
} else {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"//

//3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?//

/*Bonus Time!
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/