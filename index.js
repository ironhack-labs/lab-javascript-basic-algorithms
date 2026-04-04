// Iteration 1: Names and Input
function iteration1(name1, name2) {
  console.log("Iteration 1");
  let hacker1 = name1;
  console.log("The driver's name is " + hacker1);
  let hacker2 = name2;
  console.log(`The navigator's name is ${hacker2}`);
}

// Iteration 2: Conditionals
function iteration2(name1, name2) {
  console.log("Iteration 2");

  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters.`,
    );
  } else if (name2.length > name1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${name2.length} characters.`,
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${name2.length} characters!.`,
    );
  }
}

// Iteration 3: Loops
function iteration31(name1, name2) {
  console.log("Iteration 3.1");
  let response = "";
  for (let i = 0; i < name1.length; i++) {
    let letter = name1[i];
    letter = letter.toUpperCase();
    response += letter;
    if (i != name1.length - 1) {
      response += " ";
    }
  }
  console.log(response);
}

function iteration32(name1, name2) {
  console.log("Iteration 3.2");
  let response1 = "";
  for (let i = name1.length - 1; i >= 0; i--) {
    response1 += name1[i];
  }
  console.log(response1);
}

function iteration33(name1, name2) {
  console.log("Iteration 3.3");
  let hacker1 = name1;
  let hacker2 = name2;
  let minlength = 0;
  if (hacker1.length < hacker2.length) {
    minlength = hacker1.length;
  } else {
    minlength = hacker2.length;
  }

  for (let index = 0; index < minlength; index++) {
    if (hacker1 === hacker2) {
      console.log("What?! You both have the same name?");
      break;
    }
    if (hacker1[index] < hacker2[index]) {
      console.log("The driver's name goes first.");
      break;
    } else if (hacker1[index] > hacker2[index]) {
      console.log("Yo, the navigator goes first, definitely.");
      break;
    }
  }
}

function bonus1(longtext) {
  console.log("Bonus 1");
  console.log("El número total de palabras es " + longtext.split(/\s+/).length);

  let comprobacion = "";
  let contador = 0;
  for (let i = 0; i < longtext.length - 2; i++) {
    comprobacion = longtext[i] + longtext[i + 1] + longtext[i + 2];
    if (comprobacion == " et") {
      contador++;
    }
  }
  console.log(contador);
}

function bonus2(phraseToCheck) {
  console.log("Bonus 2");

  phraseToCheck = phraseToCheck.toLowerCase();
  let text = phraseToCheck.replace(/[^a-zñ]/g, "");

  let textInvert = "";
  for (let i = text.length - 1; i >= 0; i--) {
    textInvert += text[i];
  }
  if (text === textInvert) {
    console.log("Es palíndomo");
  } else {
    console.log("No es palíndromo");
  }
}

let name1 = "John";
let name2 = "Maria";
iteration1(name1, name2);
iteration2(name1, name2);
iteration31(name1, name2);
iteration32(name1, name2);
iteration33(name1, name2);

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit arcu, elementum id rhoncus at, porttitor non quam. Maecenas aliquet lacus quis volutpat rutrum. Curabitur quis molestie mi. Donec sollicitudin finibus risus quis fermentum. Vivamus luctus efficitur cursus. Fusce vitae convallis arcu. Duis in leo lacus. Sed et arcu urna. Suspendisse condimentum nulla elit, vitae mollis odio feugiat quis. Sed blandit, tellus vitae ornare luctus, ligula ligula dictum lectus, vel pellentesque tellus lacus non metus.

Aliquam lacinia vestibulum ipsum, at congue ligula porttitor non. Vestibulum volutpat lectus id dolor faucibus accumsan. Nulla pretium, erat eu hendrerit convallis, tellus elit convallis elit, sed pharetra mauris nisi ut nunc. In blandit egestas scelerisque. Nunc et justo nec nibh viverra blandit non vel lectus. Donec sollicitudin malesuada ex in scelerisque. Nullam ut arcu a erat tincidunt condimentum. Suspendisse ut imperdiet tortor, quis vulputate arcu. Nulla tincidunt viverra dictum. Fusce in odio libero. Quisque at viverra dui.

Morbi porta id justo nec consequat. Pellentesque vitae dui ut neque tempus finibus vitae ut justo. Sed eget tellus quis sapien sodales consequat laoreet in diam. Proin vel ex dapibus, sagittis diam et, varius nunc. Maecenas non justo metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies, nisl in tempor elementum, augue dui ullamcorper orci, et feugiat magna lectus eu sapien. Proin auctor velit arcu, ac feugiat mauris sagittis ut. Nunc elementum nibh sit amet nunc blandit placerat. Ut risus orci, lacinia ac mi at, tristique bibendum neque. Praesent id lacus in nulla venenatis hendrerit eget et nisi. Sed quis hendrerit ex.`;
let phraseToCheck = "Amor, Roma";

bonus1(longtext);
bonus2(phraseToCheck);
