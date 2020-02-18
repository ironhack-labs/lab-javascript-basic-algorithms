// Iteration 1: Names and Input
let hacker1 = "jacopo";
console.log("driver is: " + hacker1);

let hacker2 = "alex";
console.log("navigator is: " + hacker2);

if (hacker1.length == hacker2.length) {
console.log("Wow both your names are the same length");
} else if (hacker1.length > hacker2.length) {
  console.log("The driver´s name has the longer name, it has " + hacker1.length + " characters.");
} else {
  console.log("The navigator´s name has the longer name, it has " + hacker2.length + " characters.");
}

// Iteration 2: Conditionals
console.log(hacker1.toUpperCase(" ").split("").join(" "));
let spl = hacker1.split("");
  console.log(spl);
  let splrw = spl.reverse();
  console.log(splrw);
  let spljoin = splrw.join(" ");
  console.log(spljoin);
  //comparacion
 if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)) {
    console.log("The Driver´s goes first");
  } else if (hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definetly");
} else if (hacker1.localeCompare(hacker2) === hacker2.localCompare(hacker1)) {
  console.log("Tu, Ambos tenemos el mismo nombre");
}

// Iteration 3: Loops

// Bonus 1


let frases = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis velit a dui facilisis, ac elementum neque varius. Nulla aliquam vulputate porta. Donec dapibus eu diam consequat dictum. Cras rhoncus varius suscipit. Quisque interdum laoreet ligula at vehicula. Suspendisse ornare nulla sapien, non placerat diam mattis at. Suspendisse potenti.Pellentesque accumsan orci vel pellentesque convallis. Aliquam rhoncus tincidunt arcu, sed eleifend turpis dignissim consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vehicula sed ex nec pellentesque. Ut non accumsan est. Sed aliquet semper nibh convallis tincidunt. Sed tempus finibus odio, posuere vehicula quam fermentum nec. Nullam lorem felis, fringilla dictum pulvinar sed, congue et leo. Suspendisse et ipsum sed risus varius cursus. Integer eu finibus orci. Etiam aliquet magna enim, ac porta eros tempor non. Fusce eu elit semper mi ultricies posuere ac non lectus. Proin venenatis nunc non cursus faucibus. Donec convallis blandit ante. In lobortis maximus ullamcorper et. Vivamus sagittis felis at nisl vulputate, non luctus ex mattis. Vivamus sit amet enim at mi aliquet congue in eu magna. Morbi consequat nibh maximus pellentesque vestibulum. Praesent ultrices erat vel turpis laoreet fringilla. Fusce sodales sem orci, eu bibendum orci commodo nec. Mauris nec orci in augue mattis pretium. Etiam lacus magna, laoreet non efficitur vitae, dignissim commodo velit."

let frs = frases.split(" ");
console.log(frs.length);

let contador =0;
for (let i=0; i<frs.length; i++) {
  if (frs[i].toLowerCase() === "et") 
  contador++
}
console.log(contador);

//bonus 2

let phraseToCheck = "Roma, amor"
let phraseClean = (phraseToCheck.replace(/ |,|!/g,""))
let pali = ""

for (let i=phraseClean.length -1; i>=0; i--) {
 pali += phraseClean.charAt(i)
} if (phraseClean.toLowerCase() === pali.toLowerCase()) {
  console.log("Son palindromos");
} else {
  console.log("No son palindromos");
} 
