var hacker1 = 'Fumnanya'
console.log("The driver's name is " + hacker1 )
var hacker2 = prompt("Your name?")
console.log("The navigator's name is " + hacker2)

if(hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + 'characters')
}

else if(hacker1.length > hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + 'characters')
}

else
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')

var hacker1Upper = hacker1.toUpperCase();
var hacker1Spaces ='';
for(var i=0; i < hacker1Upper.length; i++){
  hacker1Spaces += hacker1Upper[i];
  hacker1Spaces += " ";
}
console.log(hacker1Spaces);
var hacker2Reverse = '';

for(var i = hacker2.length - 1; i >= 0; i--){
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);


for(var i = 0; i < hacker1.length; i++){
  if(hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first.");
    break;
  }
  else if(hacker1[i] > hacker2[i]){
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
  else if(hacker1[i] == hacker2[i] && i < (hacker1.length-1))
    continue;
  if(i == (hacker1.length - 1))
    console.log("What?! You both got the same name?");
}

//names
//Fumnanya Agbimson Rachelle Dauphin

//Conditionals


// Lorem ipsum generator
