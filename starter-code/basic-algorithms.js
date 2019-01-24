// Names and Input


//Conditionals


// Lorem ipsum generator
var hacker1 = prompt("The driver's name is: ");
console.log("The driver's name is: " + hacker1);

var hacker2 = prompt("The navigator's name is: ");
console.log("The navigator's name is: " + hacker2);

var hk1 = hacker1.length;
var hk2 = hacker2.length;

console.log(hk1 + " " + hk2)

if( hk1 > hk2 ){
  console.log("The Driver has the longest name, it has " + hk1 + " characters");
}else if(hk1 < hk2){
  console.log("Yo, navigator got the longest name, it has " + hk2 + " characters");
}else{
  console.log("wow, you both got equally long names, " + hk1 + hk2  + "characters!!");
};


var caps1 = " "
for(var i = 0; i < hk1 ; i++){
  caps1 += hacker1[i].toUpperCase() + " "; 
}
console.log(caps1);

var reverse1 = " "
for(var i = hacker1.length -1; i >= 0 ; i--){
  reverse1 += hacker1[i].toUpperCase() + " ";
  
}
console.log(reverse1);

var caps2 = " "
for(var i = 0; i < hk2 ; i++){
  caps2 += hacker2[i].toUpperCase() + " "; 
}
console.log(caps2);

var reverse2 = " "
for(var i = hacker2.length -1; i >= 0 ; i--){
  reverse2 += hacker2[i].toUpperCase() + " ";
  
}
console.log(reverse2);

var alpha = "abcdefghijklmnopqrstuvwxyz";

if(hacker1.length > hacker2.length){
  var i = 0
  var driver = alpha.indexOf(hacker1[i]);
  var navigator = alpha.indexOf(hacker2[i]);
  
  while(driver > navigator){
  if( driver > navigator){
    console.log("The driver's name goes first");
    break;
  }else if(navigator > driver){
    console.log("Yo, the navigator goes first definitely");
    break;
  }else if(driver == navigator){
    console.log("What?! You both got the same name?");
    break;
  };
  i++
  };
};

if(hacker1.length < hacker2.length){
  var i = 0
  var driver = alpha.indexOf(hacker1[i].toLowerCase());
  var navigator = alpha.indexOf(hacker2[i].toLowerCase());
  
  while(driver > navigator){
  if( driver > navigator){
    console.log("The driver's name goes first");
  }else if(navigator > driver){
    console.log("Yo, the navigator goes first definitely");
  }else if(driver == navigator){
    console.log("What?! You both got the same name?");
  }
  i++
  }
};


var pali = prompt("palindrome name: ");
 
var lowerPali = pali.toLowerCase();
var sp = lowerPali.split(' ').join('');
var rev = lowerPali.split('').reverse().join('');

if(sp != rev){
  console.log("not a pali" + lowerPali);
}else{
  console.log("this is a palindrome")
};

