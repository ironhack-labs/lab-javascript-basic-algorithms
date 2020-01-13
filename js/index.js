// Iteration 1: Names and Input
var hacker1 = prompt("Write driver's name:");
console.log("The driver's name is", hacker1);

var hacker2 = prompt("Write navigator's name:");
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
var driverLength = hacker1.length;
var navigatorLength = hacker2.length;

if (driverLength === navigatorLength) {
  console.log("Wow, you both have equally long names,", driverLength, "characters!");
} else if (driverLength > navigatorLength) {
  console.log("The driver has the longest name, it has", driverLength, "characters.");
} else if (driverLength < navigatorLength) {
  console.log("It seems that the navigator has the longest name, it has", navigatorLength, "characters.");
}

// Iteration 3: Loops
//3.1
var newDriverName = "";
for (var i = 0; i < driverLength; i++) {
  if (i === driverLength - 1) {
    newDriverName += hacker1[i].toUpperCase();
    continue;
  }
  newDriverName += hacker1[i].toUpperCase() + " ";
}

console.log(newDriverName);

//3.2
var newNavigatorName = "";
for (var i = navigatorLength - 1; i >= 0; i--) {
  if (i === 0) {
    newNavigatorName += hacker2[i].toUpperCase();
    continue;
  }
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

//3.3
var shortestNameValue;
if (driverLength > navigatorLength) {
  shortestNameValue = driverLength;
} else if (driverLength < navigatorLength) {
  shortestNameValue = navigatorLength;
} else {
  shortestNameValue = driverLength;
}
for (var i = 0; i < shortestNameValue; i++) {
  if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
    break;
  } else if(hacker1[i] === undefined || hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] === undefined || hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}

// Bonus 1
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc sem, scelerisque eu feugiat a, accumsan vel nibh. Nunc at ex sit amet metus vehicula imperdiet sit amet tempus diam. Nulla in vehicula nulla. Donec tortor ex, faucibus hendrerit velit a, commodo bibendum nisi. In id enim ornare, auctor risus ut, interdum elit. Proin placerat lacinia sollicitudin. In egestas dolor id sem malesuada, in commodo eros tempus. Cras laoreet purus tincidunt, euismod augue ac, porta augue. Maecenas augue tortor, eleifend vel convallis ac, aliquam ac velit. Aenean egestas faucibus lectus ut porttitor. Aliquam erat volutpat. Phasellus est mauris, molestie fermentum ornare ac, feugiat ac justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec dui at libero rutrum pharetra at non mauris. Mauris vel turpis eleifend, egestas lectus at, suscipit odio. Praesent ornare sed velit vitae iaculis. \
Suspendisse potenti. In semper ante vitae nunc pellentesque tristique. Suspendisse condimentum dui non venenatis laoreet. Integer consequat consequat libero, eu facilisis dui vulputate elementum. Aenean bibendum, justo eget laoreet accumsan, sapien odio mattis nunc, sed suscipit purus nisl quis justo. Donec eu felis sit amet dui tempor maximus. Integer non augue ac mi blandit mollis id at lectus. Maecenas viverra nisl tempor feugiat pellentesque. Donec vitae magna ut felis faucibus accumsan nec non nulla. Cras quis vehicula lorem. Etiam ut libero condimentum, aliquet erat sed, feugiat erat. Mauris non luctus nibh. \
Aenean in nisi erat. Etiam quis maximus ante. Maecenas egestas porttitor purus id viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vehicula dapibus leo quis eleifend. Phasellus dapibus cursus nisi ut lobortis. Aliquam dapibus aliquam urna vitae commodo. Curabitur sit amet consequat tellus.";

var numberOfWords = loremIpsum.split(" ");

console.log(numberOfWords.length);

var etCounter = 0;
for (let i = 0; i > numberOfWords.length - 1; i++) {
  if (numberOfWords[i] === "et") {
    etCounter++;
  }
}

console.log("The word 'et' appears", etCounter, "times.")
