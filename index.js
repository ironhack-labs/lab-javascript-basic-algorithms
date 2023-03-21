// Iteration 1: Names and Input
let hacker1 = "Jon";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Tyrion";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

//compare lenght of the name
//depending on which one is longer, print some stuff

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

//3.1
let nameDriverNew = "";
for (let i = 0; i < hacker1.length; i++){
    nameDriverNew += hacker1[i];
}
let splitName = nameDriverNew.split('').join(' ');
console.log(splitName.toUpperCase());

//3.2
let nameNavigatorNew = "";
for (let i = hacker2.length-1; i >= 0; i--){
    nameNavigatorNew += hacker2[i];
}
console.log(nameNavigatorNew);

//3.3
if (hacker1[0] < hacker2 [0]) {
    console.log("The driver's name goes first");
} else if (hacker1[0] > hacker2 [0]){
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("What?! You both have the same name?");
}

//BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique felis ac dapibus maximus. Proin condimentum magna vitae libero blandit ornare. Suspendisse cursus massa eu purus congue sollicitudin. Pellentesque ac luctus ipsum, a dictum nulla. Nam mattis luctus libero vitae dapibus. Morbi sit amet lacus eget lectus hendrerit volutpat et ac velit. Curabitur cursus lacus vitae elit varius convallis. Sed nulla dolor, tincidunt eu nisi vel, vehicula varius odio. Pellentesque diam leo, viverra at rutrum varius, vulputate vitae lacus. Nullam posuere odio in ex dictum convallis. Maecenas vehicula dignissim mi. Aenean est purus, auctor nec sodales id, bibendum non erat. Vestibulum in mi turpis. In rhoncus accumsan magna. Aenean non orci eget tellus ultrices luctus at nec dolor. Aliquam vitae felis a magna aliquet faucibus quis id odio. Nunc ac viverra eros.
Fusce mollis massa vel placerat tempor.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis quis orci in leo hendrerit lacinia. Curabitur dapibus tempus augue eu convallis. Ut sagittis est nec tempus eleifend. Quisque eget mollis libero. Praesent eget diam a odio porttitor tincidunt id ut neque. Sed at justo vel est sodales ornare.
`;

let words = longText.split(/\s+/);
let wordsCount = words.length;
console.log(wordsCount);

let countET = "";

for (let i = 0; i <= longText.length; i++){
    if (longText[i] === "e" && longText[i+1] === "t"){
        countET ++;
    }
}

console.log(countET);


///BONUS 2
let phraseToCheck = "Racer";
let lowercasePhrase = phraseToCheck.toLowerCase;
let isChecked = true;
for (let i = 0; i < lowercasePhrase.length / 2; i++) {
    let j = lowercasePhrase.length - i - 1;
    if(lowercasePhrase[i] !== lowercasePhrase[j]){
        isChecked = false;
        break;
    }
}
console.log(isChecked);
