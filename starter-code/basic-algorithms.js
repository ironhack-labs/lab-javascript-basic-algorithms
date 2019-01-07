// Names and Input

// 1
var hacker1 = "Poeli";

// 2
console.log("The driver's name is " + hacker1);

// 3
var hacker2 = prompt("What is the navigator's name?");

// 4
console.log("The navigator's name is " + hacker2);

//Conditionals

// 5
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");  
} else if (hacker1.length === hacker2.length) {
  console.log("Wow, you both got equally long names, " + hacker2.length + " characters!!");  
}

// Loops

// 6
var capName = "";
for (i = 0; i < hacker1.length; i++) {
  capName += hacker1[i] + " ";

}

console.log(capName.toUpperCase());

// 7

var navName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  navName += hacker2[i];

}

console.log(navName);


// #8 -- order names alphabetically

var compare = hacker1.localeCompare(hacker2);

if(compare == -1){
  console.log("The Driver's name goes first.");
} else if(compare == 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?");
}


/*
for(i=0 ; i < hacker1.length ; i++){

  if(hacker1[i] > hacker2[i]){
    console.log("The Driver's name goes first.");
  } else if(hacker1[i] < hacker2[i]){
    console.log("yo, the navigator goes first definitely.");
  } else if(hacker1.length == hacker2.length && hacker1[i] == hacker2[i]){
    console.log("What?! You both got the same name?");
  }



}
*/



// Lorem ipsum generator
