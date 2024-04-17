
//IT1

let hacker1 = "Maria";

console.log("the driver's name is " + hacker1);
/* console.log (hacker1.length) ----> Así consultamos longitud */

let hacker2 = "Juan";
 console.log("the navigator's name " + hacker2);
/* console.log (hacker2.length) ----> Así consultamos longitud */

//IT2

if(hacker1.length>hacker2.length) {
 console.log("the driver has the longest name, it has " + hacker1.length + " characters");
} 
else if(hacker2.length>hacker1.length) {
 console.log ("it seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
else {
 console.log ("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
 
//IT3

//IT3.1 - 3.1 Print the characters of the driver's name, separated by space, and in capital letters,

/* para (considerando que i es igual a cero/ siempre que i sea menor que el largo de driver suma uno a i) (repeat)
la cuerda sera igual la cuerda anterior mas la nueva posicion de i convertida en mayusculas 
si i es equivalente al largo de driver, imprime la cuerda como resultado*/

let driver = hacker1
let spacecaps = ""

for(let i = 0; i < driver.length; i = i +1) {
    spacecaps = spacecaps + driver[i].toUpperCase() + " ";
    if(i === driver.length -1) {
        console.log (spacecaps)
    }
}

/* solucion sin bucle:
console.log (hacker1.toUpperCase().split("").join(" "))

//IT3.2

// Print all the characters of the navigator's name in reverse order

/* solucion sin bucle:
console.log(hacker2.split("").reverse().join("")) */

let reversed = "";

for(let i = hacker2.length - 1; i >= 0; i--) {
   reversed = reversed + hacker2[i];
    if(i === 0){
        console.log (reversed)
    }
}


//IT3.3

// Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

let navigator = hacker2

if(driver < navigator) {
    console.log("The driver's name goes first.")
}
else if(navigator < driver) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log ("What?! You both have the same name?");
}
  


//BONUS 

// Bonus 1:

// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.


let textolargo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis semper, gravida nunc vitae, feugiat tortor. Quisque hendrerit velit sed dui bibendum, ut vehicula arcu imperdiet. Donec id ante mauris. Suspendisse sodales faucibus elit quis mollis. Phasellus pharetra, est nec sollicitudin dictum, nulla nunc semper ipsum, maximus eleifend lectus ipsum id justo. Nullam massa enim, egestas quis venenatis suscipit, blandit at metus. Sed cursus justo vel ligula condimentum faucibus. Vestibulum a arcu sed ipsum congue vulputate sed vel nisi. Maecenas ullamcorper turpis tortor, vel vulputate ex feugiat ut. Cras fringilla urna blandit est ultricies, non congue tortor ullamcorper. Vestibulum maximus sit amet nunc ac vulputate. Pellentesque pharetra magna lobortis, condimentum lacus id, ullamcorper ante. Maecenas gravida ex ex, in sagittis purus faucibus sed.

Suspendisse potenti. Integer in nunc nec ligula auctor iaculis consectetur sed est. Ut commodo eros feugiat purus consequat, a tincidunt mi porta. Donec volutpat ante mauris, at tincidunt sem lobortis non. Morbi ut tempor nibh. Suspendisse potenti. Nam ultrices eget leo sed interdum.

Mauris imperdiet vel massa eu tincidunt. Donec faucibus porta libero, at volutpat ipsum sollicitudin id. Donec tempor lectus vel mi posuere aliquam. Vivamus eu accumsan dolor. Maecenas accumsan dignissim hendrerit. In hac habitasse platea dictumst. Curabitur ut felis massa. Duis non dictum ligula. Sed bibendum porta est et malesuada. Maecenas tincidunt pulvinar convallis.`;


let wordCount = 0;

// Iterar sobre el texto y contar las palabras
for (let i = 0; i < textolargo.length; i++) {
    // Incrementar el contador si encontramos un espacio o un salto de línea
    if (textolargo[i] === ' ' || textolargo[i] === '\n') {
        wordCount++;
    }
}

// La última palabra no será contada, así que agregamos 1 al contador
wordCount++;

console.log("Número de palabras:", wordCount);

