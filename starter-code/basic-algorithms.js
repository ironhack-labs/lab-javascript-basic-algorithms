var hacker1 = "Aurelie";
var hacker2 = prompt("What is your name ? ");

console.log("The driver's name is " + hacker1);
console.log("The navigator name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(" The driver has the longest name,it has" + hacker1.length + " " + "characters");
} else if ( hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " " + "charaters")
} else if (hacker1.length == hacker2.length) {
    console.log("Wow, you both equally long names," + hacker1.length + "" + "characters")
}

var hackerUpperCase = hacker1.toUpperCase();

console.log(hackerUpperCase);


var hacker = "";

 for (var i = 0; i<hackerUpperCase.length; i++) {
  console.log(hackerUpperCase[i])
    hacker +=  hackerUpperCase[i] + " ";
    console.log(hacker);

 }
console.log(hacker);

//reverse 

var reverse = hacker1.split('').reverse().join('');

console.log(reverse);




// console.log(hacker1.localeCompare(hacker2));

console.log( hacker1.localeCompare(hacker2));


if (hacker1.localeCompare(hacker2)== -1) {
  console.log("The driver's name goes First");

} else if (hacker1.localeCompare(hacker2) == 1 ) {
    console.log("Yo, the navigator goes first definitly")

} else if (hacker1.localeCompare(hacker2)== 0) {
    console.log("What ?! You both got the same name!")
}




// Names and Input


//Conditionals


// Lorem ipsum generator
