// Iteration 1: Names and Input
const hacker1 = "tomas";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "joana";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driver = "Karla";
const navigator = "Philipp";


if(driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters`);
} else if (driver.length < navigator.length) {
  console.log(`The navigator has the longest name, it has ${navigator.length} characters`);
} else {
  console.log(`The both are equally long names, ${driver.length} characters`);
}

//Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverToCapital = "";
for(char of driver) {
  driverToCapital += `${char.toUpperCase()} `;
}
console.log(driverToCapital);
//K A R L A 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function getToReverse(name) {
  let reverse = "";
  let lastChar = name.length -1;
  for (let i = lastChar; i >= 0 ; i--) {
    reverse += `${name[i]}`;
  }
  console.log(reverse);
}
getToReverse(navigator);
//ppilihP

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Times to iterate, based on the smaller number of characters
function lexicographicOrder(driver, navigator) {
  const iterations = Math.min(driver.length, navigator.length);
  let driverCounter = 0;
  let navCounter = 0;

  for (let i = 0; i < iterations; i++) {
    if (driver[i].localeCompare(navigator[i]) < 0) {
      driverCounter +=1;
      if(driverCounter > navCounter) {
        console.log(`${driver}, the driver goes first`);
        break; 
      }       
    } else if (driver[i].localeCompare(navigator[i]) > 0 ) {
      navCounter +=1;
      if(navCounter > driverCounter) {
        console.log(`${navigator}, the navigator goes first definitely.`);
        break;
      }
    } else {
      driverCounter +=1;
      navCounter +=1;
      if(i === iterations-1){
        if (driver.length < navigator.length) {
          console.log(`${driver}, the driver goes first`);
        } else if(navigator.length > driver.length) {
          console.log(`${navigator}, the navigator goes first definitely.`);
        } else {
          console.log(`What?! You both have the same name?`);
        }
        break;
      }
    }
  }
}
lexicographicOrder(driver, navigator);
// Karla, the driver goes first