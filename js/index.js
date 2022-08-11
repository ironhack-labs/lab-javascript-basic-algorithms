// Iteration 1: Names and Input
let hacker1 = "Javier"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jose"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length}`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let mayus = "";
for (let i = 0; i < hacker1.length; i++) {
    mayus += hacker1[i].toUpperCase() + " ";
}
console.log(mayus);

let reves = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reves += hacker1[i];
}
console.log(reves);

let order = hacker1.localeCompare(hacker2)
if (order == -1) {
    console.log("The driver's name goes first.")
} else if (order == 1) {
    console.log("Yo, the navigator goes first definetely.")
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1:
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel placerat urna, eu mattis dui. Praesent dictum varius turpis, nec volutpat lacus porta vitae. Aliquam elementum eros vel tortor pharetra, quis imperdiet metus lobortis. Cras scelerisque, nibh ut dignissim dictum, sem eros sagittis elit, a facilisis neque dolor id arcu. Fusce pharetra sollicitudin purus, vitae ullamcorper dui finibus vel. Sed at dui massa. Integer id tellus id tortor pellentesque porta efficitur molestie lorem. Nullam turpis tellus, efficitur ac accumsan et, semper at diam. Suspendisse potenti. Aenean accumsan ante convallis tellus consequat hendrerit. Donec vel mattis velit. Vestibulum vitae ligula dictum quam porttitor malesuada sollicitudin ut justo. Curabitur ultricies pretium tellus et volutpat. Nam egestas vestibulum nisl, id pharetra velit sodales nec. Etiam velit urna, sagittis quis ultrices nec, finibus accumsan urna. Donec vel quam ut turpis pretium semper non ut massa. Mauris semper enim ut eros sagittis tristique. Duis in ultrices tellus. Nam mattis, mi et ultrices semper, magna nisi volutpat dui, sed convallis libero magna sed diam. Donec lacinia ex eget lectus porttitor, et fermentum sapien luctus. Nam sed lacinia urna. Fusce commodo nisi eget ultrices consectetur. Sed lacinia, lectus quis semper viverra, massa diam varius metus, semper tristique libero nulla fringilla enim. Nulla eget scelerisque ante. Cras ornare, leo vitae venenatis imperdiet, ex ante volutpat risus, quis tempor ex lectus in elit. Sed vitae augue sapien. Donec at varius nulla, id iaculis orci. Quisque congue nisi sem, vel molestie quam porta vitae. Nam vitae bibendum libero. Phasellus consequat dui risus, et pulvinar odio laoreet eu. Aenean laoreet gravida velit placerat congue. Mauris ac vestibulum metus. Maecenas id ultrices dui, at faucibus sem. Nam in ante massa."
let palabras = 0;
let latin = 0;
for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === ' ') {
        palabras += 1;
    }
    if (lorem[i] === 'e' && lorem[i+1] === 't') {
        latin += 1;
    }
}
palabras += 1;
console.log(`El numero de palabras es: ${palabras}`);
console.log(`El numero de "et" es: ${latin}`);

// Bonus 2:
let phraseToCheck = "Was it a car or a cat I saw?";
let phraseModified = "";
let phraseInverted = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    if (
        phraseToCheck[i] === " " ||
        phraseToCheck[i] === "!" ||
        phraseToCheck[i] === "," ||
        phraseToCheck[i] === "?" ||
        phraseToCheck[i] === "'"
    ) {
        continue;    
    } else {
        phraseModified += phraseToCheck[i].toLowerCase();
    }
}
for (let i = phraseModified.length - 1; i >= 0; i--) {
    phraseInverted += phraseModified[i];
}
if (phraseModified === phraseInverted) {
    console.log (`La frase "${phraseToCheck}" es un Palindrome`);
} else {
    console.log (`La frase "${phraseToCheck}" NO es un Palindrome, intentalo de nuevo.`);
}

console.log("I'm ready!");