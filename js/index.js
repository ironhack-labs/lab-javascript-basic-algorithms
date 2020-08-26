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


//This function come from: https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77
// the purpose is to transform any special char to something normal
function slugify (str) {
  var map = {
      '-' : ' ',
      '-' : '_',
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };
  
  for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};

var driver = slugify(hacker1);
var navigator = slugify(hacker2);

if (driver.toUpperCase() < navigator.toUpperCase()){
  console.log("The driver's name goes first.");
} else if(driver.toUpperCase() > navigator.toUpperCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

