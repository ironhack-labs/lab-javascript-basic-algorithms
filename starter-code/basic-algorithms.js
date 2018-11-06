    // Names and Input

 // no 1 ,2,3 and 4 
 var hacker1 = "jude"
 console.log("The drivers name is " + hacker1)

 var hacker2 = "the navigators name is jude"
prompt("enter navigators name");



// no 5 Depending on which name is longer, print:
//Conditionals
var driver = "jude"
var navigato = "ironhack"
console.log(driver)
console.log(navigato)

if (driver.length > navigato.length) {
  console.log("the driver has the longest name")
} else if ( driver.length < navigato.length) {
  console.log("the navigator has the longest name")

} else {
  console.log("wow, you both got equally long names")

}



// no 6 , Print all the characters of the driver's name, separated by a space and in capitals 
// Lorem ipsum generator

var hacker1 ="john"
var y = hacker1.toUpperCase();

for( var i = 0;i <=y.length; i++) {
  console.log(y[i])
}



//7.  Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"


var hacker = "jude"

// hacker.split("").reverse().join()

hacker.split("").reverse().toString()




// 8 . Depending on the lexicographic order of the strings, print:

// please i will like to know why if i print witout the [i]
// alphabetica order 

var hacker1 = "jude"
var hacker2 = "davidson"
var namesArray = [hacker1,hacker2];
namesArray.sort();

//console.log(namesArray[0])

if (namesArray[0] === namesArray[1]){
  console.log ("you both have same name")
} else if ( namesArray[0] < namesArray[1]) {
  console.log("hacker2 goes first")
} else {
  console.log("hacker1 goes first")
}

var hacker1 = "davidsoncole"
var hacker2 = "davidsonbrown"

var namesArray = [hacker1,hacker2];


for( var i = 0; i < namesArray.length; i++) 

if (namesArray[1] == namesArray[0]) {
  console.log(" you both have same name")

} else if (namesArray[0] < namesArray[1]) {
  console.log("hacker1 goes first")

} else {
  console.log("hacker2 goes first")
}



// if there is an array of multiple variables what code automaticaly prints the name
// that comes first in alphabetical order

// 9. Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

var x = "racecar"

var y = "racecar"

var b = (x.split("").join())

var z = (y.split("").join())

 //var a = (y.split("").join())
  // console.log(z)
  // console.log(b)

if (z == b){
  console.log("this is a pal")
} else{
  ("no match")
}



// is using this method acceptable? because its got fewer lines of codes

 // 10. Go to lorem ipsum generator and:

var par = ("this is a good way to write")

var par2 = ("some people write long codes") 

var par3 = ("and others write short codes")


parArr = (par+ par2+par3)

parArr.length

console.log(parArr.length)

// this returns 83 and count the letters with spaces?? dont know why



