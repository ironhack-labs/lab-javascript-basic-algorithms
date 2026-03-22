// Iteration 1: Names and Input
let hacker1 = "LeroyJenkins";
console.log("The driver's name is " + hacker1);

let hacker2 = "Ash";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}

else if (hacker2.length>hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length+ "characters")
}

else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "characters!")
}

// Iteration 3: Loops

// 3.1
let resultado1 = "";
for (let i=0; i<hacker1.length; i++){
resultado1 = resultado1 + (hacker1[i].toUpperCase() + " ")
} 
console.log (resultado1);

// 3.2
let resultado2 = "";
for (let i=hacker2.length -1; i>=0 ; i--){
resultado2 = resultado2 + (hacker2[i])    
}
console.log (resultado2);

// 3.3

if (hacker1[0] > hacker2[0]) {
    console.log ("Yo, the navigator goes first, definitely")
}
else if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
}

else {
   console.log ("What?! You both have the same name?")
}


// Bonus time
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi ac diam aliquam pharetra. Donec nec ante mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras eget erat scelerisque, dapibus arcu quis, porttitor est. Donec id dictum dui, quis condimentum sem. Duis hendrerit nibh id consequat egestas. Vivamus in placerat odio, sit amet accumsan tellus. In fermentum fermentum odio. Cras pellentesque, purus imperdiet iaculis porta, quam lacus vehicula sem, a venenatis orci tellus vitae magna. Nullam id fermentum mi. Duis malesuada odio id auctor sagittis. Maecenas ornare massa id maximus blandit. Ut cursus semper odio. Pellentesque a porttitor enim, at pulvinar quam."+

"Praesent suscipit risus ac dignissim sodales. Praesent vitae est dolor. Mauris mattis, metus ac sodales rutrum, dolor odio facilisis ante, sed porttitor nisl dolor in risus. Curabitur eu neque vehicula, egestas mauris luctus, porta lectus. Nulla nibh ex, malesuada hendrerit nunc eu, sagittis consectetur quam. Nulla sed purus dui. Nunc consectetur vitae dolor in condimentum. Praesent vulputate, quam ac posuere sollicitudin, tellus urna laoreet tellus, non viverra leo neque venenatis leo."+

"Integer faucibus viverra eleifend. Nam tempus tincidunt odio, pretium tristique dolor lacinia tincidunt. Nullam malesuada molestie finibus. In euismod maximus bibendum. Pellentesque in enim sit amet nulla dignissim egestas. Donec laoreet eros id quam vestibulum elementum. Nunc placerat lobortis leo, in ullamcorper velit tempor et. Suspendisse placerat rhoncus eros, eget elementum ipsum feugiat vitae. Nullam lobortis ullamcorper condimentum. Vivamus lacus diam, scelerisque sed tempor sit amet, vulputate id lacus. Nunc eget ipsum eros."

let numberOfPhrases = 0;

for(let i = 0; i < longText.length; i++){
    if (longText[i] === " "){
        numberOfPhrases = numberOfPhrases + 1;
    }
}

console.log("Number of words: " + (numberOfPhrases + 1));


let numberOfEt=0;
for (i=0; i < longText.length; i++){
if (longText[i]==="e" && longText[i+1]==="t"){
    numberOfEt = numberOfEt + 1;
    }
}
console.log(numberOfEt);