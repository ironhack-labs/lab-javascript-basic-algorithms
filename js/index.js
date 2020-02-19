// Iteration 1: Names and Input
let hacker1 = "Ricky Victor de Almeida";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Pedro Vinícius de Assunção Siqueira";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker2.length} characters!`
    );
}
// Iteration 3: Loops
let result = "";
for (i = 0; i < hacker1.length; i++) {
    let capitalName = hacker1.toUpperCase();
    if (i === hacker1.length - 1) {
        result += `${capitalName[i]}`;
    } else {
        result += `${capitalName[i]} `;
    }
}

console.log(result);

let resultado = hacker2
    .split("")
    .reverse()
    .join("");
console.log(resultado);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`- What?! You both have the same name?`);
}

let stringQualquer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ligula ut elit pulvinar gravida. Phasellus vel congue ipsum. Sed ultricies ipsum quam, quis semper quam facilisis at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mauris dui, pretium in finibus non, iaculis vel felis. Nunc maximus ut ligula id laoreet. Pellentesque feugiat id leo ac venenatis. Vestibulum ex nisl, egestas a feugiat a, molestie quis sapien. Phasellus efficitur convallis iaculis. Integer rutrum, nisl id tempus scelerisque, libero justo elementum lectus, a tristique elit sapien id orci. Aenean vel consequat ante, vitae pellentesque elit. Etiam faucibus justo nulla. Vestibulum tristique molestie nunc, a ornare nunc aliquam vitae. Quisque malesuada ultrices egestas. Nulla mollis ut erat sit amet scelerisque. Maecenas euismod quam ac diam ultrices, quis commodo risus rutrum. Duis consectetur dui nec orci hendrerit, vitae tempus velit fermentum. Quisque risus tortor, fermentum eget sapien accumsan, volutpat fringilla leo. Nunc rhoncus augue sed nisi sodales condimentum. Nunc ornare ut tortor ut semper. Pellentesque blandit, elit sit amet congue lacinia, mi ante rutrum purus, pharetra ornare dolor ante non risus. Praesent at dictum augue. Cras vehicula suscipit turpis eu dapibus. Aliquam ut tristique mauris, et volutpat risus. Sed euismod, nisi id aliquam tempus, ligula lorem tristique leo, vitae molestie mauris felis eget ligula. Sed non nisl lacus. Aenean nec quam id mi facilisis pharetra eu at ex. Donec ac vehicula lorem. Donec aliquet dignissim justo, id dignissim metus. Ut sagittis metus non pellentesque sagittis.`;

let aux = 0;
for (i = 0; i < stringQualquer.length; i++) {
    if (stringQualquer[i] == " ") {
        aux += 1;
    }
}
console.log(aux + 1);

let phraseToCheck = "Was it a car or a cat I saw?".toLowerCase();

let phraseToCheckNoSpecials = "";

for (i = 0; i < phraseToCheck.length; i++) {
    if (
        phraseToCheck[i] == "!" ||
        phraseToCheck[i] == "," ||
        phraseToCheck[i] == " " ||
        phraseToCheck[i] == "." ||
        phraseToCheck[i] == "?" ||
        phraseToCheck[i] == "'"
    ) {
        continue;
    } else {
        phraseToCheckNoSpecials += phraseToCheck[i];
    }
}

let phraseToCheckInverse = phraseToCheckNoSpecials
    .split("")
    .reverse()
    .join("");
console.log(phraseToCheckNoSpecials, phraseToCheckInverse);

console.log(
    phraseToCheckNoSpecials == phraseToCheckInverse
        ? `Yes it's a Palindrome`
        : `No it's not a Palindrome`
);
