// Iteration 1: Names and Input
const hacker1 = "Tuna";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mattie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }

// Iteration 3: Loops


//3.1

let newHacker1 = "";

for ( i=0 ; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHacker1);


//3.2

let newHacker2 = "";

for (i = hacker2.length -1; i>= 0 ; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

//3.3

if (hacker1.localeCompare (hacker2)=== -1) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare (hacker2)=== 1) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  


  //Bonus 
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet feugiat diam, ut euismod orci. Pellentesque commodo facilisis ligula, id lobortis massa. Nullam odio urna, aliquet ac feugiat quis, sagittis vel massa. Duis pharetra luctus tristique. Cras dapibus lorem enim. Praesent eu vehicula purus. In quis enim gravida, iaculis lectus in, ultrices dui. 

Mauris sagittis sed nunc vitae malesuada. Nunc et risus et leo gravida rutrum at ac nisl. Proin sit amet tortor vel metus sodales sollicitudin. Aliquam pharetra pulvinar quam, at vestibulum nulla eleifend a. Etiam sodales finibus malesuada. Sed sed elit id odio dignissim maximus. Praesent fermentum dictum posuere. Curabitur ipsum neque, semper at laoreet eu, blandit quis orci. 

Ut volutpat vestibulum tincidunt. Proin elit purus, cursus nec auctor eget, aliquam ac sapien. Cras volutpat tortor sit amet mollis mollis. Maecenas facilisis mi mi, a interdum ligula aliquam in. Duis ac scelerisque ex. Mauris in libero quis quam hendrerit pretium. Aliquam in risus justo. Nunc in congue nisi`

function wordCount(str) { 
  return str.split(" ").length;
}

console.log(wordCount(longText));


let etCount = 0

  for (i = 0; i < longText.length; i++) {
    let fourChars = longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
    
    if (fourChars === " et ") {
      etCount += 1
    }
  }
             
console.log(etCount);