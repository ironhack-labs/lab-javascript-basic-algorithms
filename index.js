// Iteration 1: Names and Input
const hacker1 = "Daniela";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Paloma";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver's has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops
let separateName = "";

for (let i = 0; i <= hacker1.length - 1; i++) {
    const char = hacker1[i] + " ";
    separateName += char;
}

console.log(separateName.toUpperCase());

let nameReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    const charReverse = hacker1[i];
    nameReverse += charReverse;
}

console.log(nameReverse);


if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("What?! You both have the same name?");
}

// Iteration 4

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat arcu rhoncus, sollicitudin magna euismod, pulvinar eros. In finibus urna eu arcu blandit, ut aliquam quam egestas. Aenean fermentum consectetur magna, eget pretium neque. Praesent feugiat aliquet nunc, sed commodo arcu gravida ac. Donec sollicitudin eget turpis id volutpat. Aliquam erat volutpat. Cras porta purus dui, non gravida ex tempor eu. Phasellus pellentesque vitae lacus sit amet mattis. Maecenas at erat nec turpis condimentum gravida. Etiam hendrerit tortor in neque facilisis gravida. Suspendisse blandit eget sem non molestie. Vestibulum consequat scelerisque risus, ut ullamcorper ante iaculis et. Praesent elementum lorem a leo egestas placerat. Curabitur nec lorem lacus. Nulla viverra arcu non augue rutrum suscipit.Nulla pharetra semper tincidunt.Nullam varius quam nec libero aliquam tempus.Quisque sit amet sodales diam.Proin bibendum dapibus lorem, eget tempus sapien tincidunt et.Sed malesuada bibendum molestie.Phasellus metus elit, laoreet sed bibendum vehicula, auctor in nisi.Nulla facilisi. Donec ligula sem, vulputate sed ullamcorper at, consectetur in eros.Fusce quis accumsan arcu, sit amet cursus odio.Donec libero augue, pellentesque vehicula elementum at, consequat non nulla.Phasellus auctor magna sapien, in sagittis massa imperdiet et.Phasellus et mauris tortor.Quisque ante augue, placerat egestas consectetur rhoncus, sodales quis quam.Pellentesque vehicula porta venenatis.Aenean imperdiet sodales pharetra.Suspendisse sit amet ex vehicula, consequat ante porta, accumsan tellus.Aenean pulvinar mauris at ipsum pretium auctor.Curabitur suscipit viverra nisl a maximus.Donec sed vehicula diam.Praesent iaculis condimentum lacinia.Donec pharetra condimentum nisl, id tempus sem sodales dictum.Quisque sit amet arcu ac sapien aliquet placerat ut eget elit.Ut et justo eu nulla accumsan mattis non vitae velit.";

let counter = "";

while (i <= longText) {

}
