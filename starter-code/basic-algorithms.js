// Names and Input
var hacker1 = "Michael";
console.log("The driver's name is: " + hacker1);

var hacker2 = prompt("Enter the name of navigator: ");
console.log("The navigator name's is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!")
}
else {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}

var nameUpper = "";
for (i = 0; i < hacker1.length; i++) {
    nameUpper = nameUpper + hacker1[i].toUpperCase() + " ";
}
console.log(nameUpper);

var reverseName = ""
for (i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

// Lexicographic order
var order = hacker1.localeCompare(hacker2);

if (order < 0) {
    console.log("The driver's name goes first");
}
else if (order > 0) {
    console.log("Yo, the navigator goes first definitely")
}
else if (order === 0) {
    console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
var string = "Lorem fistrum condemor por la gloria de mi madre tiene musho peligro apetecan. Diodenoo a wan te voy a borrar el cerito pupita ese que llega diodeno te va a hasé pupitaa pecador. Al ataquerl qué dise usteer diodeno se calle ustée. Me cago en tus muelas condemor ese que llega tiene musho peligro papaar papaar jarl te voy a borrar el cerito por la gloria de mi madre quietooor por la gloria de mi madre pupita. La caidita torpedo caballo blanco caballo negroorl torpedo.";
var count = 0;

for (i = 0; i < string.length; i++) {
    if (string[i] == " ") {
        count ++;
    }
}
count ++;
console.log("The number of words is: " + count);

//
var string = "Lorem fistrum veniam commodo aute benemeritaar exercitation ese que llega reprehenderit consectetur qué dise usteer. A peich está la cosa muy malar sed condemor me cago en tus muelas. Enim esse exercitation ullamco torpedo condemor qui nostrud ahorarr quietooor veniam. No puedor quis mamaar diodenoo irure minim. Pupita veniam dolor fistro qui. Benemeritaar reprehenderit a peich enim diodeno. Fistro a wan reprehenderit diodeno está la cosa muy malar et quietooor mamaar me cago en tus muelas. Nostrud dolore por la gloria de mi madre enim quietooor. Officia llevame al sircoo ese que llega la caidita incididunt et te voy a borrar el cerito por la gloria de mi madre de la pradera."

var position = 0;
var count = 0;
while (string.indexOf(" et ", position) != -1) {
    count++;
    position = (string.indexOf(" et ", position)) + 1;
}
//var a = string.indexOf(" et ", 453);
console.log("Number of et: " + count)
