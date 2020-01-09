// ITERATION 1

var hacker1 = "Alix";
console.log(`The driver's name is ${hacker1}.`);
var hacker2 = "PaulC";
console.log(`The navigator's name is ${hacker2}.`);

// ITERATION 2

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// ITERATION 3

var newHacker1 = "";
for (let i=0; i<hacker1.length; i++) {
   newHacker1 += hacker1[i].toUpperCase() + " ";
};
console.log(newHacker1);
var newHacker2 = "";
for (let i=hacker2.length-1; i>-1; i--) {
  newHacker2 += hacker2[i];
};
console.log(newHacker2);

//ITERATION 4 (1/2)

hacker1 = "Jean";
hacker2 = "Jeannine";

for(let i=0; i<Math.min(hacker1.length, hacker2.length) ; i++) {
  hacker1.toLowerCase();
  hacker2.toLowerCase();
 if (hacker1[i] < hacker2[i]) {
   console.log("The driver's name goes first.");
   break;
 } else if (hacker1[i] > hacker2[i]) {
   console.log("Yo, the navigator goes first definitely.");
   break;
 } else if (hacker1[i] === hacker2[i]) {
   if (i === Math.min(hacker1.length, hacker2.length)-1) {
    if (hacker1.length < hacker2.length) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker2.length < hacker1.length){
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else if (hacker2.length === hacker1.length) {
      console.log("What?! You both have the same name?");
      break;
    };
   }; 
  };
};

// ITERATION 4 (2/2)

hacker1.toLowerCase();
hacker2.toLowerCase();

let i = 0;

while (i<Math.min(hacker1.length,hacker2.length)) {
 if (hacker1 === hacker2) {
   console.log("What?! You both have the same name?");
   break;
 } else if (hacker1[i] < hacker2[i]) {
   console.log("The driver's name goes first.");
   break;
 } else if (hacker1[i] > hacker2[i]) {
   console.log("Yo, the navigator goes first definitely.");
   break;
 } else {
   i++;
  }
}

if (hacker1.length < hacker2.length) {
  console.log("the driver's name comes first");
} else {
  console.log("the navigator's name comes first");
}













Envoyer un message à Paul Carillion


À propos de cette conversation


