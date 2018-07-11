// Names and Input
console.log("I'm Ready");
// var hacker1 = "Christine"
// console.log(
// "The driver's name is " +hacker1);
var hacker1 = prompt("What is the driver's name?");
console.log("The driver's name is " +hacker1)
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " +hacker2);
// var len1= hacker1.length;

if(hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' +  hacker1.length + ' characters' )
} else if (hacker1.length < hacker2.length){
  console.log('The Navigator has the longest name, it has ' +  hacker2.length + ' characters' )
}
 else if(hacker1.length === hacker2.length){
  console.log('wow you both have equally long names: '+ hacker1.length + ' characters!!')
};

//Iteration 6. print all the characters in the driver's name seperated by a space and in capitals, ie. J O H Navigator
//*good solution

var DRIVER = 
hacker1.toUpperCase();
DRIVER.split('').join(' '); 

//solution without spaces
// console.log(hacker1.toUpperCase())


////this solution prints them stacked 
// for (var i=0; i<hacker1.length; i++){

//   console.log(' '+hacker1.charAt(i).toUpperCase());
// }

//Iteration 7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var backwardsNav ="";
for (var i = hacker2.length-1; i>=0; i--){
backwardsNav+=hacker2[i]
}

//Iteration 8. 
// Depending on the lexicographic order of the strings, print:

// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?
//figure out length of the longest name
var lengthLongestName=""
if(hacker1.length >= hacker2.length){
  lengthLongestName=hacker1.length
} else if (hacker1.length < hacker2.length){
  lengthLongestName=hacker2.length
}
console.log('length longest name ' + lengthLongestName)

//loop and compare each names letters in order.
for (var i=0; i<lengthLongestName; i++){
  //wrote this to figure out that an index not in the string's length returns as undefined
// console.log(hacker1[i])
if (hacker1[i]<hacker2[i]){
  console.log('The driver\'s name goes first');
  break;
}
else if (hacker1[i]>hacker2[i]){
  console.log('The navigator\'s name goes first');
  break;
}
//if one name is longer than another and very similar
else if (hacker1[i]==undefined){
  console.log
  ('The driver\'s name goes first');
  break;
  }
else if (hacker2[i]==undefined){
  console.log
  ('Yo, the navigator goes first definitely');
  break;
  }
else if(hacker1==hacker2){
  console.log('What?! You both got the same name?')
  break;
}
}
