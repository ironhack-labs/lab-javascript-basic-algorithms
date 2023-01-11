// Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = "driver";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "navigator";

console.log(`The navigator's name is ${hacker2}`);
            

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  };


  
// Iteration 3: Loops

            
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  };
  
  
  let driverSpacedCapitals = "";
  for(let i=0; i < hacker1.length; i++){
    driverSpacedCapitals += `${hacker1[i].toUpperCase()} `;
  }
  
    console.log(driverSpacedCapitals);
  
  
  let reverseNavigator = "";
  for(let i=hacker2.length-1; i >=0; i--){
    reverseNavigator += `${hacker2[i]}`;
  }
  
    console.log(reverseNavigator);
  
  
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  let numbers = [];
  for (let i=0; i < alphabet.length; i++){
    numbers.push([alphabet[i],i]);
  }
  
  let numberOfFirstLetterDriver = "";
  let numberOfFirstLetterNavigator = "";
  
  for (let i=0; i< alphabet.length; i++) {
    if ( hacker1[0] === numbers[i][0] ){
      numberOfFirstLetterDriver = numbers[i][1];
    }
  }
  
  
  for (let i=0; i< alphabet.length; i++) {
    if ( hacker2[0] === numbers[i][0] ){
      numberOfFirstLetterNavigator = numbers[i][1];
    }
  }
  
  //Check Numbers
  //console.log(numberOfFirstLetterDriver);
  //console.log(numberOfFirstLetterNavigator);
  
  if (numberOfFirstLetterDriver > numberOfFirstLetterNavigator){
    console.log("The driver's name goes first.");
  } else if (numberOfFirstLetterDriver < numberOfFirstLetterNavigator){
    console.log("Yo, the navigator goes first definitely.");
  } else { 
    console.log("What?! You both have the same name?");
  };
  