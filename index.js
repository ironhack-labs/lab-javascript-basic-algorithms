// Iteration 1: Names and Input

console.log("---------- Iteration 1 ----------");

let hacker1 = "Victor";
console.log("The Driver's name is " + hacker1);

let hacker2 = "Navi's Name";
console.log("The Navigator's name is " + hacker2);

// Only to verify what type they have

console.log("Type of hacker1: " + typeof(hacker1));
console.log("Type of hacker2: " + typeof(hacker2));


// Iteration 2: Conditionals

console.log("---------- Iteration 2 ----------");

// Expected output: "Life, the universe and everything. Answer: 42"

if (hacker1.length === hacker2.length)
    console.log("Wow, you both have equally long names, XX characters!");
else{
    if (hacker1.length > hacker2.length)
        console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
    else
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
        // It just for try use $
}


// Iteration 3: Loops

console.log("---------- Iteration 3 ----------");

let reverseName = "";
let iterator = 0;

do {
    reverseName += hacker1.charAt(iterator) + " ";
} while(iterator++ < hacker1.length);

console.log(reverseName.toUpperCase());

reverseName = "";
iterator = hacker1.length;

do {
    reverseName += hacker2.charAt(iterator--);
} while(iterator >= 0);

console.log(reverseName);




let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius rutrum nulla eu auctor. Fusce consequat dui in neque iaculis faucibus. Integer ac viverra nisi. Nam eget semper leo, molestie faucibus nulla. Cras suscipit id purus ac eleifend. Vivamus vel tortor nisl. Integer vel gravida libero."

longText += "Mauris quis mauris imperdiet turpis aliquam consequat. Nullam vulputate, lacus non elementum scelerisque, eros nulla eleifend dui, sed imperdiet ipsum augue ut urna. Aenean in diam at diam convallis accumsan sit amet sed diam. Donec ac ex vel magna luctus tincidunt ornare id urna. Sed risus odio, lacinia eget ligula sit amet, ultricies facilisis orci. Proin ac turpis viverra, egestas lorem nec, laoreet velit. Cras varius cursus libero vitae varius.

longText += "Maecenas dapibus commodo purus at eleifend. Nam sit amet placerat neque, ut fermentum orci. Nulla erat massa, tincidunt non facilisis ut, feugiat eu risus. Aliquam gravida tellus at ligula suscipit semper. Pellentesque eleifend felis in eros ultrices efficitur. Proin faucibus imperdiet odio, eu dictum felis venenatis sit amet. Duis eu facilisis orci. In volutpat dictum placerat. Integer dictum, arcu nec scelerisque rhoncus, sem lacus sagittis metus, ac semper nisl nisl et lorem. Suspendisse aliquet turpis non gravida vestibulum. Vestibulum sapien mi, aliquam non mattis non, scelerisque et metus. Fusce ut dictum nunc, sagittis gravida urna. Phasellus ut iaculis mi, sed fringilla metus."


