// Names and Input
let hacker1 = "Sam";
console.log("The driver's name is " + hacker1);

let hacker2 ="Ashley";
console.log("The navigators name is " + hacker2);

//Conditionals
function longestName(){
  if ( hacker1.length > hacker2.length ){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
   } else if ( hacker1.length < hacker2.length ) {
     console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters." );
   }
  else {
     console.log("Wow, you both got equally longs names, " + hacker1.length + " characters.");
   }
}
for (i=0; i<=hacker1.length; i++){
  console.log(hacker1[i].toUpperCase());
  console.log(" ");
}

for (i=hacker2.length; i>=0; i--){
  console.log(hacker2[i]);
}






// Lorem ipsum generator
