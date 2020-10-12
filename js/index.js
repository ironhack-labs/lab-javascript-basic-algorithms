
console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Sabela"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Nina"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
}

else (
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
)
// Iteration 3: Loops
let sepName = "";
for (i = 0; i < hacker1.length; i++) {
    sepName = sepName + hacker1.charAt(i).toUpperCase() + " ";
}
console.log(sepName);

let sepNameRev = ""
for (i = 0; i < hacker2.length; i++) {
    sepNameRev = hacker2.charAt(i) + sepNameRev; 
}
console.log(sepNameRev);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
}
else if (hacker1 > hacker2) { 
    console.log("Yo, the navigator goes first definitely.")
} 

else console.log("What?! You both have the same name?")

// BONUS 1

let Lore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam sapien sit amet sapien maximus feugiat. Etiam congue nibh et odio auctor hendrerit. Morbi nec diam ac felis feugiat fringilla ultrices in nisi. Duis sollicitudin euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id venenatis purus. Sed tellus arcu, rutrum non consectetur nec, fermentum a tortor. Pellentesque tincidunt erat at odio pretium mollis. Quisque auctor nibh dolor. Morbi posuere semper aliquam. Suspendisse tincidunt rhoncus eleifend. Aliquam sollicitudin, nunc at sodales scelerisque, velit nulla volutpat sapien, quis euismod nisi ex quis ligula. Nunc non efficitur neque. Maecenas in tincidunt libero. Cras efficitur ligula quis purus varius rhoncus. Maecenas iaculis tempus eros, sit amet rhoncus massa dictum vel. Morbi luctus facilisis quam, vitae interdum mauris varius ut. Praesent vel sem diam. Donec metus quam, ultricies eget mi non, venenatis volutpat sapien. Quisque lectus quam, iaculis vel molestie ac, eleifend sed felis. Vivamus congue tellus a ornare pharetra. Pellentesque vel ex porta, vestibulum nisi nec, auctor tortor. Sed commodo nisi a turpis venenatis accumsan. Proin gravida ligula sit amet lectus feugiat, a scelerisque sapien tempus. Proin ex massa, gravida et sollicitudin quis, sagittis ac turpis. Aenean aliquam nibh ut nibh tempor pulvinar. Praesent ut turpis nec ante commodo tempor vitae in ex.";

let wordCount = 0
let etCount = 0
for ( i = 0 ; i < Lore.length ; i++ ) {
    if (Lore.charAt(i) === " " ) {
      //  wordCount = wordCount + 1;
        wordCount++;
    }
    if (Lore.charAt(i-1) === "e" && Lore.charAt(i) === "t") {
        etCount++;
    }
}
console.log(wordCount);
console.log(etCount);
