// Names and Input


//Conditionals


// Lorem ipsum generator


var hacker1 = 'Maggie';
console.log("The driver's name is " + hacker1); 
var hacker2 = 'Jeremie';
console.log("The navigator's name is " + hacker2);

length1 = hacker1.length;
length2 = hacker2.length;


if (length1 > length2) {
 console.log("The Driver has the longest name, it has " + length1 + "characters");
} else if (length1 < length2) {
 console.log("Yo, navigator got the longest name, it has " + length2+ "characters");
} else  { 
 console.log("wow, you both got equally long names" + length1 + "  characters!!");
}
var name = "";
for (var i = 0 ; i < length1 ; i++){
  console.log(hacker1[i].toUpperCase());
  name += hacker1[i].toUpperCase() + " ";
}
console.log(name);
var hacker2 = 'Jeremie';
length2 = hacker2.length;
var reversename = "";
for (var i = length2 - 1 ; i >= 0 ; i--){
  console.log(hacker2[i]);
  reversename += hacker2[i] ;
}
console.log(reversename);

if(hacker1[0] === hacker2[0] ){
  console.log("What?! You both got the same name?");
  
}
else {
    for(var i = 0 ; i < length1 ; i++){
      if (hacker1[i] > hacker2[i]){
    console.log("The driver's name goes first");
    break;
    }  
      else {
    console.log("Yo, the navigator goes first definitely");
}
  }
}
