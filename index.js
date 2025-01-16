// Iteration 1: Names and Input
let hacker1 = "Fernando";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jhoan";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let conchar1 = hacker1.length;
let conchar2 = hacker2.length;
if (conchar1 > conchar2) {
    console.log(`The driver has the longest name, it has ${conchar1} characters.`)
} else if (conchar1 == conchar2) {
    console.log(`Wow, you both have equally long names, ${conchar1} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${conchar2} characters.`)
}
// Iteration 3: Loops
let hacker1Mayus="";

// Capital letters
for(let i=0;i<hacker1.length;i++){
    hacker1Mayus+=hacker1[i].toUpperCase();
    hacker1Mayus+=" ";
}
console.log(hacker1Mayus);
// Reverse order
let reversoName="";
for(let i=hacker2.length;i>0;i--){
    reversoName+=hacker2[i-1];
}
console.log(reversoName);

// Lexicographic order
if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}else if(hacker2.localeCompare(hacker1) === -1){
    console.log("Yo, the navigator goes first, definitely.")
}else{
    console.log("What?! You both have the same name?");
}

//Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie non sapien vitae congue. Sed orci nibh, rhoncus placerat justo aliquam, mattis congue dolor. Ut ut ligula tincidunt, pellentesque justo vel, vehicula quam. Cras eu facilisis quam. Vestibulum sit amet ipsum bibendum, pharetra magna ut, porttitor nisi. Sed vitae justo vitae est venenatis lacinia. Etiam aliquam consectetur nulla, eget fermentum erat venenatis vel. Fusce mattis non magna vitae gravida.

Etiam iaculis fringilla felis, facilisis dignissim arcu lacinia eget. Vivamus eu elementum libero, non lacinia ante. Sed in dolor ut orci eleifend faucibus quis vel eros. Sed nisl elit, tristique eu feugiat vitae, finibus vel dui. Vivamus purus felis, venenatis ac placerat vitae, aliquet quis felis. Curabitur felis magna, commodo at arcu at, ultrices lacinia est. Vestibulum id auctor mauris. Suspendisse eu ligula lectus. In auctor dolor eget massa consequat, placerat venenatis mauris pellentesque.

Ut et purus a odio ultricies interdum vel in velit. Proin pulvinar sapien in nunc pretium dictum. Mauris elementum suscipit enim ac viverra. Vivamus egestas fermentum enim a posuere. Nulla ac fermentum turpis, nec varius enim. Fusce vel gravida nisl, pulvinar condimentum neque. Aenean posuere tincidunt ipsum, et eleifend leo pharetra in. Vivamus in augue dui. Sed et vestibulum leo. Nullam in velit ac urna efficitur sodales non posuere odio. Nullam lacinia est nisi, a auctor tortor tincidunt ut.`;

// Paso 2: Contar el número de palabras en el texto
let countWords=0;
const words = longText.trim().split(/\s+/);
for(const value of words ){
   countWords+=1
}
console.log(countWords);
// Paso 3: Contar "et"
const word="et";
const matches = longText.match(new RegExp(`\\b${word}\\b`, 'gi'));
if (matches) {
    console.log(matches.length);
} else {
    console.log(0);
}

//Bonus 2 palíndromo
let palabra="madam";
let reversoWord="";
for(let i=palabra.length;i>0;i--){
    reversoWord+=palabra[i-1];
}
if(palabra===reversoWord){
    console.log(`La palabra ${palabra} es palíndromo`);
}else{
    console.log(`La palabra ${palabra} no es palíndromo`);
}