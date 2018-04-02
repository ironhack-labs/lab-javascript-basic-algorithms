var hacker1 = "Crystal";

var hacker2 = "Jens";

console.log(hacker2);

if (hacker1.length > hacker2.length) {
  console.log("Driver has longer name, it has 7 characters");
}

var result = "";

for (var i = 0; i < hacker1.length; i += 1) {
  result += hacker1[i] + " ";
  result = result.toUpperCase();
}

console.log(result);

var result2 = ""; 

for (var i = 0; i < hacker2.length; i++) {
  // result2 += hacker2[i];
  result2 = hacker2.split("").reverse(" ").join("");
}

console.log(result2);