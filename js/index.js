// Iteration 1: 

const hacker1= "Daniel";
console.log(`The driver's name is ${hacker1}`);

const hacker2= "Serhii";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2:
if (hacker1.length === hacker2.length) {
 console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`) }

 // Iteration 3:
 const driver= "Daniel"
const result = driver.split('').join(' '); 
 console.log(result.toUpperCase());

 function navigator(str) {
    let reverseNavigator = '';
    for (let i= str.length -1; i >=0; i--) {
      reverseNavigator += str[i];
    }
    return reverseNavigator;
  }
  
  console.log(navigator ('Serhii'));

  const user1 = 'Daniel';
  const user2 = 'Serhii';
  const results = user1.localeCompare(user2);
  
  if (results === -1){
    console.log ("The driver's name goes first");
  }else if (results === 0){
    console.log ("What?! You both have the same name?")
  }
  else{
    console.log ("Yo, the navigator goes first definitely.")
  }
