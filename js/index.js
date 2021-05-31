// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = 'Alexa'
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Alex'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}


// Iteration 3: Loops
let createdName = ''
for ( let i = 0; i < hacker1.length; i++ ) {
  createdName += `${hacker1[i].toUpperCase()} `
}
console.log(createdName)

let reversedName = ''
for ( let i = hacker2.length - 1; i >= 0; i-- ) {
  reversedName += hacker2[i]
}
console.log(reversedName)


//what happens when you compare Alexa to Alex? to what do we compare "a" then?
//we thought about possible scenarios beyond our names, eg. Alexa vs Alex, we want to create a statement to say 1) check whose name is shorter 2) we loop using the length of the shorter name, and compare the letters
let result = false;
if (hacker1 == hacker2){
  console.log("What?! You both have the same name?")
  result=true;}

else{
  let shorterName = '';
if (hacker1.length < hacker2.length) {
    shorterName = hacker1;
} 
 else {
    shorterName = hacker2;
}
  for ( let i = 0; i < shorterName.length; i++ ) {
    if (hacker1[i] < hacker2[i]) {
      console.log(`The driver's name goes first.`);
      result=true;
      break; 
  } else if (hacker1[i] > hacker2[i]) {
      console.log('Yo, the navigator goes first definitely.');
      result=true;
      break;
  } 
  }
  if (result==false){
if (hacker1.length < hacker2.length) {
    console.log(`The driver's name goes first.`);
} 
 else {
    console.log('Yo, the navigator goes first definitely.');
}

  }} 


//Other option//
//hacker1.localeCompare(hacker2);
//link:https://stackoverflow.com/questions/10198257/comparing-2-strings-alphabetically-for-sorting-purposes/10198321
