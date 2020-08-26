// Iteration 1: Names and Input

var hacker1 = "Nicolas";
console.log(`1 : The driver's name is ${hacker1}`);

var hacker2 = "Fabien";
console.log(`2 : The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `3 : The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `3 : It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `3 : Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops{}

var newDriversName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}

console.log(`4 : ${newDriversName}`);

var newNavigatorsName = "";

function reverseString(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    newNavigatorsName += str[i];
  }

  return newNavigatorsName;
}

newNavigatorsName = reverseString(hacker2);

console.log(`5 : ${newNavigatorsName}`);


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
  console.log("6 : The driver's name goes first.");
} else if(driver.toUpperCase() > navigator.toUpperCase()) {
  console.log("6 : Yo, the navigator goes first definitely.");
} else {
  console.log("6 : What?! You both have the same name?");
}

// Bonus 1

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tempor orci et euismod. Nulla pharetra id tellus sodales placerat. Phasellus tristique, nulla quis dapibus vestibulum, orci nisl venenatis ligula, eu vestibulum nisi felis vitae ipsum. Ut nec libero imperdiet, tristique ligula et, gravida lectus. Suspendisse ullamcorper purus quis justo consequat iaculis. Duis ante sapien, vestibulum non laoreet in, iaculis sit amet erat. Aenean pharetra quis augue in mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus at lobortis turpis. Fusce vel felis eu metus interdum ullamcorper. Maecenas aliquam convallis congue. Nunc ut interdum eros. Nunc in convallis tellus, et convallis felis. Nulla eleifend non sapien vel viverra. Etiam tempor mattis nulla nec euismod. Nunc augue ligula, pulvinar ac vehicula id, lacinia sit amet justo. Curabitur metus turpis, luctus non eros quis, feugiat congue nisl. Nulla a mattis lorem, fermentum venenatis tellus. Nullam at consectetur quam. Donec vulputate, lectus a elementum luctus, dui turpis tristique augue, vitae ullamcorper metus neque sollicitudin massa. Quisque ullamcorper pulvinar metus sit amet posuere. Duis ultricies lobortis nibh a semper. Proin pellentesque felis libero, quis blandit nisl molestie ac. Phasellus dapibus, turpis a rutrum tempor, erat tortor vulputate risus, vel maximus arcu lorem scelerisque lorem. Nunc varius urna et lacus suscipit mattis. Donec condimentum egestas condimentum. Praesent id consequat mi. Pellentesque in dignissim metus. Morbi at magna quam. Curabitur rhoncus tempor tortor eget commodo. Nunc in congue tellus. Nam tincidunt erat sit amet tortor accumsan, sit amet pretium sapien mollis. In vulputate ipsum nibh, a ullamcorper dui auctor quis. Sed tincidunt vulputate neque, ac auctor libero interdum id. Nullam vel mauris hendrerit elit rutrum gravida ut vel ipsum. Donec in fermentum augue. Sed vitae massa congue, eleifend nisi et, malesuada metus. Phasellus porta diam sit amet lobortis sollicitudin. Sed luctus leo et libero interdum, eu laoreet orci condimentum."

function wordCount(str) { 
    return str.trim().split(" ").length;
  }

console.log(`7 : ${wordCount(loremIpsum)} words`)

var countEt = (loremIpsum.match(/et/gi) || []).length;

console.log(`8 : ${countEt} times the word "et"`)