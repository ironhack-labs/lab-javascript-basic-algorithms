// Iteration 1: Names and Input

let hacker1 = "Francisco";

console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Marina";

console.log(`The navigator´s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length < hacker2.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else if (hacker1.length === hacker2.length) {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}

// Iteration 3: Loops

let driversName = "";
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName);

let navigatorsName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsName += hacker2[i];
}
console.log(navigatorsName);

if (hacker1.localeCompare(hacker2)) {
    console.log("The driver´s name goes first");
} else if (hacker1.localeCompare(hacker2)) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus1

let sentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis accumsan bibendum. Donec pellentesque sed enim id congue. Suspendisse aliquam faucibus tellus eget tincidunt. Nullam a leo in urna lobortis ornare semper ut augue. Mauris fermentum ac turpis et euismod. Maecenas imperdiet nunc venenatis lacinia auctor. Phasellus viverra tellus in nunc maximus imperdiet. Nullam a convallis turpis, non malesuada arcu. Donec sit amet sodales eros, et pretium leo. Sed porttitor urna a metus sollicitudin aliquam. Phasellus aliquam, dui ac lacinia cursus, diam quam ornare nulla, ut maximus augue mi vel sapien. Nunc tristique erat eu est sodales rhoncus. Pellentesque pretium, sem ac commodo tempor, lorem enim aliquet nisl, et pharetra urna erat sed dui. Phasellus turpis tortor, rutrum nec velit eget, maximus tristique ipsum. Mauris diam libero, ullamcorper vitae pulvinar sit amet, suscipit quis nibh. Nunc massa sapien, pharetra a iaculis et, scelerisque eget nisl. Aliquam bibendum sit amet est eu efficitur. Nulla eget mi vel ipsum commodo fermentum. Vivamus lacus ipsum, pretium dapibus suscipit id, vulputate a orci. In sollicitudin ex vitae urna facilisis imperdiet. Mauris at malesuada tellus. Nullam lobortis gravida mauris, sit amet viverra mi rhoncus eu. Aenean scelerisque orci diam, ut scelerisque sem lobortis id. Sed venenatis a mi a varius. Vivamus eget consectetur nunc. Curabitur ut magna commodo, aliquam lorem at, posuere diam. Nunc accumsan vel ipsum et volutpat. Morbi lacinia, leo ut viverra volutpat, tellus risus feugiat ex, eget finibus metus leo at urna. Sed iaculis tempus augue, eget consequat felis ornare a. Fusce vitae hendrerit libero. Nulla sollicitudin tortor vitae nisi interdum, nec pellentesque justo convallis. Ut risus libero, tincidunt scelerisque velit sit amet, fringilla tincidunt risus. Vestibulum vitae malesuada est, id lobortis mauris. Vestibulum ullamcorper lacus tortor, nec placerat erat gravida vitae. Praesent tincidunt porta orci tincidunt semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet justo rutrum velit eleifend lobortis. Pellentesque neque odio, ornare ut erat a, lobortis gravida elit. Donec dapibus tellus et ante ultrices malesuada.";

let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        count++;
    }
}

console.log(count + 1);

let number = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === " " && sentence[i + 1] === "e" && sentence[i + 2] === "t") {
        number++;
    }
}

console.log(number);

//Bonus 2

let phraseToCheck = "step on no pets";
let pTCLenght = phraseToCheck.length;
for(let i = 0 ; i < pTCLenght / 2; i++ ) {
    if(phraseToCheck[i] === phraseToCheck[pTCLenght -1 -i]){
        console.log("It's a Palindrome")
    } else {
        console.log("It's not a Palindrome")
    }
}
