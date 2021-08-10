// Iteration 1: Names and Input

let hacker1 = "Espe"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Esperanza"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }

// Iteration 3: Loops

//3.1
let upperCharacters = "";

for (let i = 0; i < hacker1.length; i++){
upperCharacters += hacker1[i].toUpperCase() + " ";
}
console.log(upperCharacters);

//3.2

let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) { 
  reverse += hacker2[i]
}
console.log(reverse);

//3.3

if (hacker1.localeCompare(hacker2)=== -1) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localeCompare(hacker2)=== 1){
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1.localeCompare(hacker2)=== 0) {
    console.log("What?! You both have the same name?")
  }


  //Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae justo et turpis tempor molestie. Donec convallis, leo ut mollis sagittis, sem eros faucibus lacus, id rutrum dolor dui at est. Curabitur efficitur massa et consectetur congue. Suspendisse ornare ex et neque vulputate vehicula eget non metus. Quisque aliquet sem mauris, at volutpat urna porta in. Phasellus feugiat a lectus nec tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus aliquet dapibus lorem at imperdiet. Sed dictum lectus eget tellus consectetur, ut malesuada libero lacinia. Nulla risus enim, efficitur vitae leo ac, blandit rhoncus eros. In feugiat urna sit amet ex ultrices, eget placerat urna venenatis. Aliquam maximus felis id vestibulum fermentum. Mauris lacinia dolor ut elit cursus sodales. Phasellus vel varius nibh. Donec accumsan ligula blandit massa gravida, ac fringilla augue efficitur. Nulla sed neque libero.

Maecenas vel ullamcorper nisi. Nam finibus tincidunt nisl non mollis. Sed ac sem nec quam condimentum aliquet. Donec nec maximus nunc. Curabitur ultrices mauris tortor, placerat finibus mauris dignissim vel. Aliquam quis nulla dolor. Fusce at tortor pharetra, aliquam nulla cursus, dapibus diam. In rhoncus posuere odio id euismod. Duis ultrices est et dolor malesuada commodo. Duis ut leo non mauris condimentum imperdiet et ac enim. Maecenas gravida, nunc sit amet facilisis faucibus, quam diam bibendum turpis, ac euismod magna nunc eu leo.

Donec fermentum at tortor porttitor interdum. Phasellus nisi quam, elementum varius tortor non, consequat venenatis lacus. Nam venenatis sed massa vel tincidunt. Duis porttitor, mi ut lobortis laoreet, ipsum nibh facilisis metus, et vulputate enim felis vitae velit. Aenean placerat mi sed odio tincidunt euismod. Mauris mattis auctor nisl id fringilla. Sed malesuada tincidunt laoreet. Donec facilisis iaculis erat ut semper. In ac risus in purus aliquet efficitur nec in nisl. Nullam imperdiet mauris eget lacus pulvinar placerat. Nam ornare enim sed odio lacinia condimentum. Vivamus mollis finibus risus, in mattis justo ultrices in. Morbi sit amet est sed velit interdum vehicula ut nec tellus. Aenean tincidunt enim id orci convallis, at tincidunt augue luctus. Donec tempus lectus vitae nunc viverra scelerisque ut ac nulla.`

let wordCount = 0;
for (let i=0; i< paragraph.length; i++){
  if (paragraph[i] === " ") {
    wordCount += 1;
  }
}
console.log(wordCount);
// pte buscar como contar saltos de párrafos. 