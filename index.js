// Iteration 1: Names and Input
let hacker1 = "Omar";
console.log("The driver name is " + hacker1);
let hacker2 = "Aytha";
console.log("The navigator name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

let driver = "";
for (let i = 0; i<hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + " ";
}

console.log(driver);

let navigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i];
}

console.log(navigator);

if (hacker1<hacker2){
    console.log("The driver's name goes first");
}

else if (hacker1>hacker2){
    console.log("Yo, the navigator goes first definitely");
}

else if(hacker1===hacker2){
    console.log("What?! You both have the same name?");
}

//BONUS

let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada metus metus, eu fermentum lacus aliquet sit amet. Pellentesque lacinia metus id lacus tristique, ac vulputate nunc condimentum. Cras at est eget massa volutpat ultricies. Pellentesque a tempor enim, non tincidunt est. Proin convallis vestibulum mi eu tincidunt. Cras quis efficitur risus, sed sagittis urna. Aliquam nec nisi tristique, elementum ligula nec, ornare metus. Mauris ut rhoncus lacus. Suspendisse ultrices erat id metus mattis, eget cursus tellus vehicula. Phasellus eget mauris sodales, commodo erat vitae, consequat odio. Suspendisse potenti.

Vestibulum cursus ante id mauris cursus egestas. Nullam placerat tristique felis sed elementum. Cras eu tortor aliquam libero porttitor hendrerit. Ut facilisis neque sit amet semper faucibus. Quisque eu lacus mi. Nulla interdum nisi eget elit facilisis, et posuere nulla tincidunt. Suspendisse ac rutrum nibh, in varius orci. Aliquam porta consequat erat sed malesuada. Integer faucibus sagittis dui sit amet tincidunt. Vivamus ante ligula, scelerisque eu suscipit et, iaculis id diam. Duis elit enim, dictum eu sagittis scelerisque, ullamcorper sit amet lacus. Curabitur pharetra turpis nec elementum porta.

Quisque dictum venenatis ante. Etiam bibendum pharetra nibh, a vestibulum tellus blandit et. Mauris mauris sem, blandit at elementum vitae, lacinia venenatis mi. Sed arcu diam, bibendum vitae egestas sit amet, laoreet id erat. Praesent risus arcu, rhoncus id vestibulum nec, suscipit a dui. Pellentesque libero diam, iaculis eget mauris et, pharetra fermentum purus. Donec et aliquet lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus at risus nec lacinia. Fusce a augue metus. Morbi magna quam, pellentesque eu ultricies sed, posuere quis odio.`

console.log(longText.length);

let etAppears = longText.split(" et ").length -1;

console.log(etAppears)