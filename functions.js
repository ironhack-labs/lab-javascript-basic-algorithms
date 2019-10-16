// LOUISE & AMINE LAB - DAY 3 
// Iteration 1: Names and Input
let hackers1 = "Louise";
console.log("The driver's name is " + hackers1);
let hackers2 = "Amine";
console.log("The navigator's name is " + hackers2);

// Iteration 2: Conditionals
if (hackers1.length > hackers2.length) {
    console.log(`The Driver has the longest name, it has ${hackers1.length} characters`);
} else if (hackers1.length < hackers2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hackers2.length} characters`);
} else {
    console.log(`Wow, you both got equally long names, ${hackers1.length} characters!`);
}
//### Iteration 3: Loops
var str = ""
for (i = 0; i < hackers1.length; i++) {
    str = str + hackers1[i].toUpperCase() + " "
}

var str2 = ""
for (i = hackers2.length - 1; i >= 0; i--) {
    str2 = str2 + hackers2[i];
}

if (hackers1.localeCompare(hackers2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hackers1.localeCompare(hackers2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else if (hackers1.localeCompare(hackers2) === 0) {
    console.log(`What?! You both got the same name?`);
}

//### Iteration BONUS
var loremIpsum = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."

var totalWord = 0;
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " ") {
        totalWord = totalWord + 1;
    }
}
console.log(`The number of words of the text is : ${totalWord + 1}`)

var totalWordEt = 0;
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === "e" && loremIpsum[i + 1] === "t") {
        totalWordEt = totalWordEt + 1;
    }
}
console.log(`The number of words "et" is : ${totalWordEt}`)