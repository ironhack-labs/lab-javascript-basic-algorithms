// Iteration 1: Names and Input

let hacker1 = "Josep"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Adrian"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names,${hacker1.length} characters!`)
}

let newName = "";

for (let i = 0; i < hacker1.length; i++) {
    let hackerLetter = hacker1[i];
    let withUpperCase = hackerLetter.toUpperCase();
    let withSpace = withUpperCase + " ";
    newName = newName + withSpace;
}

console.log(newName) 
// Iteration 3: Loops

let reverse = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    let hackerLetter = hacker2[i];
    reverse = reverse + hackerLetter
}
console.log(reverse);

if (hacker1 < hacker2 ) {
    console.log(`${hacker1} goes first.`);
}
else if (hacker1 > hacker2) {
    console.log(`Yo, ${hacker2} goes first, definitely.`)
}
else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus urna, venenatis eu libero aliquet, auctor posuere dui. Sed facilisis sed leo non sagittis. Nunc vitae justo efficitur, condimentum quam eget, tristique dui. Sed convallis, odio a faucibus volutpat, nisl felis placerat ex, non vehicula ante magna et justo. Nullam at aliquet leo. Etiam consequat eros vel lacinia aliquet. Suspendisse aliquam turpis vel ullamcorper fringilla. Vestibulum efficitur mauris non tincidunt malesuada.Integer mollis nisi eget nisi auctor, non maximus augue gravida. Aenean consequat vitae nibh ac commodo. Maecenas ligula turpis, aliquam et venenatis in, sagittis nec lorem. Proin interdum luctus ante nec rhoncus. Aenean ullamcorper quis est vitae venenatis. Pellentesque id euismod erat, a maximus urna. Sed vulputate eleifend elit pellentesque commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Cras convallis venenatis libero nec pretium. Etiam eget odio eu urna iaculis consequat. Nullam nec arcu nulla. Ut turpis magna, tincidunt sed nisl vel, fringilla molestie ipsum. Sed vitae varius risus. Pellentesque accumsan pretium egestas. Morbi at neque pharetra, convallis ipsum a, dapibus nunc. Mauris neque eros, feugiat scelerisque felis in, tristique ullamcorper est."

let palabras = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        palabras++
    }
}
console.log(palabras);

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === "e" && "t") {
        palabras++
    }
}
console.log(palabras);
