// ITERATION 1: Names and Input
// hacker1 name
var hacker1 = "Murkhunting";
console.log("The driver's name is", hacker1);

// hacker2 name
var hacker2 = "Bart";
console.log("The navigator's name is", hacker2);


// ITERATION 2: Conditionals
//wich name is longer
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has", hacker1.length, "characters.");
}else if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.");
}else if (hacker1.length === hacker2.length){
  console.log("Wow, you both have equally long names,", hacker1.length, "characters!");
}


// ITERATION 3: Loops
var lastindex1 = hacker1.length - 1;

//print the name capitals
for(i = 0; i <= lastindex1; i++){
  console.log(hacker1.toUpperCase()[i], " ");
} 

var lastindex2 = hacker2.length - 1

//print the name reverse
for(i = lastindex2; i >= 0; i--){
  console.log(hacker2[i]);
}


var provelexicography = "a" < "b";

console.log(provelexicography)

//lexicography order
for(i=0, z=0; i <= lastindex1 || z<= lastindex2; i++,z++){
    if (hacker1[i] == hacker2[z]){
      if (hacker1[i] == hacker1[lastindex1] && hacker2[z] == hacker2[lastindex2]){
         console.log("What?! You both have the same name?");
        } else {
        continue;
        }
    } else if (hacker1[i] < hacker2[z] || hacker1.length < hacker2.length){
       console.log("The driver's name goes first.")
       break;
    } else if (hacker1[i] > hacker2[z] || hacker2.length < hacker1.length){
       console.log("Yo, the navigator goes first definitely.")
       break;
    }
}