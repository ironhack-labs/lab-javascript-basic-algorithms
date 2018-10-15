// Names and Input
const hacker1 = "Antoine";
console.log(hacker1);
const hacker2 = prompt ("What's your navigator name?");
console.log(hacker2);

//Conditionals

function checkLength() {

if(hacker1.length > hacker2.length) {
  console.log (hacker1 + " has the longest name, it has "+ hacker1.length +  " characters")
}
else if
  (hacker1.length < hacker2.length) {
  console.log ("Yo " + hacker2 + " got the longest name, it has " + hacker2.length +  " characters")
}

else if
  (hacker1.length === hacker2.length) {
  console.log ("wow, you both got equally long names, " + hacker2.length + " characters!!")
};
};

console.log(checkLength());



// LOOPS
console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker2.split("").reverse().join(""));

function checkLexical() {
  for (j=0; j < hacker2.length; j++)
  {
    if (hacker1.charAt(j) < hacker2.charAt(j)){
      console.log (hacker1 + " name's goes first")
      return; 
    }

    else if (hacker1.charAt(j) > hacker2.charAt(j)){
      console.log ("Yo " + hacker2 + " goes first definitely")
      return;
  }
};
      console.log ("What?! You both got the same name?")
};
  
checkLexical();