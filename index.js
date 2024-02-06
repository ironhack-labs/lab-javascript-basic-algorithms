console.log("I´m ready")

// Iteration 1: Names and Input.

// Create a variable hacker1 with the driver's name.

const hacker1 = "Jose Ramon"

// Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}`);

// Create a variable hacker2 with the navigator's name.

const hacker2 = "Julio"

// Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals.

// Depending on which name is longer, print:

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`)
}

// Iteration 3: Loops.

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters.

let newDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1[i].toUpperCase() + " ";
}

console.log(newDriverName);

// 3.2 Print all the characters of the navigator's name in reverse order.

let newNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

/* 3.3
Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both have the same name?")
  }

  //BONUS 1

const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et urna orci. Praesent ultricies nunc eu sapien tempor, dignissim bibendum mi feugiat. Praesent in congue justo, nec malesuada dolor. Ut varius velit nec turpis pharetra rhoncus. Maecenas fringilla sit amet sem eu elementum. Phasellus ultrices ultrices augue, in molestie lacus placerat ac. Donec facilisis vehicula ipsum, non sollicitudin est mollis a. Donec vehicula efficitur mauris quis laoreet. Sed convallis maximus eros eu aliquam. Cras purus tortor, facilisis eu ante vitae, malesuada ultrices dui.

  Sed vestibulum quis lacus vitae pretium. Nullam ac ante quis justo iaculis iaculis. Nunc ac facilisis orci. Curabitur interdum vulputate libero vitae vehicula. Vestibulum dolor ligula, blandit quis gravida ut, accumsan at nisl. Cras non consectetur odio. Curabitur vitae efficitur nibh. Etiam elementum blandit tincidunt. Ut odio velit, aliquam sed nisi dictum, rhoncus porta magna. Nulla tempor nisl quis ipsum rhoncus consectetur.
  
  Sed pharetra accumsan justo a pretium. Aenean aliquet euismod facilisis. In condimentum varius diam viverra mattis. Nulla facilisi. Maecenas consectetur eros eget mauris pellentesque lacinia. Donec tempor mollis porta. Mauris pulvinar gravida sapien, sed semper orci venenatis vel. Phasellus sapien metus, vehicula sed mi a, ornare aliquam ipsum. Quisque non arcu fermentum, auctor nunc vitae, aliquam erat. Sed ut ligula elit. Integer id odio lacus. Curabitur quis tortor pharetra, cursus mi ac, auctor neque.`

let words = 0;

let etCount = 0;

  for (let i = 0; i <paragraphs.length; i++) {
    if (paragraphs[i] === " ") {
      words++
    }
    
    if (paragraphs[i] === "e" && paragraphs[i+1] === "t" && paragraphs[i+2] === " ") {
      etCount++
    }
  }

console.log(`Número de palabras: ${words}, cantidad de et: ${etCount}`);

// BONUS 2

