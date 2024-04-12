
// interacion 1

let hacker1 = "Cata"
console.log ("The driver's name is " + hacker1);

let hacker2= "Camila"
console.log ("The navigator's name is " + hacker2);

// interacion 2

if (hacker1.length> hacker2.length) {
console.log ("The driver has the longest name, it has " + hacker1.length + " characters" )
} else if (hacker1.length < hacker2.length) {
    console.log ("The navigator has the longest name, it has " + hacker2.length + " characters" )
} else {
    console.log ("Both have equally long names,it has " + hacker1.length + " characters")
}

// interaction 3
console.log (hacker1.toUpperCase().split("").join(" "))

// console.log (hacker2.split("").reverse().join(""))

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed = reversed + hacker2[i];
}

console.log(reversed);

// "María" -> Longitud de 5
// "Al" -> Longitud de 2
// "A" -> Longitud de 1
// "" -> Longitud de 0
// M A R I A -> Length (Longitud) -> 5
// 0 1 2 3 4 -> Posiciones -> Desde 0 hasta 4
// María
// aíraM
// let palabra = mar -> palabra[1] => a




if  (hacker1 > hacker2){
console.log ("The driver's name goes first ");
    } 

    else if  (hacker1 < hacker2){
        console.log ("Yo, the navigator goes first, defenitely" );

    } else {
        console.log ("What?! You both have the same name?");
    }
    