// Iteration 1: Names and Input
const hacker1 = "Rumeli";
const hacker2 = "Thalita";
console.log(`The Driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
/*let driver = [];
for(let i = 0; i < hacker1.length; i++){
    driver.push(hacker1[i].toUpperCase());
}

let driverUpper = driver.toString();
console.log(driverUpper.replaceAll(',', ' '));*/
let characters = '';
let driverUpper ='';
for(let i = 0; i< hacker1.length; i++){
    characters = hacker1.charAt(i).toUpperCase();
    if(i < hacker1.length -1){
        driverUpper = driverUpper + characters + ' ';
    }
  else{
    driverUpper = driverUpper + characters;
  }
    
   
}
console.log(driverUpper);