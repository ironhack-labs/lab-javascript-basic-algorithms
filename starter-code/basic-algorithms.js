// Names and Input

//Conditionals

// Loops

//Iteration 6

let upperCase = hacker1.split(/(?=[a-z])/).join(" ");

console.log(upperCase.toUpperCase());

//Iteration 7

console.log(
  hacker2
    .split(/(?=[a-z])/)
    .reverse()
    .join("")
);

//Iteration 8

for (let i = 0; i < 1; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?");
    break;
  } else if (hacker1[0] <= hacker2[0]) {
    i++;

    console.log("The driver's name goes first");
  } else if (hacker1[0] >= hacker2[0]) {
    i++;

    console.log("Yo, the navigator goes first definitely");
  }
}

//Este for anterior tiene el bug de que si el nombre del navigator empieza también por "J", por "Ja" o por "Jav", siempre devuelve mensaje de que el driver va primero, incluso cuando no, por ejemplo poniendo "Jave" como navigator name.
//No me ha dado tiempo a solucionarlo. Aunque con el código comentado que sigue el bug no ocurre pero no está dentro de un loop, no he sabido meterlo dentro de un loop sin que dé ningún bug.

/*  if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first");
  } else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1[1] < hacker2[1]) {
    console.log("The driver's name goes first");
  } else if (hacker1[1] > hacker2[1]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1[2] < hacker2[2]) {
    console.log("The driver's name goes first");
  } else if (hacker1[2] > hacker2[2]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1[3] < hacker2[3]) {
    console.log("The driver's name goes first");
  } else if (hacker1[3] > hacker2[3]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?");
  } else if (hacker1[3] === hacker2[3] && hacker2.length > 4) {
    console.log("The driver's name goes first");
  } else if (hacker1[0] === hacker2[0] && hacker2.length < 4) {
    console.log("Yo, the navigator goes first definitely");
  }

  */

// Lorem ipsum generator
