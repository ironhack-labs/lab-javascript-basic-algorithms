console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'John';
const hacker2 = 'Dave';

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

function lengthComparison() {
    if (hacker1Length > hacker2Length) {
        console.log("The driver has the longest name, it has " + hacker1Length + " characters.");
    } else if (hacker1Length < hacker2Length) {
        console.log("It seems that the navigator has the longest name, it has " + hacker2Length + " characters.");
    } else if (hacker1Length === hacker2Length) {
        console.log("Wow, you both have equally long names, " + hacker1Length + " characters!");
    }
}
lengthComparison();

// Iteration 3: Loops
let hacker1Name = '';
for (var i = 0; i < hacker1Length; i++) {
    hacker1Name += hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1Name);

let hacker2Name = '';
for (var i = hacker2Length - 1; i >= 0; i--) {
    hacker2Name += hacker2[i];
}
console.log(hacker2Name);

function lexicographicOrder() {
    for (let i = 0; i < hacker1.length; i ++) {
      char1 = hacker1[i];
      char2 = hacker2[i];
    
      if (char1 < char2) {
        console.log("The driver's name goes first.");
        return;
      } else if (char1 > char2 || !char2) {
        console.log("Yo, the navigator goes first definitely.");
        return;
      }
    }
    console.log("What?! You both have the same name?");
}

lexicographicOrder()

//Extra

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam est. Nam id augue sollicitudin, dignissim metus vel, convallis ligula. Maecenas ac pretium nisi. Cras eu mauris eu nisl volutpat viverra. Sed vel velit nisl. Duis commodo porta lacus egestas pellentesque. Pellentesque iaculis, lectus et ornare congue, est felis rutrum ligula, bibendum dignissim nulla lorem et nibh. Sed nec libero non justo rhoncus sollicitudin. Vestibulum interdum elementum accumsan. Sed quam dui, faucibus ut eleifend id, facilisis et arcu. In venenatis erat ut dolor blandit placerat. Proin luctus nisl sit amet venenatis pharetra. Curabitur ultrices augue nec semper consectetur. Morbi nec facilisis odio, at aliquet elit. Nam id scelerisque massa. Nulla facilisi. Vestibulum ut lorem sit amet ligula suscipit varius. Curabitur iaculis, felis nec finibus pellentesque, enim tortor fringilla lorem, vestibulum maximus purus massa id lorem. In ornare metus augue, vel gravida dolor cursus quis. Donec fringilla nisi in pretium ultrices. Praesent convallis orci eu mi pellentesque, non suscipit ligula malesuada. Cras commodo cursus urna et iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In aliquam luctus vulputate. Ut iaculis vulputate nisi ac dictum. Vivamus vehicula nulla et odio consectetur ultricies. Fusce molestie ex nec sagittis finibus. Vivamus id enim at diam gravida feugiat in et purus. In eget facilisis nulla. Donec iaculis leo ut nunc vehicula convallis eget nec purus. Integer tincidunt vestibulum diam, vel pretium tortor gravida eget. Aenean id venenatis justo. Aliquam in nisl a purus convallis mollis. Duis iaculis sapien dapibus neque pellentesque, quis elementum erat fermentum.";

function wordCounter(str) {
    var words = str.split(" ").length;
    return words;
}

console.log(wordCounter(loremIpsum));


function specificWordCounter(str) {
    var words = str.split(" et ").length;
    return words;
}

console.log(specificWordCounter(loremIpsum));