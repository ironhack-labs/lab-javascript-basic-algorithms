// Iteration 1: Names and Input
let object = {
    hacker1 : "XXXX",
    hacker2 : "YYYY", // "Alex"
}

console.log(`The driver's name is ${object.hacker1}`);
console.log(`The navigator's name is ${object.hacker2}`);

// Iteration 2: Conditionals
let driver = object.hacker1.length;
let navigator = object.hacker2.length;
for(let i= 0; (i < driver  && i < navigator); i++){
if (driver> navigator){
    console.log(`The driver has the longuest name, it has ${driver} characters`);
}
else if( driver<navigator){

    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`);
}
else{
    console.log(`Wow, you both have equally long names,${navigator} characters`);
}

}

// Iteration 3: Loops
let phrase = "";
let NAME = object.hacker1.toUpperCase();
for(let i=0; i<driver; i++){
    phrase += NAME[i] + " ";
 }
 console.log(phrase);
 
 let phrase1 = [];
 for(let i=0; i<navigator; i++){
     phrase1.push(object.hacker2[i]);
   
    }
let phrase2 = phrase1.reverse();
    
console.log(phrase2.join(""));

// 3.3

if (object.hacker1 < object.hacker2 === true) {
    console.log("The driver's name goes first");
}  else if (object.hacker1 > object.hacker2 === true) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1 :

//1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras tempus libero a convallis volutpat. Fusce sit amet arcu fermentum, 
faucibus est vitae, ullamcorper est. Aenean nec pellentesque elit, ut 
luctus sem. Maecenas non lacus lectus. Mauris vel commodo urna, vel 
ullamcorper nisl. Maecenas maximus et elit in pellentesque. Aliquam 
molestie mollis metus eget cursus. Nullam et magna nec tellus scelerisque 
pulvinar.
Nullam hendrerit elit nec nisl sagittis pretium. Proin viverra eros et 
velit aliquam euismod. Phasellus tincidunt, dui eget hendrerit tristique, 
diam massa tempus turpis, non ultrices neque odio ut neque. Vestibulum a 
nulla tortor. Donec felis quam, porttitor eget velit eget, facilisis 
congue turpis. Sed quis congue tellus. Duis semper lacinia leo, vitae 
auctor magna pretium in. Aenean congue iaculis imperdiet. Phasellus 
rhoncus quis neque eu maximus. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Aliquam id blandit libero.
Nunc semper bibendum mauris sed auctor. Maecenas at ex eu tortor ultrices 
malesuada. Mauris sed accumsan augue, id gravida massa. Suspendisse potenti. 
Nam purus diam, condimentum ac hendrerit et, semper a justo. Donec at 
elementum enim, ac lacinia metus. Nulla elementum sapien at sodales 
convallis. Proin eu ante suscipit, viverra mauris ac, blandit metus. 
Aenean imperdiet faucibus nisl, nec scelerisque ligula. Etiam iaculis 
ligula nec lobortis malesuada. Quisque vehicula orci in eros vehicula, 
vel porttitor ante dictum. Nam sagittis elementum lorem, vitae efficitur 
est porttitor non. Sed scelerisque dui vel lorem aliquet venenatis. Ut 
malesuada rhoncus felis, et luctus nisi pellentesque vel. Donec gravida 
faucibus libero nec vestibulum.`;

//2
// split en fonction d espace pour avoir objet separé. 
let lorem1 = lorem.split(' ');
// length pour avoir le nbr de mots.
console.log(lorem1.length);

//3 
let num = 0; 

for (i=0; i < lorem1.length; i++) {
    if (lorem1[i] === "et") {
        num += 1;
        console.log(num, lorem1[i]);
    } 
}

//Bonus 2 :

let phraseToCheck = "car";

let value = phraseToCheck.split('');
let valuer = value.reverse();
let valuer1 = valuer.join("")

if (phraseToCheck === valuer1) { 
    console.log("It's palindromes");
} else { 
    console.log("It's not a palindromes");
}
console.log("mot du debut :", phraseToCheck, "Palindrome ? : ", valuer1);