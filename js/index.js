console.log("I'm ready!");
let hacker1 = "Marcela"
console.log(`the drivers name is ${hacker1}`);
let hacker2 = "Vinicius"
console.log(`the navigators name is ${hacker2}`);



let characters = hacker1.length 
let characters2 = hacker2.length

if(characters > characters2) {
  console.log(`The driver has the longest name, it has ${characters} characters `);
} else if(characters < characters2) {
  console.log(`It seems that the navigator has the longest name, it has
  ${characters2} characters.`);
} else { 
  console.log(`Wow, you both have equally long names, ${characters}
  
${characters2} characters!`);

} ;

let upperCase = hacker1.split("").join(" ").toUpperCase();

console.log(upperCase);

function reverse(hacker2){
  let reversed = "";    
  for (var i = hacker2.length - 1; i >= 0; i--){        
    reversed += hacker2[i];
  }    
  return reversed;
};

reverse(hacker2);


if(hacker1.localeCompare(hacker2) < 1) {
  console.log("the driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) > 1) {
console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
};

