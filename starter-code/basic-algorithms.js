let hacker1 = "Grégoire";
console.log("The driver's name is " + hacker1);

let hacker2 = "Clara";
console.log("The navigator's name is " + hacker2);

if (hacker2.length > hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has" +
      hacker1.length +
      " characters"
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters "
  );
} else if (hacker2.length === hacker1.length) {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters!! "
  );
}

var hacker1Maj = hacker1.toUpperCase();
var arrayofletter = [];
for (var i = 0; i < hacker1Maj.length; i++) {
  //console.log(hacker1Maj[i])
  arrayofletter.push(hacker1Maj[i]);
}
console.log(arrayofletter.join(" "));

var reversed = arrayofletter.reverse();
console.log(reversed);
console.log(reversed.join(" "));

var alpha = arrayofletter.sort();
console.log(alpha);
console.log(alpha.join(" "));

a = "Grégoire".localeCompare("Clara");
document.write(a + "<br>");

if (a > 0) {
  console.log("The driver's name goes first");
} else if (a < 0) {
  console.log("Yo, the navigator goes first definitely");
} else if ((a = 0)) {
  console.log("What?! You both got the same name?");
}
