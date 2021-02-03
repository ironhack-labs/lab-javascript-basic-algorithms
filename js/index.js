// ITERATION 1

let hacker1 = "Paul";

let hacker2 = "Fatoumata";

// ITERATION 2

console.log("The driver's name is " + hacker1);

console.log("The navigator's name is " + hacker2);


 if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length > hacker2.length) { 
  console.log(`It seems that the driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length = hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// ITERATION 3.1

let allcaps1 = "";

for (let i=0 ; i < hacker1.length ; i++) {
   
   allcaps1 += hacker1[i] ;
}
//   allcaps = allcaps + hacker1[i] ;
console.log(allcaps1.toUpperCase());


// ITERATION 3.2

let verlan2 = "";
console.log(hacker2.length);

for (let i=hacker2.length-1 ; i >= 0 ; i--) {
  verlan2 += hacker2[i] ;
}

console.log(verlan2);

// ITERATION 3.3 (PAS FINI !!)

console.log(hacker1[0]);
console.log(hacker2[0]);

let is1longest;
let is2longest;
let equal;


if (hacker1.length > hacker2.length) {
console.log("Hacker 1 est le plus long");
 is1longest = true;
} else if (hacker1.length < hacker2.length) {
console.log("Hacker 2 est le plus long");
  is2longest = true;
} else if (hacker1.length = hacker2.length) {
console.log("longueur égale");
 equal = true;
}

let i = 0;

if is1longest = true {
  while (i < hacker1.length) {
    
  i++;
  }
}
  else console.log(`1 n'est pas le plus long`)




for (let i=0 ; i < hacker2.length ; i++) {
   
if (hacker1[i] < hacker2[i]) {
  console.log("The driver's name goes first");

} else if (hacker1[i] > hacker2[i]) {
  console.log("Yo, the navigator goes first definitely");

} else  {
  console.log("What?! You both have the same name?");
}
}




