hacker1 = 'Katy'
console.log("The driver's name is"+' '+hacker1)
hacker2= 'Noor'
console.log("The navigator's name is"+' '+hacker2)

 if (hacker1.length>hacker2.length){
console.log("The Driver has the longest name, it has"+hacker1.length+"characters");
} else if(hacker1.length<hacker2.length){
  console.log("Yo, navigator got the longest name, it has"+hacker2.length+"characters");
} else{
console.log("wow, you both got equally long names",hacker1.length,"characters");
}; 

function name(){
  var newName= ""
  for(i=0;i<hacker1.length;i++){
  newName+=hacker1[i]+" "
};
return newName;
};
console.log(name().toUpperCase());
console.log(hacker2.split("").reverse().join("").toUpperCase());
if (hacker1<hacker2){
  console.log("The driver's name goes first")
}
  else if (hacker2<hacker1){
  console.log("Yo, the navigator goes first definitely")
  }
  else {
    console.log("What?! You both got the same name?")
}
var sign= prompt("Please enter a string")

function checkPalindrome(){
  return sign === sign.split('').reverse('').join('')
}

  console.log(checkPalindrome())
