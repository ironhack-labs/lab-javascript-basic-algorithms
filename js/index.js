// Iteration 1: Names and Input

var hacker1 = "Nicolas";
console.log(`1.2 : The driver's name is ${hacker1}`);

var hacker2 = "Fabien";
console.log(`1.4 : The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `2.1 : The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `2.1 : It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `2.1 : Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops{}

var newDriversName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}

console.log(`3.1 : ${newDriversName}`);

var newNavigatorsName = "";

function reverseString(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    newNavigatorsName += str[i];
  }

  return newNavigatorsName;
}

newNavigatorsName = reverseString(hacker2);

console.log(`3.2 : ${newNavigatorsName}`);

// ------
// "traitement" pour récuper le plus court et le stocker 
/*
function compareName(driver, navigator) {
  let indice = 0;
  console.log("Print du localeCompare: "  + driver.localeCompare(navigator));
  if( driver.localeCompare(navigator) < 0 ) {
    console.log("The driver's name goes first.");
    indice = 1;
    return indice;
  } else if(driver.localeCompare(navigator) > 0 ){
    console.log("Yo, the navigator goes first definitely.");
    indice = 1;
    return indice;
  } else if(driver.localeCompare(navigator) == 0   ){
    console.log("What?! You both have the same name?");
  }
};

var shortestString = 0;

if(hacker1.length <  hacker2.length){
  shortestString = hacker2.length ;
} else if(hacker1.length > hacker2.length) {
  shortestString = hacker1.length ;
} else {
  shortestString = hacker1.length;
}

for (let i = 0; i < shortestString; i++) {
  console.log("permier hacker " + hacker1[i] + " deuxieme " + hacker2[i]);
  if( compareName(hacker1[i], hacker2[i]) == 1) {
    break;
  } else {
    // 
    if( driver.localeCompare(navigator) < 0 ) {
      console.log("The driver's name goes first.");
      
    } else {
      console.log("Yo, the navigator goes first definitely.");
    
    }
  } 
   
}


//hacker1[i].localeCompare(hacker2[i]);
*/


if (hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

