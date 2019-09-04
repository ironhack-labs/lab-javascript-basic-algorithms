//Iteration 1: Names and Input

let hacker1 = "Filipe Gonçalves";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Fabio Gasperini";
console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`);
}

//Iteration 3: Loops

let compilation1 = "";
for (let i = 0; i < hacker1.length; i += 1) {
    compilation1 = compilation1 + hacker1[i] + " ";
}
console.log(compilation1.toUpperCase());

let compilation2 = "";
for (let i = hacker1.length - 1; i >= 0; i -= 1) {
    compilation2 = compilation2 + hacker1[i];
}
console.log(compilation2);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both got the same name?")
}

//Bonus Time!

let bonusString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, ex nec scelerisque eleifend, magna augue sodales mi, non interdum nibh purus id diam. Cras eros eros, sagittis vitae sem id, placerat facilisis nibh. Morbi ac neque mauris. Morbi quis urna mollis, congue lorem non, posuere erat. Curabitur et nunc eget dui pellentesque pulvinar ultrices rhoncus erat. Nam quis est feugiat, lacinia nisi efficitur, faucibus enim. Nullam iaculis dui nec consequat sollicitudin. Nulla massa odio, tempus hendrerit ultrices lacinia, gravida sit amet libero. Phasellus elementum odio sed leo elementum, a iaculis nisi aliquam. Cras tempor leo sit amet sem sodales, sed convallis nibh imperdiet. Vivamus vitae augue sed nisi molestie congue vitae sit amet ante. Donec et varius arcu, eget pretium nisi. Nam interdum arcu et dolor mattis, quis pretium nibh molestie. Proin sodales porttitor vehicula.

Donec in ullamcorper quam. Quisque id purus vitae lacus semper facilisis. Proin commodo ullamcorper gravida. Nullam vulputate, quam eu tincidunt gravida, leo tellus gravida libero, ac sodales lorem ipsum at justo. In posuere risus pharetra, scelerisque ex eget, euismod velit. Phasellus pulvinar posuere enim ut consectetur. Quisque gravida tristique nulla at molestie. Fusce metus enim, eleifend sed libero a, pulvinar feugiat est. Mauris pretium vitae erat ut convallis. Pellentesque cursus, risus ac tempus venenatis, lorem ligula scelerisque nunc, eget aliquet dolor ex eleifend justo.

In quis justo metus. Etiam rhoncus porta viverra. Sed ultricies non risus et volutpat. Cras sit amet quam eget nunc auctor faucibus at vel leo. In hac habitasse platea dictumst. Aenean non neque vel lectus laoreet eleifend sit amet a eros. Nunc rutrum, massa in faucibus rutrum, enim nibh imperdiet lorem, laoreet aliquam est ante in ante. Integer faucibus lacus quis nulla suscipit, at tempus lorem blandit. Sed at ullamcorper lectus, nec porta ligula. Suspendisse at mauris eu arcu pellentesque suscipit in et leo. Maecenas molestie faucibus maximus. Morbi convallis ultricies leo. Morbi nec ligula mi. Nunc tristique accumsan felis sit amet lacinia. Praesent convallis, est et luctus posuere, nunc nulla venenatis justo, nec egestas lorem nisi ac risus.`;

function wordCount() {
    console.log(bonusString.split(" ").length + 1);
}
wordCount();

function etCount() {
    console.log(bonusString.split("et").length);
}
etCount();