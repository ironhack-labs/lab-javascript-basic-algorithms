// Iteration 1: Names and Input

let hacker1 = "Leticia";
console.log(`the driver name is ${hacker1}`);

let hacker2 = "Keven";
console.log(`the navegator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`)

} else if (hacker1.length == hacker2.length) {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let spacedLetters = "";
let reversedName = "";


for (let i = 0; i < hacker1.length; i++) {
    spacedLetters += hacker1[i] + " ";
}
console.log(spacedLetters.toUpperCase())

for (let i = hacker2.length - 1; i >= 0; i--) {

    reversedName += hacker2[i];
}
console.log(reversedName)

if (hacker1.localeCompare(hacker2) === -1) {

    console.log(`The driver's name goes first.`)

} else if (hacker1.localeCompare(hacker2) === 1) {

    console.log(`Yo, the navigator goes first definitely.`)

} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?.`)
}

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ultricies eros in molestie. Pellentesque sed fermentum neque. Integer congue nulla imperdiet, porta neque in, egestas lorem. Morbi imperdiet sed nunc vitae efficitur. Nunc finibus, arcu quis eleifend pellentesque, ligula lorem volutpat metus, convallis elementum purus turpis in neque. Nam fringilla mollis dolor at fermentum. Maecenas sed pharetra libero. Nam ligula turpis, pellentesque ut dui pharetra, volutpat aliquet enim. Donec pretium mi mauris, ac porttitor dolor dictum et. Vestibulum at pretium massa. Quisque ac augue dignissim, viverra leo eget, varius lectus. Donec nibh sapien, ultrices quis ex ac, efficitur venenatis eros. Sed porttitor tellus libero, efficitur sollicitudin mi aliquam vel.

In fringilla lectus tellus, sodales maximus nibh dignissim eget.Nunc vitae est ut ligula feugiat lobortis.Proin tincidunt purus vitae accumsan sagittis.Suspendisse sed mauris nisl.Nullam dapibus consequat leo id ultrices.Cras sollicitudin urna tortor, id semper nunc dictum ut.Donec vestibulum lacus non enim viverra, sit amet finibus orci gravida.

Ut lobortis urna in viverra scelerisque.Maecenas ornare eu dolor nec porttitor.Fusce at eros sed quam porttitor consectetur in non ante.Duis eget congue eros, vel posuere sem.Aenean iaculis porta pellentesque.Cras eros mauris, vestibulum semper consectetur sit amet, fringilla a ipsum.Ut et scelerisque erat, sit amet aliquet risus.Sed vel est tellus.Etiam non ipsum turpis.Ut eu leo eget purus sagittis hendrerit eget eget nisl.
"