// Iteration 1: Names and Input
var hacker1 = "Camille";
console.log("The driver's name is " + hacker1);
var hacker2 = "Sylvie";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

function longestName(name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters`
    );
  } else if (name2.length > name1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${name2.length} characters`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${name1.length} characters`
    );
  }
}

longestName(hacker1, hacker2);

// Iteration 3: Loops

/* 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

function nameCapital(name) {
  let nameInCapital = name.toUpperCase();
  let print = "";
  for (i = 0; i < nameInCapital.length; i++) {
    print += ` ${nameInCapital[i]}`;
  }
  console.log(print);
}


function nameReverse(name) {
  let print = "";
  for (let i = name.length - 1; i >= 0; i--) {
    print += name[i];
  }
  console.log(print);
}

function lexorder (name1, name2) {
    let arrayName = [name1,name2].sort()
    if (name1===name2) {console.log ("What?! You both have the same name?");
    } else if (arrayName[0] === name1 ) {
        console.log ("The driver's name goes first");
    } else {
        console.log ("Yo, the navigator goes first definitely");
    }
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices arcu laoreet, ornare justo sit amet, dignissim erat. Integer aliquet id risus at efficitur. Donec blandit lorem elit, vitae vestibulum urna interdum quis. Donec porta consequat odio a vehicula. Nullam ac augue sollicitudin, sagittis nibh et, tincidunt nisi. Cras finibus est in nunc tincidunt accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non tortor gravida, dignissim eros et, vehicula ex."

function countWords (p) {
    let counter = 0 ;
    for (let i =0 ; i < p.length ; i++) {
        if (p[i]===" "){ counter +=1 }
    } let words = counter +1 ;
    console.log (`there are ${words} words in this text !`);
}

countWords (lorem);