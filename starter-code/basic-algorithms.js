// Names and Input
var hacker1 = "ruben";
console.log("The driver's name is " + hacker1);

var hacker2 = "pablo";
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has 5 characters")
} else if (hacker1.length < hacker2.length) {
    console.log("The navigator has the longest name, it has 4 characters")
} else {
    console.log("Wow, you both got equally long names, 5 characters!!")
}

var driverNameSpaced = "";

for (var i = 0; i < hacker1.length; i++) {
     hacker1 = hacker1.toUpperCase();
     driverNameSpaced += hacker1[i];
     driverNameSpaced += " ";
}

console.log("Driver name: " + driverNameSpaced);

var navigatorNameReverse = "";

for (var i = 0; i < hacker2.length; i++) {
     var navigatorNameReverse = hacker2.split('').reverse().join('');
}
console.log(navigatorNameReverse);

// Lorem ipsum generator




