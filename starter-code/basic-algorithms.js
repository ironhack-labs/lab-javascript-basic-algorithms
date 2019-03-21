// Names and Input
var hecker1 = "XXXX"
// Print "The driver's name is XXXX"
console.log (hecker1)


let hecker2 = prompt("What's navigator's name?");
// Print "What's navigator's name?"
console.log ("The navigator's name is "+ hecker2)


//Conditionals

if (hecker1.length > hecker2.length) {
    console.log ( "The Driver has the longest name, it has " + hecker1.length +" characters")
}
else if (hecker1.length < hecker2.length) {
    console.log ( "Yo, navigator got the longest name, it has " + hecker2.length +" characters")
}
else {
    console.log ( "wow, you both got equally long names, " + hecker1.length +" characters")
}

//loops

var DriversNames = '';
for  (i=0; i<hecker1.length; i++) {
    DriversNames += hecker1[i].toUpperCase
}
console.log(DriversNames)

var DriversNames2 = '';
for (i=0; i<DriversNames.length; i--) {
DriversNames2 += hecker1[i]
}

if (hecker1.charAt(0) > hecker2.charAt(0)) {
    console.log("The driver's name goes first")
} else if (hecker1.charAt(0) < hecker2.charAt(0)) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both got the same name?")
}


// Lorem ipsum generator
