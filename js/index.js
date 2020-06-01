// Iteration 1: Names and Input

const hacker1 = "Ivan Mickovski";
console.log(`The driver name is: ${hacker1}`);
const hacker2 = "Eduarda Liu";
console.log(`The navigator name is: ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
  };
  

// Iteration 3: Loops

let answer = [];
for (let i = 0; i < hacker1.length; i++){
  answer.push(hacker1[i].toUpperCase())
}
console.log(answer.join(" "))
 
let 
for (let i = hacker2.length - 1; i >= 0; i--){
  console.log(hacker2[i])

};


let i = 0;
if(hacker1[i] < hacker2[i]){
      console.log(`The driver's name goes first. ${hacker1}`)
    } else if (hacker1[i] > hacker2[i]){
      console.log(`Yo, the navigator goes first definitely. ${hacker2}`)
    } else {
      console.log(`What?! You both have the same name?`)
    };



    // by Ivan and Eduarda 